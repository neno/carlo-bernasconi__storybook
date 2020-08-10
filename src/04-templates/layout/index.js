import React from "react"
import Header from "../../03-organisms/header"
import Footer from "../../03-organisms/footer"

const Layout = ({ classes, children }) => (
  <div className={`t-template ${classes.join(" ")}`}>
    <Header />
    <main id="main">{children}</main>
    <Footer />
  </div>
)

export default Layout
