import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

import { createForm } from '../../apis/forms';
import { saveuuid } from '../../redux/slices/formsSlice';

import FieldCard from '../../containers/fieldCard';
import CreateField from '../../components/createField';
import Button from '../../components/button';

import { Wrapper, AddGroup, Group, BtnGroup } from './styled';

const data = ['radio', 'checkbox', 'text', 'paragraph'];

const Inner = () => {
  const router = useRouter();
  const { formParams } = useSelector((state) => state.form);
  const dispatch = useDispatch();

  const [selectors, setArr] = useState([]);

  const handleAdd = (type) => {
    const block = {
      title: '',
      blockType: '',
      required: false,
      options: [],
    };
    block.blockType = type;

    setArr([...selectors, block])
  };
  const handleDelete = (id) => {
    let selectArr = selectors.filter((ele, idx) => idx !== id - 1);
    setArr(selectArr);
  };

  const handleChange = (idx, key, value) => {
    selectors[idx][key] = value;
  };

  const handleSubmit = () => {
    const data = {
      ...formParams,
      blocks: selectors,
    };
    const resp = createForm(data);
    if (resp) { dispatch(saveuuid(resp.uuid)) };
  };

  return (
    <Wrapper>
      { selectors && selectors.map((select, idx) => (
        <FieldCard
          indx={1+ idx}
          type={select.blockType}
          onChangeEvent={(key, value) => handleChange(idx, key, value)}
          onDelete={(idx) => handleDelete(idx)}
        />
      ))}
      <AddGroup>
        <img src="/icons/plus.svg" alt="ic-plus" />
        <Group>
          { data.map((type, idx) => (
            <CreateField
              key={idx}
              type={type}
              onClickEvent={() => handleAdd(type)}
            />
          ))}
        </Group>
      </AddGroup>
      <BtnGroup>
        <Button
          text="< Setting"
          size="large"
          theme="lightGray"
          onClickEvent={() => router.push('/create-setting')}
        />
        <Button
          text="Publish >"
          size="large"
          theme="green"
          onClickEvent={() => handleSubmit()}
        />
      </BtnGroup>
    </Wrapper>
  );
};

export default Inner;
