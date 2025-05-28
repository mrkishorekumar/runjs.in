import Link from 'next/link';
import React from 'react';
import { inter } from '../../styles/font';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section
      className={
        'absolute inset-0 h-screen w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] [background-size:16px_16px] ' +
        inter.className
      }
    >
      <div className="mx-auto flex h-full w-screen max-w-screen-xl items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-prose flex-col items-center text-center">
          <Image width={112} height={16} src="/users.webp" alt="RunJS Users" />
          <span className="mt-4 text-base text-gray-700">
            {'{ Trusted by 1M+ developers }'}
          </span>
          <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
            Master Javascript Programming with RunJS.in
          </p>
          <h1 className="mt-4 text-4xl font-bold text-gray-900">
            Learn, Practice & Compete
          </h1>
          <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
            Join millions of developers in learning in-demand programming
            languages, solving real-world problems, and excelling in coding
            competitions.
          </p>
          <div className="mt-4 flex justify-center gap-4 sm:mt-6">
            <Link
              className="inline-block rounded-md border bg-black px-5 py-3 font-medium text-white shadow-sm transition-colors"
              href="/start"
            >
              Get Started
            </Link>
            <Link
              className="inline-block rounded-md border border-gray-200 bg-white px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
              href="/about"
            >
              About Us
            </Link>
          </div>
          <p className="mt-4 text-sm font-medium text-gray-700">
            RunJS.in is the foundation for mastering technical JavaScript coding
            interviews.
          </p>
        </div>
      </div>
    </section>
  );
}
