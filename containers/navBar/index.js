import React, { useState } from 'react';
import propTypes from 'prop-types';

import BreadCrumb from './breadcrumb';
import TabGroup from './tab';
import Form from './form';

import { Wrapper, Inner } from './styled';

const NavBar = ({ type, indx, name, tabName, onTabChange, handleSubmit }) => (
  <Wrapper>
    <Inner type={type}>
      {type === 'tab' && <TabGroup tabName={tabName} onTabChange={(tab) => onTabChange(tab)} />}
      {type === 'bread' && <BreadCrumb indx={indx} />}
      {type === 'form' && <Form formName={name} handleSubmit={handleSubmit} />}
      {type === 'response' && <Form formName={name} />}
    </Inner>
  </Wrapper>
);

NavBar.propTypes = {
  type: propTypes.oneOf([
    'tab',
    'bread',
  ]),
};

export default NavBar;
