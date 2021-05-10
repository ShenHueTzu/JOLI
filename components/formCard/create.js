import React from 'react';

import { CreateOuter } from './styled';

const CreateCard = ({ handleAdd }) => (
  <CreateOuter onClick={() => handleAdd()}>
    <span><img src="/icons/plus.svg" alt="plus-ic" /></span>
    <span>Create New Now!</span>
  </CreateOuter>
);

export default CreateCard;
