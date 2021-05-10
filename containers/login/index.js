import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

import { signIn } from '../../apis/auth';
import Button from '../../components/button';
import { Outer, Inner } from './styled';

const Login = () => {
  const router = useRouter();
  useEffect(() => {
    let accessToken = Cookies.get('access_token');
    if (!!accessToken) {
      router.push('/');
    }
  }, [Cookies.get('access_token')]);

  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const handleChange = (e, type) => {
    data[type] = e.target.value;
    setData(data);
  };
  const handleLogin = () => {
    signIn({...data});
  };

  return (
    <Outer>
      <Inner>
        <h1>Sign In</h1>
        <span>揪哩 JOLI</span>
        <input placeholder="email" onChange={(e) => handleChange(e, 'email')} />
        <input placeholder="password" onChange={(e) => handleChange(e, 'password')} />
      </Inner>
      <Button
        text="Login"
        theme="green"
        size="large"
        onClickEvent={handleLogin}
      />
    </Outer>
  );
};

export default Login;
