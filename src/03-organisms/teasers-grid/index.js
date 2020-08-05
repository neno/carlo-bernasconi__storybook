import React from "react"
import Teaser from "../../02-molecules/teaser"

const TeasersGrid = ({ teasers = [], teaserClasses }) => (
  <ul className="o-teasers-grid">
    {teasers &&
      teasers.map((teaser, i) => (
        <li key={i}>
          <Teaser
            key={encodeURIComponent(teaser.title)}
            imageData={teaser.img}
            title={teaser.title}
            text={teaser.text}
            classes={teaserClasses}
          />
        </li>
      ))}
  </ul>
)

export default TeasersGrid
