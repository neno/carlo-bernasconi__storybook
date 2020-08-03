
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import OverviewTemplate from '../index';

export default {
  title: '04-Templates/OverviewTemplate',
};

export const Template = () =>
  renderToStaticMarkup(<OverviewTemplate />);


