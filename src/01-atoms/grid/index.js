import React from "react"

const Grid = ({ gridData }) => {
  return (
    <div className={`l-grid l-grid--${gridData.grid}`}>
      {gridData.cols.map(span => (
        <div className={`l-col l-col--${span}`}>Col {span}</div>
      ))}
    </div>
  )
}

export default Grid
