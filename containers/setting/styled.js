import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 20px;
  max-width: 1280px;
  margin: auto;
`;
export const InnerCon = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 0;
  h2 {
    position: relative;
    :after {
      position: absolute;
      content: "";
      top: 0;
      bottom: 0;
      right: 0;
      margin: auto;
      padding: 0 10px;
      width: 70%;
      height: 1px;
      background: #c4c4c4;
    }
  }
`;
export const Group = styled.div`
  display: flex;
  align-items: baseline;
  p {
    margin-right: 20px;
    min-width: 20%;
  }
  input, textarea {
    width: 50%;
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
