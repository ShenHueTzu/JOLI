import styled from 'styled-components';

const Outer = styled.div`
  width: 260px;
  height: 210px;
  margin: 10px 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: 1px solid #000000;
  border-radius: 10px;

  position: relative;
`;
export const NormalOuter = styled(Outer)`
  justify-content: flex-start;
  img {
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 5px;
    cursor: pointer;
  }
`;
export const Upper = styled.div`
  background: #464646;
  width: 100%;
  height: 40%;
  border-radius: 9px 9px 0 0;

  p {
    padding: 16px 20px;
    margin: 0;
    font-size: 20px;
    color: #ffffff;
  }
`;
export const Bottom = styled.div`
  padding: 16px 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  span {
    font-size: 14px;
    display: flex;
    align-items: center;
    color: #999999;
    font-weight: light;
  }
  span {
    p {
      margin-right: 5px;
      color: #00000;
      font-size: 20px;
      font-weight: bold;
    }
  }
`;
export const CreateOuter = styled(Outer)`
  padding: 60px 20px;
  transition: .3s;
  cursor: pointer;

  :hover {
    border-color: #93ca2b; 
  }
  
  span:first-child {
    img {
      width: auto;
      height: 40px;
    }
    margin-bottom: 20px;
  }
`;
export const Name = styled.div`
  position: absolute;
  bottom: 10px;
  left: 20px;
  font-size: 12px;
  color: #c4c4c4;
`;