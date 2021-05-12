import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import { submitForm } from '../../../apis/forms';
import { fetchSingleFormData } from '../../../redux/slices/formsSlice';

import Header from '../../../containers/header';
import NavBar from '../../../containers/navBar';
import Message from '../../../containers/message';
import Form from '../../../containers/filledForm';

const Inner = styled.div`
  display: flex;

`;

const Page = () => {
  const router = useRouter();
  const { uuid } = router.query;

  const dispatch = useDispatch();
  const { singleform } = useSelector((state) => state.form);

  useEffect(() => {
    dispatch(fetchSingleFormData({ uuid }));
  }, [uuid]);

  const [response, setResponse] = useState([]);

  const handleSubmit = () => {
    submitForm(response, uuid);
    setTimeout(() => router.push('/'), [1000]);
  };

  const handleChange = (e, key, value) => {
    let block = { blockId: '', value: [] };
    const activeBlock = response.findIndex((el) => el.blockId === value);

    if (activeBlock !== -1) {
      response[activeBlock]['value'] = [e.target.value];
      setResponse([...response]);
    } else {
      block[key] = value;
      block.value.push(e.target.value);

      setResponse([...response, block]);
    }
  };

  const handleSelect = (type, id, value) => {
    let block = {};
    const activeBlock = response.findIndex((el) => el.blockId === id);

    if (activeBlock !== -1) {
      if (type === 'checkbox') {
        if (value.checked) {
          response[activeBlock].value.push(value.data);
        } else {
          response[activeBlock].value = response[activeBlock].value.filter((el) => el !== value.data);
        }
        setResponse([...response]);
      }
      if (type === 'radio') {
        response[activeBlock].value = value;
        setResponse([...response]);
      }
    } else {
      if (type === 'checkbox') {
        if (value.checked) {
          block.blockId = id;
          block.value = [value.data];
          setResponse([...response, block]);
        }
      }
      if (type === 'radio') {
        block.blockId = id;
        block.value = value;
        setResponse([...response, block]);
      }
    }
  };

  return (
    <>
      <Header />
      <NavBar type="form" name={singleform.name} handleSubmit={handleSubmit} />
      <Inner>
        <Message message={singleform.description} date={singleform.updatedAt} />
        <Form blocks={singleform.Blocks} handleChange={handleChange} handleSelect={handleSelect} />
      </Inner>
    </>
  );
};

export default Page;
