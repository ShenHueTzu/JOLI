import React from 'react';

import Button from '../../components/button';

import { BtnGroup } from './styled';

const ShareLink = ({ formName, onDelete, handleClose }) => (
  <>
    <span>
      Delete {formName} right now ?
    </span>
    <BtnGroup>
      <Button
        text="No"
        theme="black"
        onClickEvent={() => handleClose()}
      />
      <Button
        text="Yes"
        theme="green"
        onClickEvent={() => onDelete()}
      />
    </BtnGroup>
  </>
);

export default ShareLink;
