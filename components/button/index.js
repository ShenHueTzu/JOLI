import React from 'react';
import propTypes from 'prop-types';

import { Outer } from './styled';

const Button = ({ text, theme, size = 'medium', link, onClickEvent = null }) => (
  <>
  {
    link ? (
      <a href={link}>
        <Outer theme={theme} size={size} onClick={onClickEvent}>
          {text}
        </Outer>
      </a>
    ) : (
      <Outer theme={theme} size={size} onClick={onClickEvent}>
        {text}
      </Outer>
    )
  }
  </>
);

Button.propTypes = {
  text: propTypes.string,
  theme: propTypes.oneOf(['black', 'lightGray', 'gray', 'green']),
  size: propTypes.oneOf(['small', 'medium', 'large']),
  link: propTypes.string,
  onClickEvent: propTypes.func,
};

export default Button;
