import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import styled from 'styled-components';

import Header from '../containers/header';
import NavBar from '../containers/navBar';
import CardList from '../containers/cardList';

const Inner = styled.div`
  padding: 100px;
`;

const Page = () => {
  const router = useRouter();
  const [tabName, setTabName] = useState('my-form');
  useEffect(() => {
    const accessToken = Cookies.get('access_token');
    if (!accessToken) {
      router.push('/login');
    }
  }, []);

  const onTabChange = (tab) => setTabName(tab);

  return (
    <>
      <Header />
      <NavBar type="tab" tabName={tabName} onTabChange={onTabChange} />
      <Inner>
        <CardList tabName={tabName} />
      </Inner>
    </>
  );
};

export default Page;
