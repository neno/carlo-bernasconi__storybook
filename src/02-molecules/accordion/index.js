import React from "react"
import Button from "../../01-atoms/button"
import { AccordionButton } from "../../01-atoms/button/button.stories"

const Accordion = ({ panels, classes = [] }) => (
  <div
    className={`m-accordion l-component ${classes.join(" ")}`}
    data-module="accordion"
    data-accordion-options={JSON.stringify({
      triggerSelector: ".a-btn--accordion",
      activeClsModifier: "--active",
      targetSelector: ".m-accordion__panel"
    })}
  >
    <div className="l-constrainer">
      {panels &&
        panels.map((panel, i) => (
          <>
            <h3
              key={encodeURIComponent(panel.heading)}
              className="m-accordion__header"
            >
              {panel.status === "expanded" ? (
                <AccordionButton
                  status="expanded"
                  heading="Accordion Panel Heading"
                />
              ) : (
                <AccordionButton heading="Accordion Panel Heading" />
              )}
            </h3>
            <section
              id={`accordion-panel-${i}`}
              className="m-accordion__panel"
              aria-labelledby={`accordion-header-${i}`}
              aria-hidden={panel.status === "expanded" ? "false" : "true"}
            >
              <div
                className="m-accordion__panel-inner"
                dangerouslySetInnerHTML={{ __html: panel.content }}
              ></div>
            </section>
          </>
        ))}
    </div>
  </div>
)

export default Accordion
