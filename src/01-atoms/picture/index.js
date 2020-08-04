import React from "react"

const Picture = ({ src, sources, alt = "Demo alt-text", classes = [] }) => {
  const base64gif =
    "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"

  return (
    <span className={`a-img ${classes.join(" ")}`}>
      <picture>
        {sources.map((source, i) => (
          <source
            srcSet={source.dataSrcset}
            type={source.type}
            media={source.media}
            sizes={source.sizes}
            key={i}
          />
        ))}
        <img alt={alt} className="a-img__image" src={src}></img>
      </picture>
    </span>
  )
}

export default Picture
