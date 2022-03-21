import React, { Suspense, useEffect } from 'react';
import { Tab, Button, Icon } from 'semantic-ui-react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import _each from 'lodash/each';
import _map from 'lodash/map';
import _find from 'lodash/find';
import routes from '../routes';
import { system, addToTab, removeTab } from '../features/system/systemSlice';
import { clearExportData } from '../features/export/exportSlice';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse" />
  </div>
);

const RoutedTab = (props) => {
  const tabToRouteMap = {};
  const routeToTabsMap = {};
  const { tabs } = useSelector(system);

  const history = useHistory();
  const dispatch = useDispatch();
  const searchParam = history.location.search;
  const pathName = history.location.pathname;
  const state = history.location.state;
  const key = history.location.key;
  const pathArray = pathName.split('/');
  let tab = pathArray[pathArray.length - 1];

  const location = useLocation();
  useEffect(() => {
    console.log('You changed history add', history);
    console.log(location.state);
    if (history.action === 'POP' || history.action === 'PUSH') {
      const tabObj = {
        name: tab,
        path: pathName.concat(searchParam),
        pathname: pathName,
        key: key,
        state: { name: state },
      };

      !tabs.find((tab) => tab.name === tabObj.name) &&
        dispatch(addToTab(tabObj));
      dispatch(clearExportData);
      routes.find((item) => item.name === tabObj.name) &&
        dispatch(addToTab(tabObj));
      dispatch(clearExportData());
    } else {
      let latestTab = tabs[tabs.length - 1];
      history.replace(latestTab.path);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab, searchParam]);

  _each(tabs, (configObj, routeKey) => {
    const routeURL = configObj.pathname;
    tabToRouteMap[routeKey] = routeURL;
    routeToTabsMap[routeURL] = routeKey;
  });

  const defaultActiveKey = routeToTabsMap[history.location.pathname];

  const tabPaneNodes = _map(tabs, (route, routeKey) => {
    const routeComponent = routes.find((item) => item.path === route.pathname);

    return (
      routeComponent && {
        key: routeKey,
        menuItem: (
          <Button icon labelPosition="right">
            {routeComponent.name}
            {routeComponent.name !== 'Dashboard' && (
              <Icon
                name="right remove"
                onClick={() => deleteTab(route, routeKey)}
              />
            )}
          </Button>
        ),
        render: (props) => (
          <Tab.Pane key={routeKey} {...props}>
            {<routeComponent.component />}
          </Tab.Pane>
        ),
      }
    );
  });

  const routeNodes = _map(tabs, (route, routeKey) => {
    const routeComponent = routes.find((item) => item.path === route.pathname);
    routeComponent && (
      <Route
        key={routeComponent.name}
        path={routeComponent.path}
        exact={routeComponent.exact}
        name={routeComponent.name}
        render={(props) => <routeComponent.component {...props} />}
      />
    );
  });

  const onTabChange = (e, { activeIndex }) => {
    e.preventDefault();
    history.replace(tabToRouteMap[activeIndex]);
    dispatch(clearExportData);
  };

  const deleteTab = (tab, routeKey) => {
    dispatch(removeTab(tab));
  };

  return (
    <>
      <Tab
        fluid
        menu={{ pointing: false, secondary: true, attached: true }}
        onTabChange={onTabChange}
        activeIndex={defaultActiveKey}
        panes={tabPaneNodes}
      />
      <Suspense fallback={loading}>
        <Switch>{routeNodes}</Switch>
      </Suspense>
    </>
  );
};

export default withRouter(RoutedTab);
