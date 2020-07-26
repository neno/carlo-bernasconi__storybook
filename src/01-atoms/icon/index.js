import React from 'react';

import ArrowLeft from './icons/arrow-left';
import ArrowRight from './icons/arrow-right';
import ChevronDown from './icons/chevron-down';
import Facebook from './icons/facebook';
import Home from './icons/home';
import Instagram from './icons/instagram';
import Mail from './icons/mail';
import MapPin from './icons/map-pin';
import Minus from './icons/minus';
import Phone from './icons/phone';
import Plus from './icons/plus';
import Search from './icons/search';
import ShoppingCart from './icons/shopping-cart';
import Trash from './icons/trash';
import Twitter from './icons/twitter';
import Youtube from './icons/youtube';
import CBDesignElement from './icons/cb-design-element';
import CBHeart from './icons/cb-heart';
import CBMapPin from './icons/cb-map-pin';
import CBTool from './icons/cb-tool';
import CBUmbrella from './icons/cb-umbrella';
import Logo from './icons/logo';
import Menu from './icons/menu';

const icons = {
  'arrow-left': ArrowLeft,
  'arrow-right': ArrowRight,
  'chevron-down': ChevronDown,
  facebook: Facebook,
  home: Home,
  instagram: Instagram,
  mail: Mail,
  'map-pin': MapPin,
  minus: Minus,
  phone: Phone,
  plus: Plus,
  search: Search,
  'shopping-cart': ShoppingCart,
  trash: Trash,
  twitter: Twitter,
  youtube: Youtube,
  'cb-design-element': CBDesignElement,
  'cb-heart': CBHeart,
  'cb-map-pin': CBMapPin,
  'cb-tool': CBTool,
  'cb-umbrella': CBUmbrella,
  logo: Logo,
  menu: Menu,
};

const Icon = ({ name }) => {
  const Ico = icons[name];
  return <Ico />;
};

export default Icon;
