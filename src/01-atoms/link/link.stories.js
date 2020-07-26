import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import Link from './index';
import Icon from '../icon/index';

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

export const NavLink = () =>
  renderToStaticMarkup(
    <Link classes={['a-link a-link--nav']}>Kompetenzen</Link>
  );

export const NavLinkActive = () =>
  renderToStaticMarkup(
    <Link classes={['a-link a-link--nav a-link--active']}>Kompetenzen</Link>
  );

export const PaginationLink = () =>
  renderToStaticMarkup(
    <Link classes={['a-link a-link--pagination']}>
      <span>1</span>
    </Link>
  );

export const PaginationLinkActive = () =>
  renderToStaticMarkup(
    <Link classes={['a-link a-link--pagination a-link--active']}>
      <span>1</span>
    </Link>
  );

export const PaginationLinkDisabled = () =>
  renderToStaticMarkup(
    <Link classes={['a-link a-link--pagination a-link--disabled']}>
      <span>1</span>
    </Link>
  );

export const PaginationPrev = () =>
  renderToStaticMarkup(
    <Link classes={['a-link a-link--pagination a-link--pagination-prev']}>
      <span>
        <Icon name='arrow-left' />
      </span>
    </Link>
  );

export const PaginationNext = () =>
  renderToStaticMarkup(
    <Link classes={['a-link a-link--pagination a-link--pagination-next']}>
      <span>
        <Icon name='arrow-right' />
      </span>
    </Link>
  );

export const PaginationDot = () =>
  renderToStaticMarkup(
    <Link classes={['a-link a-link--pagination']}>
      <span>…</span>
    </Link>
  );
