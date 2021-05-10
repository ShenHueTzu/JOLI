import React from 'react';
import propTypes from 'prop-types';

import TextField from '../../components/fields/textField';
import SelectField from '../../components/fields/selectField';
import Textarea from '../../components/fields/textarea';

import data from './data';
import { Outer, Container, Row } from './styled';

const FieldComp = ({ indx, type, text, onChangeEvent }) => {
  if (type === 'text') return <TextField onChangeEvent={onChangeEvent} />;
  if (type === 'radio' || type === 'checkbox') return <SelectField type={type} indx={indx} text={text} onChangeEvent={onChangeEvent} />;
  if (type === 'paragraph') return <Textarea onChangeEvent={onChangeEvent} />;
};

const FieldCard = ({ indx, block, handleChange }) => {
  const type = block.blockType;

  return (
    <Outer>
      <Container type="left">
        <p>{indx + 1}</p>
        <img {...data[type].image} />
      </Container>
      <Container type="right">
        <Row isFilled>
          <p>{block.title}</p>
          <p>{block.required ? 'Required' : ''}</p>
        </Row>
        {(type === 'text' || type === 'paragraph') && <FieldComp type={type} onChangeEvent={(e) => handleChange(e, 'blockId', block.id)} />}
        { block.options.map((ele, idx) => (
            <FieldComp
              key={idx}
              onChangeEvent={() => handleChange(blockId, block.id)}
              type={type}
              text={ele}
              indx={idx}
            />
          ))}
      </Container>
    </Outer>
  );
};

FieldCard.propTypes = {
  index: propTypes.number,
  type: propTypes.oneOf([
    'radio',
    'checkbox',
    'text',
    'paragraph',
  ]),
};

export default FieldCard;
