import React, { useState } from 'react';

import ToggleBtn from '../../components/toggle';

const Toggle = ({ image, activeText, inactiveText, onChangeEvent }) => {
  const [isActive, setIsActive] = useState(false);

  const onClickEvent = () => {
    onChangeEvent(!isActive);
    setIsActive(!isActive);
  };

  return (
    <ToggleBtn isActive={isActive} onClick={onClickEvent}>
      <span>
        {image && <img {...images} />}
      </span>
      <p> {isActive ? activeText : inactiveText} </p>
    </ToggleBtn>
  )
};

export default Toggle;
