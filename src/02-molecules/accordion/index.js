import React from "react"
import Button from "../../01-atoms/button"
import { AccordionButton } from "../../01-atoms/button/button.stories"

const Accordion = ({ panels, classes = [] }) => (
  <div
    className={`m-accordion ${classes.join(" ")}`}
    data-module="accordion"
    data-collapsible-options={JSON.stringify({
      triggerSelector: ".a-btn--accordion",
      activeClsModifier: "--active",
      targetSelector: ".m-accordion__panel"
    })}
  >
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
                heading="Accordion Panel Heading Collapsed"
              />
            ) : (
              <AccordionButton heading="Accordion Panel Heading Collapsed" />
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
)

export default Accordion
