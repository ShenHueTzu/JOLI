import React from 'react';

import TextField from '../../components/fields/textField';
import SelectField from '../../components/fields/selectField';
import Button from '../../components/button';

import { Wrapper, InnerCon, Group, BtnGroup } from './styled';

const Inner = () => (
  <Wrapper>
    <InnerCon>
      <h2>Share your questionnaire</h2>
      <Group>
        <TextField />
        <Button
          text="copy"
          theme="green"
          onClickEvent={() => console.log('copy')}
        />
      </Group>
    </InnerCon>
    <InnerCon>
      <h2>Publish to channels</h2>
      <SelectField type="checkbox" text="台南辦公室" />
      <SelectField type="checkbox" text="Town Square" />
    </InnerCon>
    <BtnGroup>
      <Button
        text="Publish"
        theme="gray"
        size="large"
        onClickEvent={() => console.log('publish')}
      />
    </BtnGroup>
  </Wrapper>
);

export default Inner;
