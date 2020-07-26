import React, { useState } from 'react';
import Link from '../../01-atoms/link';
import Button from '../../01-atoms/button';

const LanguageSelector = ({ languages, currentLang, status }) => (
  <div className='m-language-selector'>
    <Button
      attr={{ 'aria-expanded': status === 'expanded' ? 'true' : 'false' }}
      classes={['a-btn--lang']}
    >
      <span>{currentLang}</span>
    </Button>
    <ul
      className='m-language-selector__list'
      aria-hidden={status === 'collapsed' ? true : false}
    >
      {languages.map((lang) =>
        Object.keys(lang).map((key) => (
          <li key={key}>
            <Link classes={['a-link a-link--icon a-link--lang']}>
              <abbr title={lang[key]}>{key}</abbr>
            </Link>
          </li>
        ))
      )}
    </ul>
  </div>
);

export default LanguageSelector;
