import React from "react"
import Highlight from "../../01-atoms/highlight"
import RichText from "../../01-atoms/rich-text"
import Teaser from "../../02-molecules/teaser"
import { teaserData } from "./stories/good-to-know.data"

import TeasersGrid from "../teasers-grid/index"
// import { teaserData } from "../../03-organisms/teasers-grid/stories/teasers-grid.data"

const GoToKnow = () => (
  <aside className="o-good-to-know">
    <Highlight classes={["a-highlight--gray o-good-to-know__highlight"]}>
      <div className="l-constrainer">
        <h2>Gut zu Wissen</h2>
        <div className="l-component">
          <RichText>
            Mit unseren Steinen lassen sich alle Bereiche verschönern. ...Lorem
            ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
            diam voluptua.
          </RichText>
        </div>
        <div className="l-component">
          <TeasersGrid
            teasers={teaserData}
            teaserClasses={["m-teaser--bg-white"]}
          />
        </div>
      </div>
    </Highlight>
  </aside>
)

export default GoToKnow
