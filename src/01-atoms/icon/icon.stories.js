import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import Icon from './index';

export default {
  title: '01-Atoms/Icons',
};

export const ArrowLeft = () => renderToStaticMarkup(<Icon name='arrow-left' />);

export const ArrowRight = () =>
  renderToStaticMarkup(<Icon name='arrow-right' />);

export const CBDesignElement = () =>
  renderToStaticMarkup(<Icon name='cb-design-element' />);

export const CBHeart = () => renderToStaticMarkup(<Icon name='cb-heart' />);

export const CBMapPin = () => renderToStaticMarkup(<Icon name='cb-map-pin' />);

export const CBTool = () => renderToStaticMarkup(<Icon name='cb-tool' />);

export const CBUmbrella = () =>
  renderToStaticMarkup(<Icon name='cb-umbrella' />);

export const ChevronDown = () =>
  renderToStaticMarkup(<Icon name='chevron-down' />);

export const Facebook = () => renderToStaticMarkup(<Icon name='facebook' />);

export const Home = () => renderToStaticMarkup(<Icon name='home' />);

export const Instagram = () => renderToStaticMarkup(<Icon name='instagram' />);

export const LogoDe = () => renderToStaticMarkup(<Icon name='logo-de' />);

export const LogoFr = () => renderToStaticMarkup(<Icon name='logo-fr' />);

export const Mail = () => renderToStaticMarkup(<Icon name='mail' />);

export const MapPin = () => renderToStaticMarkup(<Icon name='map-pin' />);

export const Menu = () => renderToStaticMarkup(<Icon name='menu' />);

export const Minus = () => renderToStaticMarkup(<Icon name='minus' />);

export const Phone = () => renderToStaticMarkup(<Icon name='phone' />);

export const Plus = () => renderToStaticMarkup(<Icon name='plus' />);

export const Search = () => renderToStaticMarkup(<Icon name='search' />);

export const ShoppingCart = () =>
  renderToStaticMarkup(<Icon name='shopping-cart' />);

export const Trash = () => renderToStaticMarkup(<Icon name='trash' />);

export const Twitter = () => renderToStaticMarkup(<Icon name='twitter' />);

export const Youtube = () => renderToStaticMarkup(<Icon name='youtube' />);
