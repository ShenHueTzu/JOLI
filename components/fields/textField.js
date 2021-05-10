import React from 'react';

import { InputField } from './styled';

const TextField = ({ id, isTitle, value, isDisabled, onChangeEvent }) => (
  <InputField
    id={id}
    type="text"
    onChange={(e) => onChangeEvent(e)}
    placeholder={isTitle ? 'Title' : ''}
    defaultValue={value || ''}
    disabled={isDisabled}
  />
);

export default TextField;
