import React from 'react';

const Link = ({ children, classes = [], url = '#' }) => {
  const cls = [...classes];
  return (
    <a href={url} className={cls.join(' ')}>
      {children}
    </a>
  );
};

export default Link;
