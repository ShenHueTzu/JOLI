import styled from 'styled-components';

export const Outer = styled.div`
  min-width: 175px;
  width: max-content;
  display: flex;
  border: 1px solid #000000;
  border-radius: 5px;

  img {
    padding: 8px;
    width: 40px;
    height: 40px;
    background: #000000;
  }
  p {
    font-size: 14px;
    padding: 8px;
    margin: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;