import styled, { css } from 'styled-components';

const sizes = {
  small: css``,
  medium: css`
    padding: 8px 15px;
    border-radius: 5px;
    font-size: 16px;
  `,
  large: css`
    min-width: 150px;
    padding: 10px 25px;
    border-radius: 5px;
    font-size: 20px;
  `,
};

const themes = {
  black: css`
    background: #000000;
    color: #ffffff;
  `,
  lightGray: css`
    background: #c4c4c4;
    color: #ffffff;
  `,
  gray: css`
    background: #999999;
    color: #ffffff;
  `,
  green: css`
    background: #93ca2b;
    color: #ffffff;
  `,
};

export const Outer = styled.div`
  max-width: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  margin: 10px 0;

  ${({ size }) => sizes[size]};
  ${({ theme }) => themes[theme]};
  
  transition: .3s;
  :hover {
    opacity: .8;
  }
`;
