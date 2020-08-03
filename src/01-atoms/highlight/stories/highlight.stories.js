import React from "react"
import { renderToStaticMarkup } from "react-dom/server"
import Highlight from "../index"

export default {
  title: "01-Atoms/Highlights"
}

const DummyContent = () => (
  <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus ab,
    inventore dolor obcaecati, error porro perferendis aut eligendi natus,
    maiores minima in similique placeat consectetur eum nam sit asperiores
    culpa.
  </p>
)

export const Gray = () =>
  renderToStaticMarkup(
    <Highlight classes={["a-highlight--gray"]}>
      <DummyContent />
    </Highlight>
  )

export const Blue = () =>
  renderToStaticMarkup(
    <Highlight classes={["a-highlight--blue"]}>
      <DummyContent />
    </Highlight>
  )
