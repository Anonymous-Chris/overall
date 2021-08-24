import React from "react";
import { Multiselect } from "multiselect-react-dropdown";

const SingleMultiDropdown = (props) => {
  var onSelect = (selectedList) => {
    console.log(selectedList);
  };

  var onRemove = (selectedList) => {
    console.log(selectedList);
  };
  return (
    <div>
      {" "}
      <Multiselect
        options={props.data}
        avoidHighlightFirstOption={true}
        selectedValues={
          props.defaultValue !== undefined ? [props.item.default] : []
        }
        isObject={false}
        displayValue="name"
        showCheckbox={props.showCheckbox}
        onSelect={onSelect}
        onRemove={onRemove}
        singleSelect={props.singleSelect}
        showArrow={true}
        placeholder={`Select Filters`}
      />
    </div>
  );
};

export default SingleMultiDropdown;
