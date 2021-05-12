import styled, { css } from 'styled-components';

export const Outer = styled.div`
  width: auto;
  max-width: 1280px;
  display: flex;
  border: 1px solid #000000;
  border-radius: 5px;
  margin-bottom: 20px;
`;
export const Container = styled.div`
  padding: 10px;
  ${({ type }) => type === 'left' && css`
    background: #000000;
    color: #ffffff;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    img {
      height: 20px;
      width: 20px;
    }
  `}
  ${({ type }) => type === 'right' && css`
    width: 100%;
    display: flex;
    flex-direction: column;
    input {
      padding: 5px;
    }
  `}
`;
export const Row = styled.div`
  display: flex;
  justify-content: ${({ isFilled }) => isFilled ? 'flex-start' : 'flex-end'};
  ${({ isRequired }) => isRequired && css`
    justify-content: space-between;
  `}
  img {
    width: 30px;
  }
`;
export const Border = styled.div`
  background: #000000;
  color: #ffffff;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 12px;
}
`;
export const Item = styled.div`
  color: #999999;
  padding: 5px;
`;
