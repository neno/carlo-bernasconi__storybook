import React from 'react';
import Image from '../../01-atoms/image';


const Teaser = ({ imageData, title, classes = [] }) => (
  <div className={`m-teaser ${classes.join(' ')}`}>
    <Image {...imageData} classes={['a-img--ratio-teaser']} />
    <strong>{title}</strong>
  </div>
);

export default Teaser;
