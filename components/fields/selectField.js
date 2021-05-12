import React, { useState } from 'react';

import { Field, Edit } from './styled';

const SelectField = ({ type, text, indx, blockId, isFilled, handleOptions, onChangeEvent }) => {
  const [isSelect, setIsSelect] = useState(false);
  const [value, setValue] = useState(text || 'option 1');

  const handleChange = (e) => {
    setValue(e.target.value);
    handleOptions(indx, e.target.value);
  };
  const handleBlur = () => setIsSelect(false);
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setIsSelect(false);
    }
  };

  const handleSelect = (e) => {
    let value = [];
    if (type === 'radio') {
      value = [e.target.value];
      onChangeEvent(value);
    }
    if (type === 'checkbox') {
      value = { data: e.target.value, checked: e.target.checked }
      onChangeEvent(value);
    }
  };

  return (
    <Field>
      <input type={type} value={value} name={type === 'radio' ? `group-${blockId}` : null} onChange={(e) => handleSelect(e)} />
      {isFilled && <label>{value}</label>}
      {!isFilled && isSelect && (
        <Edit
          defaultValue={value}
          onBlur={() => handleBlur()}
          onChange={(e) => handleChange(e)}
          onKeyDown={(e) => handleKeyDown(e)}
        />
      )}
      {!isFilled && !isSelect && <label onClick={() => setIsSelect(true)}>{value}</label>}
    </Field>
  );
};

export default SelectField;
