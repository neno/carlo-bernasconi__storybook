import React from "react"
import { renderToStaticMarkup } from "react-dom/server"
import GoToKnow from "../index"

export default {
  title: "03-Organisms/GoToKnow"
}

export const Desktop = () => renderToStaticMarkup(<GoToKnow />)
