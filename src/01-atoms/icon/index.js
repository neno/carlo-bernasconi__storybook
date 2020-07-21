import React from 'react';

import IconArrowLeft from './icons/arrow-left';

const icons = {
  'arrow-left': IconArrowLeft,
};

const Icon = ({ name }) => {
  const Ico = icons[name];
  return <Ico />;
};

export default Icon;
