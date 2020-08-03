import React from "react"
import { renderToStaticMarkup } from "react-dom/server"
import DetailTemplate from "../index"

export default {
  title: "04-Templates/DetailTemplate"
}

export const Template = () => renderToStaticMarkup(<DetailTemplate />)
