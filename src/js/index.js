import "../styles/index.scss"
import Collapsible from "./libs/Collapsible"
import Nav from "./libs/Nav"

const timeout = process.env.STORYBOOK_TIMEOUT || 0

setTimeout(() => {
  document.querySelectorAll("[data-module='collapsible']").forEach(el => {
    new Collapsible(el)
  })

  document.querySelectorAll("[data-module='nav']").forEach(el => {
    new Nav(el)
  })
}, timeout)
