import React, { useState } from 'react';

import { Field, Edit } from './styled';

const SelectField = ({ type, text, indx, handleOptions }) => {
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

  return (
    <Field>
      <input type={type} />
      {isSelect
        ? <Edit
            defaultValue={value}
            onBlur={() => handleBlur()}
            onChange={(e) => handleChange(e)}
            onKeyDown={(e) => handleKeyDown(e)}
          />
        : <label onClick={() => setIsSelect(true)}>{value}</label>}
    </Field>
  );
};

export default SelectField;
