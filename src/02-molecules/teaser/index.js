import React from "react"
import Image from "../../01-atoms/image"

const Teaser = ({ imageData, title, text, url = "#", classes = [] }) => (
  <li className={`m-teaser ${classes.join(" ")}`}>
    <a href={url} className="m-teaser__link">
      <Image {...imageData} />
      {title && <strong>{title}</strong>}
      {text && <p>{text}</p>}
    </a>
  </li>
)

export default Teaser
