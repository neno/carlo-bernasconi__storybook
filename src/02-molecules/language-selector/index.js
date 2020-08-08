import React, { useState } from "react"
import Link from "../../01-atoms/link"
import Button from "../../01-atoms/button"

const LanguageSelector = ({ languages, currentLang, status }) => (
  <div
    className="m-language-selector"
    data-module="collapsible"
    data-collapsible-options={JSON.stringify({
      triggerSelector: ".a-btn",
      triggerActiveClass: "a-btn--active",
      targetSelector: ".m-language-selector__list"
    })}
  >
    <Button
      attr={{ "aria-expanded": status === "expanded" ? "true" : "false" }}
      classes={["a-btn--lang"]}
    >
      <span>{currentLang}</span>
    </Button>
    <ul
      className="m-language-selector__list"
      aria-hidden={status === "expanded" ? false : true}
    >
      {languages.map(lang =>
        Object.keys(lang).map(key => (
          <li key={key}>
            <Link classes={["a-link a-link--lang"]}>
              <abbr title={lang[key]}>{key}</abbr>
            </Link>
          </li>
        ))
      )}
    </ul>
  </div>
)

export default LanguageSelector
