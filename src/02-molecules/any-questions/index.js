import React from "react"
import Highlight from "../../01-atoms/highlight"
import Icon from "../../01-atoms/icon"

const AnyQuestions = () => {
  return (
    <div className="m-any-questions">
      <Highlight classes={["a-highlight--gray"]}>
        <h2 className="h3">Haben Sie noch Fragen? Wir sind für Sie da!</h2>
        <div className="l-grid l-grid--3">
          <div className="l-col">
            <Icon name="map-pin" />
            <div>Carlo Bernasconi AG</div>
            <div>Riedbachstrasse 51</div>
            <div>3027 Bern</div>
          </div>
          <div className="l-col">
            <Icon name="phone" />
            <div>Fon +41 31 990 98 00</div>
            <div>Fax +41 31 990 98 48</div>
          </div>
          <div className="l-col">
            <Icon name="mail" />
            <div>E-Mail info@carloag.ch</div>
          </div>
        </div>
      </Highlight>
    </div>
  )
}

export default AnyQuestions
