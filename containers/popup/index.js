import React from 'react';

import { Outer, Inner, Top, Content } from './styled';

const Popup = ({ title, children, onClose, isOpen }) => (
  <Outer isOpen={isOpen}>
    <Inner>
      <Top>
        <p>{title}</p>
        <span onClick={onClose}>X</span>
      </Top>
      <Content>
        {children}
      </Content>
    </Inner>
  </Outer>
);

export default Popup;
