import React from "react"
import Hero from "../../02-molecules/hero"
import { heroDataDetail } from "../../02-molecules/hero/stories/hero.data"
import { pictureData } from "../../01-atoms/picture/stories/picture.data"
import RichText from "../../01-atoms/rich-text"
import Layout from "../layout"
import AnyQuestions from "../../02-molecules/any-questions"
import GoodToKnow from "../../03-organisms/good-to-know"

const DetailTemplate = () => (
  <Layout classes={["t-template--overview"]}>
    <div className="l-component">
      <Hero
        data={pictureData}
        title={heroDataDetail.title}
        text={heroDataDetail.text}
        breadcrumbItems={heroDataDetail.breadcrumbItems}
      />
    </div>
    <div className="l-component">
      <div className="l-constrainer">
        <RichText>
          <p>
            Mit unseren Steinen lassen sich alle Bereiche verschönern. ...Lorem
            ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
            diam voluptua.
          </p>
        </RichText>
      </div>
    </div>
    <div className="l-component">
      <div className="l-grid l-grid--3">
        <div className="l-col l-col--1"></div>
        <div className="l-col l-col--2"></div>
      </div>
    </div>
    <div className="l-component">
      <div className="l-constrainer">
        <RichText>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor
            sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat.
          </p>
        </RichText>
      </div>
    </div>
    <div className="l-component">
      <div className="l-constrainer">
        <AnyQuestions />
      </div>
    </div>
    <GoodToKnow />
  </Layout>
)

export default DetailTemplate
