import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { dummyText } from '../../js/helpers';
import { InlineLink } from '../link/link.stories';

export default {
  title: '01-Atoms/Texts',
};

const heading = (level) => {
  return React.createElement(`h${level}`, null, `Heading Level ${level}`);
};

export const HeadingLevel1 = () => renderToStaticMarkup(heading(1));

export const HeadingLevel2 = () => renderToStaticMarkup(heading(2));

export const HeadingLevel3 = () => renderToStaticMarkup(heading(3));

export const HeadingLevel4 = () => renderToStaticMarkup(heading(4));

export const Paragraph = () => renderToStaticMarkup(<p>{dummyText}</p>);

export const Link = () => InlineLink();

export const UnorderedList = () =>
  renderToStaticMarkup(
    <ul>
      {[1, 2, 3, 4].map((i) => (
        <li key={`ul-${i}`}>List Item {i}</li>
      ))}
    </ul>
  );

export const OrderedList = () =>
  renderToStaticMarkup(
    <ol>
      {[1, 2, 3, 4].map((i) => (
        <li key={`ol-${i}`}>List Item {i}</li>
      ))}
    </ol>
  );
