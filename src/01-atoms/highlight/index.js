import React from "react"

const Highlight = ({ tag = "div", classes = [], children }) => {
  const CustomTag = tag
  return (
    <CustomTag className={`a-highlight ${classes.join(" ")}`}>
      {children}
    </CustomTag>
  )
}

export default Highlight
