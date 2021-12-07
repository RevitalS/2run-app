import React from 'react';

interface IProps {
    type: string;
    options: Array<string>;
}

const DropdownGeneric: React.FC<IProps> = (props) => {
    const {type, options} = props;
  return (
      <div>
      <select name={type} id={type}>
      <option value="none" selected disabled hidden>{type}</option>
          {options.map(option => <option value={option}>{option}</option>)}
      </select>
      </div>
  );
};

export default DropdownGeneric;
