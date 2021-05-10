import React from 'react';

import FieldCard from '../fieldCard/filled';

import { Wrapper } from './styled';

const Form = ({ blocks, handleChange }) => (
  <Wrapper>
    <img />
    { blocks && blocks.map((block, idx) => (
      <FieldCard key={idx} indx={idx} block={block} handleChange={handleChange} />
    ))}
  </Wrapper>
);

export default Form;
