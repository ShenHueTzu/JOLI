import React from 'react';

import { Outer } from './styled';

const Dropdown = ({ options, isActive }) => (
  <Outer isActive={isActive}>
    { options.map((option, idx) => (
        <span key={idx} onClick={option.onClickEvent}>
          {option.text}
        </span>
      )
    )}
  </Outer>
);

export default Dropdown;
