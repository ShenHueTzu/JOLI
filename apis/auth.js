import Cookies from 'js-cookie';
import { HOST } from '../config';
import apiPath from '../constants/apiPath';

export const signIn = (data) => {
  const options = {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(data),
  };

  return fetch(`${HOST}${apiPath.auth.signin}`, options)
  .then((res) => res.json())
  .then((resp) => {
    if (resp.token) {
      Cookies.set('access_token', resp.token);
    }
    if (resp.refresh_token) {
      Cookies.set('refresh_token', resp.refresh_token);
    }
  })
  .catch((e) => console.log(e));
};
