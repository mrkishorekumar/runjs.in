import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { navbarURLList } from '../../utils/const';
import { inter } from '../../styles/font';

export default function Navbar() {
  return (
    <header className={'antialiased ' + inter.className}>
      <div className="flex flex-wrap items-center px-6 py-2 lg:px-16 lg:py-0">
        <div className="flex flex-1 items-center justify-between">
          <Link href="/dashboard">
            <Image
              src={'/runjs.webp'}
              alt="RunJS.in Logo"
              height={30}
              width={30}
            />
          </Link>
        </div>

        <label htmlFor="menu-toggle" className="pointer-cursor block lg:hidden">
          <svg
            className="fill-current text-gray-900"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </label>
        <input className="hidden" type="checkbox" id="menu-toggle" />

        <div
          className="hidden w-full lg:flex lg:w-auto lg:items-center"
          id="menu"
        >
          <nav className="items-center justify-between pt-4 text-base text-black lg:flex lg:pt-0">
            {navbarURLList.map((list, index) => {
              return (
                <Link
                  className="block border-b-2 border-transparent px-0 py-3 font-semibold hover:border-black lg:p-4"
                  href={list.link}
                  key={index}
                >
                  {list.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
