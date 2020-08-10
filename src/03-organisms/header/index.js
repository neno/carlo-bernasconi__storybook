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
    id="header"
    className={`o-header l-constrainer-full`}
    data-module="nav"
    data-nav-options={JSON.stringify({
      triggerSelector: ".a-btn--menu",
      activeClsModifier: "--active",
      targetSelector: ".o-header__nav"
    })}
  >
    <Logo />
    <div className="o-header__links">
      <div
        className={`o-header__nav ${
          isActive === "true" ? " o-header__nav--active" : ""
        }`}
      >
        <Nav items={navItems()} />
        <LanguageSelector languages={languagesData} currentLang="DE" />
      </div>
      <Link classes={["a-link a-link--search a-link--icon"]}>
        <Icon name="search" />
      </Link>
      <Button classes={["a-btn--menu a-btn--icon"]}>
        <Icon name="menu" />
      </Button>
    </div>
  </div>
)

export default Header
