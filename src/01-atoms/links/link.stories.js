import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import Link from '.';
import Icon from '../icons/index';

export default {
  title: '01-Atoms/Links',
};

export const InlineLink = () =>
  renderToStaticMarkup(<Link>Das ist ein inline Link</Link>);

export const WithIcon = () =>
  renderToStaticMarkup(
    <Link classes={['a-link a-link--icon']}>
      Link mit einem Icon
      <Icon name='arrow-right' />
    </Link>
  );

export const LinkListLink = () =>
  renderToStaticMarkup(
    <Link classes={['a-link a-link--icon a-link--list']}>
      Link innerhalb Linkliste
      <Icon name='arrow-right' />
    </Link>
  );

export const LinkListLinkInverted = () =>
  renderToStaticMarkup(
    <Link classes={['a-link a-link--icon a-link--list a-link--inverted']}>
      Link innerhalb Linkliste Invers
      <Icon name='arrow-right' />
    </Link>
  );

export const LanguageLink = () =>
  renderToStaticMarkup(
    <Link classes={['a-link a-link--icon a-link--lang']}>
      <abbr title='Deutsch'>de</abbr>
    </Link>
  );

export const Pagination = () =>
  renderToStaticMarkup(<Link classes={['a-link a-link--pagination']}>1</Link>);
