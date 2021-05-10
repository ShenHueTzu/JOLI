import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

import { deleteForm } from '../../apis/forms';
import { fetchFormList } from '../../redux/slices/formsSlice';
import { fetchResponseList } from '../../redux/slices/responseSlice';
import CreateCard from '../../components/formCard/create';
import Card from '../../components/formCard/normal';
import Popup from '../popup';
import Delete from '../popup/delete';
import ShareLink from '../popup/shareLink';

import { Wrapper } from './styled';

const cardList = ({ tabName }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const formList = useSelector((state) => state.form.list);
  const respList = useSelector((state) => state.response.list);

  useEffect(() => {
    if (tabName === 'my-form') {
      dispatch(fetchFormList());
    }
    if (tabName === 'filled-form') {
      dispatch(fetchResponseList());
    }
  }, [tabName]);

  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState(null);
  const [activeId, setId] = useState(null);
  const [link, setLink] = useState('');

  const handleClose = () => setIsOpen(false);

  const handleAdd = () => {
    router.push('/create-setting');
  };

  const handleClick = (id) => {
    if (id === activeId) {
      setId(null);
    } else {
      setId(id);
    }
  };

  const handleEdit = () => {
    console.log('edit');
  };
  const handlePreview = () => {
    console.log('preview');
  };
  const handleShare = () => {
    if (tabName === 'my-form') {
      const { uuid } = formList[activeId];
      setLink(`/jolly/forms/${uuid}`)
    }
    if (tabName === 'filled-form') {
      const { formUuid } = respList[activeId];
      setLink(`/jolly/forms/${formUuid}`)
    }

    setType('share');
    setIsOpen(true);
  };
  const handleReview = () => {
    const { uuid } = formList[activeId];
    router.push(`/jolly/response/${uuid}`);
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
      text: 'Edit',
      onClickEvent: () => handleEdit(),
    },
    {
      text: 'Preview',
      onClickEvent: () => handlePreview(),
    },
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

  const list = tabName === 'my-form' ? formList : respList;

  return (
    <Wrapper>
      <CreateCard handleAdd={handleAdd} />
      { tabName === 'my-form' && list && list.length > 0 && list.map((card, idx) => (
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
      { tabName === 'filled-form'
        && list
        && list.length > 0
        && list.map((card, idx) => (
          <Card
            key={idx}
            id={idx}
            activeId={activeId}
            title={card.formName}
            times={card.formExpiresAt}
            sponser={card.sponsorName}
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
