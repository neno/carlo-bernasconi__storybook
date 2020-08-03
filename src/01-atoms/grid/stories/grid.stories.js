import React from "react"
import { renderToStaticMarkup } from "react-dom/server"
import Grid from "../index"
import { gridData } from "./grid.data"

export default {
  title: "01-Atoms/Grid"
}

export const Cols_1_1_1_1 = () =>
  renderToStaticMarkup(<Grid gridData={gridData["1111"]} />)

export const Cols_1_1_2 = () =>
  renderToStaticMarkup(<Grid gridData={gridData["112"]} />)

export const Cols_1_2_1 = () =>
  renderToStaticMarkup(<Grid gridData={gridData["121"]} />)

export const Cols_2_1_1 = () =>
  renderToStaticMarkup(<Grid gridData={gridData["211"]} />)

export const Cols_2_2 = () =>
  renderToStaticMarkup(<Grid gridData={gridData["22"]} />)

export const Cols_1_3 = () =>
  renderToStaticMarkup(<Grid gridData={gridData["13"]} />)

export const Cols_3_1 = () =>
  renderToStaticMarkup(<Grid gridData={gridData["31"]} />)

export const Cols_4 = () =>
  renderToStaticMarkup(<Grid gridData={gridData["4"]} />)

export const Cols_1_1_1 = () =>
  renderToStaticMarkup(<Grid gridData={gridData["111"]} />)

export const Cols_1_2 = () =>
  renderToStaticMarkup(<Grid gridData={gridData["12"]} />)

export const Cols_2_1 = () =>
  renderToStaticMarkup(<Grid gridData={gridData["21"]} />)

export const Cols_3 = () =>
  renderToStaticMarkup(<Grid gridData={gridData["3"]} />)
