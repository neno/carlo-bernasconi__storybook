import React from "react"
import Header from "../../03-organisms/header"
import Footer from "../../03-organisms/footer"
import Hero from "../../02-molecules/hero/"
import { heroData } from "../../02-molecules/hero/stories/hero.data"
import { pictureData } from "../../01-atoms/picture/stories/picture.data"
import OverviewTeasers from "../../03-organisms/overview-teasers/index"
import { teaserData } from "../../03-organisms/overview-teasers/stories/overview-teasers.data"
import RichText from "../../01-atoms/rich-text"
import Layout from "../layout"

const OverviewTemplate = () => (
  <Layout classes={["t-template--overview"]}>
    <Hero
      data={pictureData}
      title={heroData.title}
      text={heroData.text}
      breadcrumbItems={heroData.breadcrumbItems}
    />
    <div className="l-constrainer">
      <RichText>
        <h1>Unsere Kompetenzen</h1>
        <p>
          Mit unseren Steinen lassen sich alle Bereiche verschönern. ...Lorem
          ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
          eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
          diam voluptua.
        </p>
      </RichText>
    </div>
    <div className="l-constrainer">
      <OverviewTeasers teasers={teaserData} />
    </div>
  </Layout>
)

export default OverviewTemplate
