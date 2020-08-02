import React from 'react';

const FooterSection = ({ title, children }) => (
  <aside className='m-footer-section'>
    <h3 className='h4'>{title}</h3>
    {children}
  </aside>
);

export default FooterSection;
