import React from "react"
import { renderToStaticMarkup } from "react-dom/server"
import fonts from "../../styles/settings/_fonts.scss"
import { dummyText } from "../texts/text.data"

export default {
  title: "01-Atoms/Fonts"
}

const styles = (fontFamily, fontWeight = "400") => ({
  fontFamily,
  fontWeight,
  fontSize: "2rem"
})

export const FontPrimary = () => {
  const fontWeight = "400"
  const fontFamily = fonts.fontPrimary
  return renderToStaticMarkup(
    <div>
      <p style={styles(fontFamily, fontWeight)}>{dummyText}</p>
      <p>
        $fontPrimary: {fontFamily} - {fontWeight}
      </p>
    </div>
  )
}

export const FontSecondary500 = () => {
  const fontWeight = "500"
  const fontFamily = fonts.fontSecondary
  return renderToStaticMarkup(
    <div>
      <p style={styles(fontFamily, fontWeight)}>{dummyText}</p>
      <p>
        $fontSecondary: {fontFamily} - {fontWeight}
      </p>
    </div>
  )
}

export const FontSecondary700 = () => {
  const fontWeight = "700"
  const fontFamily = fonts.fontSecondary
  return renderToStaticMarkup(
    <div>
      <p style={styles(fontFamily, fontWeight)}>{dummyText}</p>
      <p>
        $fontSecondary: {fontFamily} - {fontWeight}
      </p>
    </div>
  )
}
