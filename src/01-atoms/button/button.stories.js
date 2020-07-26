import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import Button from './index';

export default {
  title: '01-Atoms/Buttons',
};

export const Default = () =>
  renderToStaticMarkup(
    <Button>
      <span>DE</span>
    </Button>
  );

export const Primary = () =>
  renderToStaticMarkup(
    <Button classes={['a-btn--primary']}>
      <span>Primary Button</span>
    </Button>
  );

export const Secondary = () =>
  renderToStaticMarkup(
    <Button classes={['a-btn--secondary']}>
      <span>Secondary Button</span>
    </Button>
  );
