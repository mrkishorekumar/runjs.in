import React, { Fragment } from 'react';
import MetaTag from '../components/seo/MetaTag';
import { inter } from '../styles/font';
import Image from 'next/image';

export default function About() {
  return (
    <Fragment>
      <MetaTag
        title="About | RunJS.in"
        description="RunJS.in is an interactive platform to learn code and solve real-world problems on RunJS.in. This platform helps you to boost your Javascript career."
      />
      <main className="absolute inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
        <section
          className={
            'mx-auto flex h-screen max-w-3xl flex-col items-center justify-center p-6 text-gray-800 ' +
            inter.className
          }
        >
          <h1 className="mb-4 text-3xl font-bold">Welcome to RunJS.in</h1>

          <p className="mb-4">
            RunJS.in is an online platform where you can{' '}
            <strong>learn JavaScript</strong>, practice coding problems, and
            build real skills through hands-on challenges.
          </p>

          <p className="mb-4">
            Whether you are a complete beginner or brushing up your skills, our
            guided lessons and interactive exercises help you learn JavaScript
            in a fun and structured way.
          </p>

          <p className="mb-4">
            You will work on logical, real-world problems that help you
            understand how JavaScript really works — not just memorize syntax.
          </p>

          <p className="mb-4">
            We also offer structured <strong>learning paths</strong> that focus
            on topics like core JavaScript, DOM manipulation, and async
            programming. Each path includes hints, solution explanations, and
            AI-powered debugging assistance.
          </p>

          <p className="mb-4">
            Your progress is visible on your <strong>public profile</strong> —
            including your certificates, challenge history, and activity — which
            you can share with recruiters or showcase to friends.
          </p>

          <p className="mb-4 text-sm text-gray-500">
            RunJS.in is the perfect place to master JavaScript with practice,
            projects, and support — all in one platform.
          </p>
          <h1 className="mb-1 text-xl font-bold">Trusted by devs at:</h1>
          <Image
            width={1079}
            height={14}
            src="/companies.avif"
            alt="Partner Companies"
            className="h-12 object-contain"
          />
          <p className="text-sm text-gray-500">
            *RunJS.in has users with official emails from these companies.
          </p>
        </section>
      </main>
    </Fragment>
  );
}
