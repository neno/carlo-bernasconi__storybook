import React from "react"
import { renderToStaticMarkup } from "react-dom/server"
import AnyQuestions from "../index"

export default {
  title: "02-Molecules/AnyQuestions"
}

export const Text = () => renderToStaticMarkup(<AnyQuestions />)
