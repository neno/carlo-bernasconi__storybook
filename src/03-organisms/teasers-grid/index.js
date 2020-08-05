import React from "react"
import Teaser from "../../02-molecules/teaser"

const TeasersGrid = ({ teasers = [], teaserClasses }) => (
  <ul className="o-teasers-grid">
    {teasers &&
      teasers.map(teaser => (
        <Teaser
          key={encodeURIComponent(teaser.title)}
          imageData={teaser.img}
          title={teaser.title}
          text={teaser.text}
          classes={teaserClasses}
        />
      ))}
  </ul>
)

export default TeasersGrid
