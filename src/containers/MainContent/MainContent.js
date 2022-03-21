import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import "./MainContent.scss";
import routes from "../../routes";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse" />
  </div>
);

const MainContent = (props) => {
  return (
    <div>
      {props.children}
      <Suspense fallback={loading}>
        <Switch>
          {routes.map(
            (route) =>
              route.component && (
                <Route
                  key={route.name}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={(props) => <route.component {...props} />}
                />
              )
          )}
        </Switch>
      </Suspense>
    </div>
  );
};

export default React.memo(MainContent);
