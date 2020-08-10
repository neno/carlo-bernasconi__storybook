import React from "react"
import FooterSection from "../../02-molecules/footer-section"
import LinkList from "../../02-molecules/link-list"
import { footerData } from "../../02-molecules/footer-section/stories/footer-section.data"

const Footer = () => (
  <footer id="header" className="o-footer">
    <div className="l-constrainer">
      <div className="o-footer__sections">
        <FooterSection title={footerData.quicklinks.title}>
          <LinkList
            links={footerData.quicklinks.links}
            linkClasses={["a-link--footer"]}
          />
        </FooterSection>
        <FooterSection title={footerData.about.title}>
          <LinkList
            links={footerData.about.links}
            linkClasses={["a-link--footer"]}
          />
        </FooterSection>
        <FooterSection title={footerData.socialMedia.title}>
          <p>{footerData.socialMedia.text}</p>
        </FooterSection>
      </div>
      <div className="o-footer__bottom">
        <LinkList
          links={[
            { label: "Impressum", url: "#" },
            { label: "Datenschutz", url: "#" }
          ]}
          linkClasses={["a-link--footer"]}
        />
        <p className="o-footer__copyright">@Carlo Bernasconi AG</p>
      </div>
    </div>
  </footer>
)

export default Footer
