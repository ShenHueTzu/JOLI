import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import { fetchSingleFormData, fethchFormResponse } from '../../../redux/slices/formsSlice';

import Header from '../../../containers/header';
import NavBar from '../../../containers/navBar';

const Inner = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px auto;
  
  td {
    background: #f4f4f4;
    padding: 8px 16px;
  }
  table {
    border: 1px solid;
  }
`;

const Page = () => {
  const router = useRouter();
  const { uuid } = router.query;

  const dispatch = useDispatch();
  const { singleform } = useSelector((state) => state.form);
  const { responses } = useSelector((state) => state.form);

  console.log(responses);

  useEffect(() => {
    if (uuid) {
      dispatch(fetchSingleFormData({ uuid }));
      dispatch(fethchFormResponse({ uuid }));
    }
  }, [uuid]);

  return (
    <>
      <Header />
      <NavBar type="response" name={singleform.name} />
      <Inner>
        <table>
          { responses.map((res, idx) => (
            <tbody>
              {idx === 0 && (
                <tr key={idx}>
                  {res.map((title, idx) => <th key={idx}>{res}</th>)}
                </tr>
              )}
              {idx > 0 && (
                <tr>{res.map((res, idx) => <td key={idx}>{res}</td>)}</tr>
              )}
            </tbody>
          ))}
        </table>
      </Inner>
    </>
  );
};

export default Page;
