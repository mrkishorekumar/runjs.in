import React, { Fragment } from 'react';
import { inter } from '../styles/font';
import Image from 'next/image';
import MetaTag from '../components/seo/MetaTag';

export default function SignUp() {
  return (
    <Fragment>
      <MetaTag
        title="Sign in | RunJS.in"
        description="Securely sign in to RunJS.in using your Google account. We respect your privacy and never store your credentials."
      />
      <section
        className={
          'absolute inset-0 h-screen w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] [background-size:16px_16px] ' +
          inter.className
        }
      >
        <div className="mx-auto flex h-full w-screen max-w-screen-xl flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          <h1 className="mt-4 text-4xl font-bold text-gray-900">
            Welcome back
          </h1>
          <p className="mt-4 mb-5 text-sm font-medium text-gray-700">
            Use your Google account to sign in securely.
          </p>
          <button
            onClick={() => {}}
            className="flex cursor-pointer items-center space-x-2 rounded-lg border border-gray-300 bg-white px-6 py-2 text-gray-700 shadow-md transition duration-300 hover:shadow-lg"
          >
            <Image
              src="/google.webp"
              alt="Google Logo"
              width={28}
              height={28}
            />
            <span className="font-semibold text-black">
              Sign in with Google
            </span>
          </button>
          <p className="mt-4 text-sm font-medium text-black">
            Your information is safe with us.
          </p>
          <p className="mt-4 text-sm font-medium text-gray-700">
            *Your account details are safe with us. We do not store passwords or
            share your personal data.
          </p>
        </div>
      </section>
    </Fragment>
  );
}
