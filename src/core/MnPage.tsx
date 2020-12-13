import { NextSeo } from 'next-seo';
import Head from 'next/head';
import React from 'react';
import MnFooter from './MnFooter';
import MnHeader from './MnHeader';

interface Props {
  title: string;
}

/**
 * Wraps all the pages
 */
const MnPage: React.FC<Props> = ({ title, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#da532c" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <NextSeo title={title} description="A short description goes here." />

      <MnHeader />

      {children}

      <MnFooter />
    </div>
  );
};

export default MnPage;
