import React from "react"
import Image from "../../01-atoms/image"

const Teaser = ({ imageData, title, text, classes = [] }) => (
  <div className={`m-teaser ${classes.join(" ")}`}>
    <Image {...imageData} classes={["a-img--ratio-teaser"]} />
    {title && <strong>{title}</strong>}
    {text && <p>{text}</p>}
  </div>
)

export default Teaser
