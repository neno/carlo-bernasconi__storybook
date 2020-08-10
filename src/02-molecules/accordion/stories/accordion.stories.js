import React from "react"
import { renderToStaticMarkup } from "react-dom/server"
import Accordion from "../index"
import { accordionData } from "./accordion.data"

export default {
  title: "02-Molecules/Accordion"
}

export const Default = () =>
  renderToStaticMarkup(<Accordion panels={accordionData} />)
