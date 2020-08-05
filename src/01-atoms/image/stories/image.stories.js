import React from "react"
import { renderToStaticMarkup } from "react-dom/server"
import Image from "../index"

export default {
  title: "01-Atoms/Images",
  excludeStories: /.*Data$/
}

export const pictureData = {
  dataSrcset: `
    https://placehold.it/300x169.webp 300w,
    https://placehold.it/400x225.webp 400w,
    https://placehold.it/600x338.webp 600w,
    https://placehold.it/800x450.webp 800w,
    https://placehold.it/1200x675.webp 1200w,
    https://placehold.it/1600x900.webp 1600w,
    https://placehold.it/2000x1125.webp 2000w
  `,
  dataSrc: "https://placehold.it/1600x900.webp",
  src: "https://placehold.it/1600x900.webp"
}

export const image = () => renderToStaticMarkup(<Image {...imageData} />)
