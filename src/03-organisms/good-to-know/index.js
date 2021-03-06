import React from "react"
import Highlight from "../../01-atoms/highlight"
import Teaser from "../../02-molecules/teaser"
import { teaserData } from "./stories/good-to-know.data"

const GoToKnow = () => (
  <aside className="o-good-to-know">
    <Highlight classes={["a-highlight--gray o-good-to-know__highlight"]}>
      <div className="l-component">
        <div className="l-constrainer">
          <h2>Gut zu Wissen</h2>
          <p>
            Mit unseren Steinen lassen sich alle Bereiche verschönern. ...Lorem
            ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
            diam voluptua.
          </p>
        </div>
      </div>
      <div className="l-component">
        <div className="l-constrainer">
          <div className="l-grid l-grid--3">
            <div className="l-col">
              <Teaser
                imageData={teaserData[0].img}
                text={teaserData[0].text}
                classes={["m-teaser--bg-white"]}
              />
            </div>
            <div className="l-col">
              <Teaser
                imageData={teaserData[1].img}
                text={teaserData[1].text}
                classes={["m-teaser--bg-white"]}
              />
            </div>
            <div className="l-col">
              <Teaser
                imageData={teaserData[2].img}
                text={teaserData[2].text}
                classes={["m-teaser--bg-white"]}
              />
            </div>
          </div>
        </div>
      </div>
    </Highlight>
  </aside>
)

export default GoToKnow
