import React from 'react';
import Teaser from '../../02-molecules/teaser';

const OverviewTeasers = ({ teasers = [] }) => (
  <div className="o-overview-teasers">
    {
      teasers && teasers.map(teaser => <Teaser key={encodeURIComponent(teaser.title)} imageData={teaser.img} title={teaser.title} />)
    }
  </div>
);

export default OverviewTeasers;
