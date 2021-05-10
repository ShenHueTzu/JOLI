import React from 'react';

import Header from '../containers/header';
import NavBar from '../containers/navBar';
import Inner from '../containers/publish';

const Page = () => (
  <>
    <Header />
    <NavBar type="bread" indx={2} />
    <Inner />
  </>
);

export default Page;
