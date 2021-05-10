import React from 'react';

import Header from '../containers/header';
import NavBar from '../containers/navBar';
import Inner from '../containers/setting';

const Page = () => (
  <>
    <Header />
    <NavBar type="bread" indx={0} />
    <Inner />
  </>
);

export default Page;
