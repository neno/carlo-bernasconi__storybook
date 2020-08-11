import React from "react"
import { renderToStaticMarkup } from "react-dom/server"
import Button from "./index"
import Icon from "../icon"

export default {
  title: "01-Atoms/Buttons",
  excludeStories: /AccordionButton$/
}

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
    <Button classes={["a-btn--menu a-btn--icon"]}>
      <Icon name="menu" />
    </Button>
  )

export const AccordionButton = ({
  status = "collapsed",
  heading = "Accordion Panel Heading"
}) => (
  <Button
    classes={[
      `a-btn--accordion a-btn--lbl-icon ${
        status === "expanded" ? "a-btn--active" : ""
      }`
    ]}
    attr={{
      id: "accordion-header-1",
      "aria-expanded": status === "expanded" ? "true" : "false"
    }}
  >
    <span>{heading}</span>
    <Icon name="minus" />
    <Icon name="plus" />
  </Button>
)

export const AccordionButtonCollapsed = () =>
  renderToStaticMarkup(
    <AccordionButton heading="Accordion Panel Heading Collapsed" />
  )

export const AccordionButtonExpanded = () =>
  renderToStaticMarkup(
    <AccordionButton
      status="expanded"
      heading="Accordion Panel Heading Expanded"
    />
  )
