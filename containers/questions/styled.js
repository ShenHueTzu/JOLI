import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 20px;
  max-width: 1280px;
  margin: auto;
`;
export const AddGroup = styled.div`
  border: dotted 1px #999999;
  border-radius: 5px;
  padding: 50px 20px;

  display: flex;
  justify-content: space-between;

  img:first-child {
    width: 40px;
  }
`;
export const Group = styled.div`
  display: flex;
  div {
    margin: 0 5px;
  }
`;
export const BtnGroup = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0;
  div {
    margin: 10px;
  }
`;
