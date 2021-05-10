import styled from 'styled-components';

export const Outer = styled.div`
  width: 320px;
  margin: 100px auto;
  padding: 50px 20px 30px;
  border: 1px solid #c4c4c4;
  border-radius: 15px;

  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    margin-bottom: 20px;
  }
  input {
    padding: 5px;
    border: 1px solid #999999;
    border-radius: 5px;
    margin: 5px 0;
    width: 100%;
  }
  span {
    color: #93ca2b;
  }
  button {
    margin-top: 40px;
  }
`;
export const Inner = styled.div`
  display: flex;
  width: 80%;
  align-items: center;
  flex-direction: column;
  margin-bottom: 50px;
`;