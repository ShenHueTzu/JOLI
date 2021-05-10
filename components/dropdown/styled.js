import styled from 'styled-components';

export const Outer = styled.div`
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  position: absolute;
  display: ${({ isActive }) => isActive ? 'flex' : 'none'};
  flex-direction: column;
  right: 0;
  bottom: -87%;
  padding: 5px 0;
  background: #ffffff;
  z-index: 2;
  span {
    font-size: 14px;
    padding: 8px 16px;
    :hover {
      background: #f4f4f4;
      cursor: pointer;
    }
  }
`;