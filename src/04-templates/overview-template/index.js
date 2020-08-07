import React from "react"
import Hero from "../../02-molecules/hero/"
import { heroData } from "../../02-molecules/hero/stories/hero.data"
import { pictureData } from "../../01-atoms/picture/stories/picture.data"
import TeasersGrid from "../../03-organisms/teasers-grid/index"
import { teaserData } from "../../03-organisms/teasers-grid/stories/teasers-grid.data"
import Layout from "../layout"

const OverviewTemplate = () => (
  <Layout classes={["t-template--overview"]}>
    <div className="l-component">
      <Hero
        data={pictureData}
        title={heroData.title}
        text={heroData.text}
        breadcrumbItems={heroData.breadcrumbItems}
      />
    </div>
    <div className="l-component">
      <div className="l-constrainer">
        <h2>Unsere Kompetenzen</h2>
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
        <TeasersGrid teasers={teaserData} />
      </div>
    </div>
  </Layout>
)

export default OverviewTemplate
