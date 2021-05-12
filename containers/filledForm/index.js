import React from 'react';

import FieldCard from '../fieldCard/filled';

import { Wrapper } from './styled';

const Form = ({ blocks, handleChange, handleSelect }) => (
  <Wrapper>
    <img />
    { blocks && blocks.map((block, idx) => (
      <FieldCard key={idx} indx={idx} block={block} handleChange={handleChange} handleSelect={handleSelect} />
    ))}
  </Wrapper>
);

export default Form;
