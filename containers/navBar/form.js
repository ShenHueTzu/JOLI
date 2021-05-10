import React from 'react';

import Button from '../../components/button';
import { GroupBtn } from './styled';

const Form = ({ formName, handleSubmit }) => (
  <>
    <h2>{formName}</h2>
    {handleSubmit && (
      <GroupBtn>
        <Button
          text="Responses"
          theme="black"
          onClickEvent={() => console.log('show')}
        />
        <Button
          text="Submit"
          theme="green"
          onClickEvent={() => handleSubmit()}
        />
      </GroupBtn>
    )}
  </>
);

export default Form;
