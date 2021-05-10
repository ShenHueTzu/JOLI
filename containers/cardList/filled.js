import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

import { deleteForm } from '../../apis/forms';
import { fetchResponseList } from '../../redux/slices/formsSlice';

import Card from '../../components/formCard/normal';
import Popup from '../popup';
import Delete from '../popup/delete';
import ShareLink from '../popup/shareLink';

import { Wrapper } from './styled';

const cardList = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.form);

  useEffect(() => {
    dispatch(fetchResponseList());
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState(null);
  const [activeId, setId] = useState(null);
  const [link, setLink] = useState('');

  const handleClose = () => setIsOpen(false);

  const handleClick = (id) => {
    if (id === activeId) {
      setId(null);
    } else {
      setId(id);
    }
  };

  const handleShare = () => {
    const { uuid } = list[activeId];
    setLink(`https://cryptic-crag-39318.herokuapp.com/jolly/forms/${uuid}`)
    setType('share');
    setIsOpen(true);
  };
  const handleReview = () => {
    console.log('review');
  };
  const handleDelete = () => {
    setType('delete');
    setIsOpen(true);
  };

  const onDelete = () => {
    const { uuid } = list[activeId];
    deleteForm({ uuid });
    setIsOpen(false);
  };

  const handleCopy = () => {
    const ele = document.getElementById('copy_link');
    ele.select();
    ele.setSelectionRange(0, 99999);

    document.execCommand('copy');
  };

  const options = [
    {
      text: 'Share',
      onClickEvent: () => handleShare(),
    },
    {
      text: 'Responses',
      onClickEvent: () => handleReview(),
    },
    {
      text: 'Delete',
      onClickEvent: () => handleDelete(),
    },
  ];

  return (
    <Wrapper>
      { list && list.length > 0 && list.map((card, idx) => (
        <Card
          key={idx}
          id={idx}
          activeId={activeId}
          title={card.name}
          times={card.updatedAt}
          response={card.Responses.length}
          options={options}
          handleClick={() => handleClick(idx)}
        />
      ))}
      <Popup
        isOpen={isOpen}
        onClose={() => handleClose()}
      >
        {type === 'delete' && <Delete formName={list[activeId].name} onDelete={onDelete} handleClose={handleClose} />}
        {type === 'share' && <ShareLink value={link} handleCopy={handleCopy} />}
      </Popup>
    </Wrapper>
  );
};

export default cardList;
