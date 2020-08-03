import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import RichText from './index';

export default {
  title: '01-Atoms/RichText',
};

export const Text = () => renderToStaticMarkup(
  <RichText>
    <h1>Unsere Kompetenzen</h1>
    <p>Mit unseren Steinen lassen sich alle Bereiche verschönern. ...Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
  </RichText>
);
