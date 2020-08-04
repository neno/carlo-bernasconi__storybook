import React from "react"
import Logo from "../../01-atoms/logo"
import Nav from "../../02-molecules/nav"
import { navItems } from "../../02-molecules/nav/stories/nav.data"
import Link from "../../01-atoms/link"
import Icon from "../../01-atoms/icon"
import Button from "../../01-atoms/button"
import LanguageSelector from "../../02-molecules/language-selector/index"
import { languagesData } from "../../02-molecules/language-selector/stories/language-selector.data"

const Header = ({ isActive }) => (
  <div
    className={`o-header l-constrainer-full ${
      isActive === "true" ? " o-header--active" : ""
    }`}
  >
    <Logo />
    <div className="o-header__links">
      <div
        className="o-header__nav"
        aria-visible={isActive}
        aria-controlled-by={isActive && "menu-button"}
      >
        <Nav items={navItems()} />
        <LanguageSelector languages={languagesData} currentLang="DE" />
      </div>
      <Link classes={["a-link a-link--search a-link--icon"]}>
        <Icon name="search" />
      </Link>
      <Button
        classes={["a-btn--menu a-btn--icon"]}
        attr={{
          id: "menu-button",
          "aria-expanded": "false",
          "data-module": "toggle",
          "data-toggle-options": JSON.stringify({
            "target-selector": "o-header__nav"
          })
        }}
      >
        <Icon name="menu" />
      </Button>
    </div>
  </div>
)

export default Header
