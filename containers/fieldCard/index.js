import React, { useState } from 'react';
import propTypes from 'prop-types';

import Toggle from '../../containers/toggle';
import TextField from '../../components/fields/textField';
import SelectField from '../../components/fields/selectField';
import Textarea from '../../components/fields/textarea';

import data from './data';
import { Outer, Container, Row, Item } from './styled';

const FieldComp = ({ indx, type, text, handleOptions }) => {
  if (type === 'text') return <TextField isDisabled />;
  if (type === 'radio' || type === 'checkbox') {
    return (
      <SelectField
        indx={indx}
        type={type}
        text={text}
        handleOptions={handleOptions}
      />
    )
  }
  if (type === 'paragraph') return <Textarea isDisabled />;
};

const AddItem = ({ onClick }) => <Item onClick={onClick}>+ Add new</Item>;

const FieldCard = ({ indx, type, onChangeEvent, onDelete }) => {
  const [count, setCount] = useState(0);
  const [options, setOptions] = useState([]);
  const handleAdd = () => {
    setCount(count + 1);
    setOptions([ ...options, `option ${count + 1}`]);
  };
  const handleOptions = (id, value) => {
    options[id] = value;
    setOptions(options);
    onChangeEvent('options', options);
  };

  return (
    <Outer>
      <Container type="left">
        <p>{indx}</p>
        <img {...data[type].image} />
      </Container>
      <Container type="right">
        <TextField isTitle onChangeEvent={(e) => onChangeEvent('title', e.target.value)} />
        {(type === 'text' || type === 'paragraph') && <FieldComp type={type} />}
        { options.map((ele, idx) => (
            <FieldComp
              key={idx}
              type={type}
              text={ele}
              indx={idx}
              handleOptions={(id, value) => handleOptions(id, value)}
            />
          ))}
        {(type === 'radio' || type === 'checkbox') && <AddItem onClick={() => handleAdd()} />}
        <Row>
          {/* <Button></Button> */}
          <Toggle
            onChangeEvent={(value) => onChangeEvent('required', value)}
            activeText="Required"
            inactiveText="Not Required"
          />
          <img
            src="/icons/delete.svg"
            alt="ic-delete"
            onClick={() => onDelete(indx)}
          />
        </Row>
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
