import React from 'react';

const Button = ({ children, handleClick, classes = [] }) => {
  const cls = ['a-btn', ...classes];
  return (
    <button type='button' onClick={handleClick} className={cls.join(' ')}>
      {children}
    </button>
  );
};

export default Button;
