import React from 'react';

import { Outer } from './styled';

const ToggleBtn = ({ children, isActive, onClick }) => (
  <Outer isActive={isActive} onClick={onClick}>
    {children}
  </Outer>
);

export default ToggleBtn;
