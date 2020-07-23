import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import colors from '../../styles/settings/_colors.scss';

export default {
  title: '01-Atoms/Colors',
};

const ColorBox = ({ color }) => {
  const styles = {
    display: 'block',
    backgroundColor: color,
    width: '100px',
    height: '100px',
  };
  return (
    <div>
      <div style={styles}></div>
      <p>{color}</p>
    </div>
  );
};

export const dark = () =>
  renderToStaticMarkup(<ColorBox color={colors.colorDark} />);

export const medium = () =>
  renderToStaticMarkup(<ColorBox color={colors.colorMedium} />);

export const light = () =>
  renderToStaticMarkup(<ColorBox color={colors.colorLight} />);

export const Hover = () =>
  renderToStaticMarkup(<ColorBox color={colors.colorHover} />);
