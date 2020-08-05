import React from "react"
import { renderToStaticMarkup } from "react-dom/server"
import Button from "./index"
import Icon from "../icon"

export default {
  title: "01-Atoms/Buttons"
}

export const ButtonDefault = () =>
  renderToStaticMarkup(
    <Button>
      <span>DE</span>
    </Button>
  )

export const ButtonPrimary = () =>
  renderToStaticMarkup(
    <Button classes={["a-btn--primary"]}>
      <span>Primary Button</span>
    </Button>
  )

export const ButtonSecondary = () =>
  renderToStaticMarkup(
    <Button classes={["a-btn--secondary"]}>
      <span>Secondary Button</span>
    </Button>
  )

export const ButtonIcon = () =>
  renderToStaticMarkup(
    <Button classes={["a-btn--icon"]}>
      <Icon name="menu" />
    </Button>
  )

export const MenuButton = () =>
  renderToStaticMarkup(
    <Button
      classes={["a-btn--menu a-btn--icon"]}
      attr={{
        "aria-expanded": "false",
        "data-module": "toggle",
        "data-toggle-options": JSON.stringify({
          "target-selector": "o-header__nav"
        })
      }}
    >
      <Icon name="menu" />
    </Button>
  )
