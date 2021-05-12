import Cookies from 'js-cookie';
import { HOST } from '../config';
import apiPath from '../constants/apiPath';

import { fetchFormList } from '../redux/slices/formsSlice';

let accessToken = Cookies.get('access_token');

export const getFormList = () => {
  const options = {
    method: 'GET',
    headers: new Headers({
      'Authorization': `Bearer ${accessToken}`
    }),
  };

  return fetch(`${HOST}${apiPath.forms.formList}`, options)
  .then((res) => res.json())
  .then((resp) => resp)
  .catch((e) => console.log(e));
};

export const getFormById = ({ uuid }) => {
  const options = {
    method: 'GET',
    headers: new Headers({
      'Authorization': `Bearer ${accessToken}`
    }),
  };

  return fetch(`${HOST}${apiPath.forms.formList}/${uuid}`, options)
    .then((res) => res.json())
    .then((resp) => resp)
    .catch((e) => console.log(e));
};

export const getFormResponse = ({ uuid }) => {
  const options = {
    method: 'GET',
    headers: new Headers({
      'Authorization': `Bearer ${accessToken}`
    }),
  };

  return fetch(`${HOST}${apiPath.forms.formList}/${uuid}/response`, options)
    .then((res) => res.json())
    .then((resp) => resp)
    .catch((e) => console.log(e));
}

export const createForm = (data) => {
  const options = {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    }),
    body: JSON.stringify(data),
  };

  return fetch(`${HOST}${apiPath.forms.formList}`, options)
  .then((res) => res.json())
  .then((resp) => resp)
  .catch((e) => console.log(e));
};

export const deleteForm = ({ uuid, dispatch }) => {
  const options = {
    method: 'DELETE',
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    }),
  };
  return fetch(`${HOST}${apiPath.forms.formList}/${uuid}`, options)
  .then((res) => res.json())
  .then(() => dispatch(fetchFormList()))
  .catch((e) => console.log(e));
};

export const submitForm = (data, uuid) => {
  const options = {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    }),
    body: JSON.stringify(data),
  };

  return fetch(`${HOST}${apiPath.forms.formList}/${uuid}/submit`, options)
  .then((res) => res.json())
  .then((resp) => resp)
  .catch((e) => console.log(e));
};