import React from 'react';

const Image = ({
  src,
  dataSrc,
  dataSrcset,
  sizes = '100vw',
  focusPoint = false,
  alt = 'Demo alt-text',
}) => {
  const base64gif =
    'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

  return (
    <span className={`a-img`}>
      <img
        data-image='image'
        data-src={dataSrc}
        data-srcset={dataSrcset}
        alt={alt}
        class='a-img__image'
        srcset={dataSrcset}
        src={src}
        sizes={sizes}
      ></img>
    </span>
  );
};

export default Image;
