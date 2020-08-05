import React from "react"
import Image from "../../01-atoms/image"

const Teaser = ({ imageData, title, text, url = "#", classes = [] }) => (
  <a className={`m-teaser ${classes.join(" ")}`} href={url}>
    <Image {...imageData} />
    {title && <strong>{title}</strong>}
    {text && <p>{text}</p>}
  </a>
)

export default Teaser
