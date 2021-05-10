import Cookies from 'js-cookie';
import { HOST } from '../config';
import apiPath from '../constants/apiPath';

let accessToken = Cookies.get('access_token');

export const getResponseList = () => {
  const options = {
    method: 'GET',
    headers: new Headers({
      'Authorization': `Bearer ${accessToken}`
    }),
  };

  return fetch(`${HOST}${apiPath.response.responseList}`, options)
  .then((res) => res.json())
  .then((resp) => resp)
  .catch((e) => console.log(e));
};