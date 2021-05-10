import React from 'react';

import Header from '../containers/header';
import NavBar from '../containers/navBar';
import Inner from '../containers/questions';

const Page = () => (
  <>
    <Header />
    <NavBar type="bread" indx={1} />
    <Inner />
  </>
);

export default Page;
