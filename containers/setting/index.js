import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import { saveForm } from '../../redux/slices/formsSlice';

import TextField from '../../components/fields/textField';
import Textarea from '../../components/fields/textarea';
import Button from '../../components/button';
import Toggle from '../toggle';

import { Wrapper, InnerCon, Group, BtnGroup } from './styled';

const Inner = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [data, setData] = useState({
    name: '',
    description: '',
    expires_at: false,
    collectEmail: false,
    display_type: 'private',
    allowEdit: false,
    block: [],
  });

  const handleChange = (e, params) => {
    data[params] = e.target.value;
    setData(data);
  };

  const handleToggle = (key, value) => {
    if (key === 'display_type') {
      if (value) { value = 'public'; }
      if (!value) { value = 'private'; }
    }
    if (key === 'expired_at') {
      const today = new Date();
      const tomorrow = new Date(today);
      const timestamp = Math.floor(tomorrow / 1000);
      value = timestamp;
    }

    data[key] = value;
    setData(data);
  };

  const handleSave = () => {
    dispatch(saveForm(data));
    router.push('/create-questions');
  };

  return (
    <Wrapper>
      <InnerCon>
        <h2>Informations</h2>
        <Group><p>Title</p> <TextField onChangeEvent={(e) => handleChange(e, 'name')} /></Group>
        <Group><p>Description</p> <Textarea onChangeEvent={(e) => handleChange(e, 'description')} /></Group>
        <Group><p>Image</p> <Button text="Upload" theme="black" /></Group>
      </InnerCon>
      <InnerCon>
        <h2>Response Setting</h2>
        <Group><p>deadline</p> <Toggle activeText="ON" inactiveText="OFF" onChangeEvent={(value) => handleToggle('expires_at', value)} /></Group>
        <Group><p>collect user name</p> <Toggle activeText="ON" inactiveText="OFF" onChangeEvent={(value) => handleToggle('collectEmail', value)} /></Group>
      </InnerCon>
      <InnerCon>
        <h2>Permission Setting</h2>
        <Group><p>View others response</p> <Toggle activeText="ON" inactiveText="OFF" onChangeEvent={(value) => handleToggle('display_type', value)} /></Group>
        {/* <Group><p>Only submit once</p> <Toggle activeText="ON" inactiveText="OFF" /></Group> */}
        <Group><p>Editable after submitting</p> <Toggle activeText="ON" inactiveText="OFF" onChangeEvent={(value) => handleToggle('allowEdit', value)} /></Group>
      </InnerCon>
      <BtnGroup>
        <Button
          text="Cancel"
          size="large"
          theme="lightGray"
          onClickEvent={() => router.push('/')}
        />
        <Button
          text="Continue"
          size="large"
          theme="green"
          onClickEvent={() => handleSave()}
        />
      </BtnGroup>
    </Wrapper>
  );
};

export default Inner;
