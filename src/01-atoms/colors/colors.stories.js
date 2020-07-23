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

export const PrimaryBlue = () =>
  renderToStaticMarkup(<ColorBox color={colors.primaryColorBlue} />);

export const PrimaryOrange = () =>
  renderToStaticMarkup(<ColorBox color={colors.primaryColorOrange} />);

export const PrimaryWhite = () =>
  renderToStaticMarkup(<ColorBox color={colors.primaryColorWhite} />);

export const SecondaryGray = () =>
  renderToStaticMarkup(<ColorBox color={colors.secondaryColorGray} />);

export const SecondaryGrayLight = () =>
  renderToStaticMarkup(<ColorBox color={colors.secondaryColorGrayLight} />);
