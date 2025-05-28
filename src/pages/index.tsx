import React, { Fragment } from 'react';
import MetaTag from '../components/seo/MetaTag';
import HeroSection from '../components/homepage/HeroSection';

export default function HomePage() {
  return (
    <Fragment>
      <MetaTag />
      <HeroSection />
    </Fragment>
  );
}
