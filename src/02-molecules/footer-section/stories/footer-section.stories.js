import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import FooterSection from '../index';
import LinkList from '../../link-list';
import { footerData } from './footer-section.data';

export default {
  title: '02-Molecules/FooterSections'
};



export const QuickLinks = () =>
  renderToStaticMarkup(
    <FooterSection
      title={footerData.quicklinks.title}
    >
      <LinkList
        links={footerData.quicklinks.links}
        linkClasses={['a-link--footer']}
      />
    </FooterSection>
  );
