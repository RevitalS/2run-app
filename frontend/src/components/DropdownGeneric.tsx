import React from 'react';

interface IProps {
    dropdownValues: {
    type: string;
    options: Array<string>;
    }
}

const DropdownGeneric: React.FC<IProps> = (props) => {
    const {type, options} = props.dropdownValues;
  return (
      <>
      <label htmlFor={type}>{type}</label>
      <select name={type} id={type} >
          {options.map((option, i) => <option key={i} value={option}>{option}</option>)}
      </select>
      </>
  );
};

export default DropdownGeneric;
