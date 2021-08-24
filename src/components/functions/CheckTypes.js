import React from "react";
import CustomDropdown from "../features/dropdown/CustomDropdown";
import SingleMultiDropdown from "../features/dropdown/SingleMultiDropdown";
import InputText from "../features/dropdown/InputText";
const CheckTypes = (props) => {
  var checkProps = (props) => {
    console.log(props);
    var data, defaultValue;
    if (props.item.values !== undefined) {
      data = props.item.values;
    }
    if (props.item.defaultValue !== undefined) {
      defaultValue = props.item.defaultValue;
    }
    if (props.item.type === "customDropdown") {
      return <CustomDropdown key={props} data={data} />;
    } else if (props.item.type === "singleSelect") {
      return (
        <SingleMultiDropdown
          key={props}
          singleSelect={true}
          showCheckbox={false}
          data={data}
          defaultValue={defaultValue}
        />
      );
    } else if (props.item.type === "multiSelect") {
      return (
        <SingleMultiDropdown
          key={props}
          singleSelect={false}
          showCheckbox={true}
          data={data}
          defaultValue={defaultValue}
        />
      );
    } else if (props.item.type === "text") {
      return <InputText key={props} data={data} />;
    }
  };
  return (
    <div className="checktypes">
      <div className="checktypes__eachitem">{checkProps(props)}</div>
    </div>
  );
};

export default CheckTypes;
