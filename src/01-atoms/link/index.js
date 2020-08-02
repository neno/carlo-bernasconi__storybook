import React from 'react';

const Link = ({ children, classes = [], url = '#', attr = {} }) => {
  const cls = ['a-link', ...classes];
  return (
    <a href={url} className={cls.join(' ')} {...attr}>
      {children}
    </a>
  );
};

export default Link;
