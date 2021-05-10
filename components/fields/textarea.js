import React from 'react';

const Textarea = ({ isDisabled, onChangeEvent }) => (
  <textarea
    rows={5}
    style={{ resize: 'none'}}
    onChange={(e) => onChangeEvent(e)}
    disabled={ isDisabled}
  />
);

export default Textarea;
