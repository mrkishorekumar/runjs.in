import Head from 'next/head';
import React from 'react';

interface IMetaTag {
  title?: string;
  description?: string;
}

export default function MetaTag({ title, description }: IMetaTag) {
  const fallbackTitle = 'RunJS.in - JavaScript Online Compiler & Interpreter';
  const fallbackDescription =
    'Our intuitive JavaScript Online Compiler allows you to write and run JavaScript code directly in your web browser.';
  return (
    <Head>
      {/* Essential SEO Meta Tags */}
      <title>{title ?? fallbackTitle}</title>
      <meta name="description" content={description ?? fallbackDescription} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://runjs.in/"></link>
      <link rel="icon" type="image/x-icon" href="./runjs.webp"></link>

      {/* Social Media & Sharing (Indirect SEO Benefits) */}
      <meta property="og:title" content={title ?? fallbackTitle} />
      <meta
        property="og:description"
        content={description ?? fallbackDescription}
      />
      <meta property="og:url" content="https://runjs.in/" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://runjs.in/runjs.webp" />

      <meta name="HandheldFriendly" content="True" />
      <meta name="MobileOptimized" content="320" />
      <meta name="author" content="M R Kishore Kumar" />
      <meta name="keywords" content="runjs" />

      {/* Language and Viewport */}
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
  );
}
