import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Button, Form, Icon, Grid, Radio, Checkbox } from "semantic-ui-react";
import "./export.scss";
import "react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css";
import ModalComponent from "../modal/Modal";
import CardSmall from "./CardSmall";

const Export = ({
  attributes,
  closeIcon,
  setModal,
  modal,
  actions,
  size,
  column,
}) => {
  const [exportValue, setExportValue] = useState({});
  const [searchValue, setSearchValue] = useState({});
  const [value, setValue] = useState(null);

  useEffect(()=>{
    console.log('render-----------------')
  },[])

  const handleChange = (event) => {
    if (event.target) {
      setExportValue({
        ...exportValue,
        [event.target.name]: event.target.value,
      });
    }
  };

  const handleSelect = (event, result) => {
    const { name, value } = result || event.target;
    if (event.target) {
      setSearchValue({ ...searchValue, [name]: value });
    }
  };

  const handleRadioChange = (event, data) => {
    const { value } = data;
    if (event.target) {
      setExportValue({
        ...exportValue,
        method: value,
      });
    }
  };

  const onChangeCheckbox = (evt, data) => {
    let checked = data.checked;

    console.log(data);
    if (checked) {
      setExportValue({
        ...exportValue,
        checkedFields: {
          ...exportValue.checkedFields,
          [data.value]: checked,
        },
      });
    } else {
      const asArray = Object.entries(exportValue.checkedFields);
      const newObj = {};
      for (const [key, value] of Object.entries(exportValue.checkedFields)) {
        if (key !== data.value) {
          newObj[key] = value;
        }
        setExportValue({
          ...exportValue,
          checkedFields: {
            ...newObj,
          },
        });
      }
    }
  };

  const onChangeSelectAll = (evt, data) =>{

  }

  return (
    <>
      <Grid>
        <Grid.Row style={{ paddingBottom: "1rem" }}>
          <Grid.Column width={3}> </Grid.Column>
          <Grid.Column width={10}></Grid.Column>
          <Grid.Column width={3} textAlign="right">
            <Button className="download_btn" onClick={() => setModal(!modal)}>
              <Icon className="download"></Icon>
              DownLoad
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <ModalComponent
        modal={modal}
        setModal={setModal}
        title={"Download"}
        size={size}
        actions={actions}
        closeIcon={closeIcon}
        bodyData={exportValue}
      >
        {attributes && attributes ? (
          <Form>
            <Grid columns={column} container doubling stackable>
              {attributes &&
                attributes.map((item, index) => {
                  if (item.type === "select") {
                    return (
                      <Grid.Column>
                        <Form.Dropdown
                          key={index}
                          search={true}
                          placeholder={item.label}
                          fluid
                          name={item.name}
                          multiple={item.multi || false}
                          selection
                          options={item.option}
                          onChange={handleSelect}
                          value={
                            item.multi
                              ? searchValue[item.name] || []
                              : searchValue[item.name] || ""
                          }
                        />
                      </Grid.Column>
                    );
                  } else if (item.type === "radio") {
                    return (
                      <Grid.Column>
                        <Form.Field>
                          <Radio
                            label={item.label}
                            name="radioGroup"
                            value={item.key}
                            checked={exportValue["method"] === item.key}
                            onChange={handleRadioChange}
                          />
                        </Form.Field>
                      </Grid.Column>
                    );
                  } else if (item.type === "checkbox") {
                    return (
                      <Grid.Column>
                        <Form.Field>
                          <Checkbox
                            label={item.label}
                            value={item.key}
                            onClick={(evt, data) => 
                              item.selectAll && item.selectAll ?
                              onChangeCheckbox(evt, data) : onChangeCheckbox(evt,data)
                            }
                          />
                        </Form.Field>
                      </Grid.Column>
                    );
                  }
                  return (
                    <Grid.Column>
                      <Form.Input
                        fluid
                        range="true"
                        // width={2}
                        placeholder={item.label}
                        name={item.name}
                        type={item.type}
                        key={index}
                        value={exportValue[item.name] || ""}
                        onChange={handleChange}
                        className={item.className}
                      />
                    </Grid.Column>
                  );
                })}
            </Grid>
          </Form>
        ) : (
          <p style={{ fontSize: "14px", color: "#6a6565" }}>
            You want to dowload file?
          </p>
        )}
      </ModalComponent>
    </>
  );
};

export default Export;
