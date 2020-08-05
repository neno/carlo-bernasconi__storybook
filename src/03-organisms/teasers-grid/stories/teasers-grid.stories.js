import React from "react"
import { renderToStaticMarkup } from "react-dom/server"
import TeasersGrid from "../index"
import { teaserData } from "./teasers-grid.data"

export default {
  title: "03-Organisms/TeasersGrid"
}

export const Desktop = () =>
  renderToStaticMarkup(<TeasersGrid teasers={teaserData} />)
