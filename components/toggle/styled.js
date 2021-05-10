import styled from 'styled-components';

export const Outer = styled.div`
  background: ${({ isActive }) => isActive ? '#000000' : '#c4c4c4'};
  color: #ffffff;

  width: max-content;
  min-width: 80px;
  display: flex;
  flex-direction: ${({ isActive }) => isActive ? 'row' : 'row-reverse'};
  justify-content: space-between;
  align-items: center;
  border-radius: 16px;
  padding: 6px 8px;
  margin: 10px 0;

  cursor: pointer;

  span {
    display: flex;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    background: #ffffff;
  }
  p {
    margin: 0 5px;
    min-width: 40px;
    text-align: center;
  }

  transition: .3s;
`;