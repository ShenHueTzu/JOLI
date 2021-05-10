import styled from 'styled-components';

export const Outer = styled.div`
  width: 320px;
  height: 100%;
  z-index: 3;
  display: ${({ isOpen }) => isOpen ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
`;
export const Inner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 2px solid;
  border-radius: 5px;
`;
export const Top = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: #000000;
  color: #ffffff;
  border-radius: 3px 3px 0 0;
`;
export const Content = styled.div`
  padding: 20px 40px;
  background: #ffffff;
  border-radius: 0 0 3px 3px;
`;
export const Group = styled.div`
  display: flex;
  align-items: center;
  div {
    margin: 0 5px 0;
  }
`;
export const BtnGroup = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0 0;
  div {
    margin: 0 5px 0;
  }
`;