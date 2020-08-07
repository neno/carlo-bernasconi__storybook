import "../src/styles/index.scss"
import "../src/styles/preview.scss"
import "../src/js/index.js"

import { addDecorator } from "@storybook/html"
import { withA11y } from "@storybook/addon-a11y"
import { withHTML } from "@whitespace/storybook-addon-html/html"

addDecorator(withA11y)
addDecorator(withHTML)
