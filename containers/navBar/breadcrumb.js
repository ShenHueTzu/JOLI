import React from 'react';

import { BreadItem } from './styled';

const data = ['Settings', 'Questions', 'Publish']

const BreadCrumb = ({ indx }) => (
  <>
    { data.map((item, idx) => (
      <BreadItem isActive={indx === idx}>
        <p>{item}</p>
        {idx < 2 && <span> {'>'} </span>}
      </BreadItem>
    ))}
  </>
);

export default BreadCrumb;
