import React from 'react';
import propTypes from 'prop-types';

import data from './data';
import { Outer } from './styled';

const CreateField = ({ type, onClickEvent }) => (
  <Outer onClick={() => onClickEvent(type)}>
    <img {...data[type].image} />
    <p>{type && data[type].text}</p>
  </Outer>
);

CreateField.propTypes = {
  type: propTypes.oneOf([
    'radio',
    'checkbox',
    'text',
    'paragraph',
  ]),
};

export default CreateField;
