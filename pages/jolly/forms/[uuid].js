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

  const [activeId, setId] = useState(null);
  const [response, setResponse] = useState([]);

  const handleSubmit = () => {
    submitForm(response, uuid);
    setTimeout(() => router.push('/'), [10000]);
  };

  const handleChange = (e, key, value) => {
    setId(value);
    let block = { blockId: '', value: [] };
    const activeBlock = response.findIndex((el) => el.blockId === activeId);

    if (activeBlock !== -1) {
      response[activeBlock]['value'] = [e.target.value];
      setResponse([...response]);
    } else {
      block[key] = value;
      block.value.push(e.target.value);

      setResponse([...response, block]);
    }
  };

  return (
    <>
      <Header />
      <NavBar type="form" name={singleform.name} handleSubmit={handleSubmit} />
      <Inner>
        <Message message={singleform.description} date={singleform.updatedAt} />
        <Form blocks={singleform.Blocks} handleChange={handleChange} />
      </Inner>
    </>
  );
};

export default Page;
