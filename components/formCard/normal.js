import React, { useEffect, useState } from 'react';

import Dropdown from '../dropdown';
import { NormalOuter, Upper, Bottom, Name } from './styled';

const Card = ({ id, activeId, title, times, response, sponser, options, handleClick }) => {
  const date = times !== 0 && new Date(times).toLocaleString();

  return (
    <NormalOuter>
      <Upper>
        <p>{title}</p>
      </Upper>
      <Bottom>
        <span>{date}</span>
        {response && <span><p>{response}</p> response(s)</span>}
      </Bottom>
      {sponser && <Name>{sponser}</Name>}
      <img src="/icons/more.svg" alt="ic-more" onClick={handleClick} />
      <Dropdown options={options} isActive={activeId === id} />
    </NormalOuter>
  );
};

export default Card;
