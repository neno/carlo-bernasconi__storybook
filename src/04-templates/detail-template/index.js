import React from "react"
import Hero from "../../02-molecules/hero"
import { heroDataDetail } from "../../02-molecules/hero/stories/hero.data"
import { pictureData } from "../../01-atoms/picture/stories/picture.data"
import Layout from "../layout"
import AnyQuestions from "../../02-molecules/any-questions"
import GoodToKnow from "../../03-organisms/good-to-know"
import Teaser from "../../02-molecules/teaser"
import { teaserData } from "../../03-organisms/teasers-grid/stories/teasers-grid.data"

const imgData = Object.assign({}, teaserData[1].img, {src: 'https://placehold.it/1074x780'})

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
        <p>
          Mit unseren Steinen lassen sich alle Bereiche verschönern.
          ...Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
          diam nonumy eirmod tempor invidunt ut labore et dolore magna
          aliquyam erat, sed diam voluptua.
        </p>
      </div>
    </div>
    <div className="l-component">
      <div className="l-constrainer">
        <div className="l-grid l-grid--4">
          <div className="l-col l-col--3">
            <Teaser imageData={imgData} title={teaserData[1].title} />
          </div>
        </div>
      </div>
    </div>
    <div className="l-component">
      <div className="l-constrainer">
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
          et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum
          dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
          eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          erat.
        </p>
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
