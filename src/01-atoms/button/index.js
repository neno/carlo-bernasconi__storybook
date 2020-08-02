import React, { useEffect, useRef } from 'react';

const Button = ({ children, handleClick, classes = [], attr = {} }) => {
  const cls = ['a-btn', ...classes];
  const btnRef = useRef();

  useEffect(() => {
    console.log('Button ref', btnRef.current);
  });

  return (
    <button
      type='button'
      onClick={handleClick}
      className={cls.join(' ')}
      {...attr}
      ref={btnRef}
    >
      {children}
    </button>
  );
};

export default Button;
