import React from 'react';
import Picture from '../../01-atoms/picture';
import Breadcrumbs from '../breadcrumbs';
import { pictureData } from '../../01-atoms/picture/stories/picture.data';

const Hero = ({ imageData, title, text, breadcrumbItems, classes = [] }) => (
  <header className={`m-hero ${classes.join(' ')}`}>
    <div className="m-hero__image">
      <Picture {...pictureData} classes={['a-img--ratio-hero']} />
    </div>

    <div className="m-hero__breadcrumbs">
      <div className="l-constrainer">
        <Breadcrumbs items={breadcrumbItems} />
      </div>
    </div>

    <div className="m-hero__text">
      <div className="l-constrainer">
        <div className="m-hero__inner">
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
      </div>
    </div>


  </header>
);

export default Hero;
