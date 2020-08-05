import "../src/main.scss"
import "../src/preview.scss"

import { addDecorator } from "@storybook/html"
import { withA11y } from "@storybook/addon-a11y"
import { withHTML } from "@whitespace/storybook-addon-html/html"

addDecorator(withA11y)
addDecorator(withHTML)

import { initToggle } from "../src/js/libs/Toggle"

setTimeout(() => {
  initToggle()
}, 2000)
