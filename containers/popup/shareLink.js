import React from 'react';

import TextField from '../../components/fields/textField';
import Button from '../../components/button';

import { Group } from './styled';

const ShareLink = ({ value, handleCopy }) => (
  <Group>
    <TextField value={value} id="copy_link" />
    <Button
      text="copy"
      theme="green"
      onClickEvent={() => handleCopy()}
    />
  </Group>
);

export default ShareLink;
