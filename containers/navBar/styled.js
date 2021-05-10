import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  background: #f4f4f4;
`;
export const Inner = styled.div`
  max-width: 1440px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;

  h2 {
    margin: 0;
  }

  ${({ type }) => (type === 'form' || type === 'response') && css`
    justify-content: space-between;
  `}
`;
export const Item = styled.div`
  padding: 12px 10px 16px;
  margin: 0 10px;
  position: relative;
  color: ${({ isActive }) => isActive ? '#93ca2b' : '#000000'};
  cursor: pointer;

  ${({ isActive }) => isActive && css`
    :after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 5px;
      background: #93ca2b;
    }
  `}
`;
export const BreadItem = styled.div`
  padding: 12px 10px 16px;
  display: flex;
  color: ${({ isActive }) => isActive ? '#000000' : '#c4c4c4'};
  font-size: 14px;
  span {
    margin-left: 15px;
  }
`;

export const GroupBtn = styled.div`
  display: flex;
  div {
    margin: 0 5px;
  }
`;
