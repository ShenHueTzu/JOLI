import React from 'react';

import { Wrapper, Bar, Inner } from './styled';

const Message = ({ message, date }) => (
  <Wrapper>
    <Bar>Messages</Bar>
    <Inner>
      {message}
      <span>{date}</span>
    </Inner>
  </Wrapper>
);

export default Message;
