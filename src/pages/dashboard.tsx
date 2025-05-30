import React, { Fragment } from 'react';
import Navbar from '../components/common/Navbar';
import MetaTag from '../components/seo/MetaTag';

export default function Dashboard() {
  return (
    <Fragment>
      <MetaTag title="Dashboard | RunJS.in" />
      <main className="absolute inset-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
        <Navbar />
      </main>
    </Fragment>
  );
}
