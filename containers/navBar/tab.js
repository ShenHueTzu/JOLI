import React from 'react';

import { Item } from './styled';

const data = [
  {
    key: 'my-form',
    name: 'My Forms',
  },
  {
    key: 'filled-form',
    name: 'Filled Forms',
  },
];

const TabGroup = ({ tabName, onTabChange }) => (
  <>
    { data.map((tab, idx) => (
      <Item
        key={idx}
        isActive={tabName === tab.key}
        onClick={() => onTabChange(tab.key)}
      >
        {tab.name}
      </Item>
    ))}
  </>
);

export default TabGroup;
