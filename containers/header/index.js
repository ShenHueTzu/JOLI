import Head from 'next/head';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import { fetchUserInfo } from '../../redux/slices/userSlice';
import { Wrapper, Inner, Logo, Name } from './styled';

const Header = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { info } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUserInfo());
  }, []);

  const handleClick = () => router.push('/');
  return (
    <Wrapper>
      <Inner>
        <Head>
          <title>JOLI</title>
          <meta name="viewport" content="viewport-fit=cover" />
          <meta charSet="utf-8" />
        </Head>
        <Logo onClick={() => handleClick()}>揪哩 JOLI</Logo>
        {info && <Name>{`Hello, ${info.name}`}</Name>}
      </Inner>
    </Wrapper>
  )
};

export default Header;
