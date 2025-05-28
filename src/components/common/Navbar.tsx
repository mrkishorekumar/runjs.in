import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="text-xl font-bold text-gray-800">Logo</div>

        {/* Hamburger Icon */}
        <button
          className="flex h-5 w-6 flex-col justify-between focus:outline-none md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <span className="h-0.5 w-full transform bg-gray-800 transition-transform duration-300" />
          <span className="h-0.5 w-full bg-gray-800 transition-opacity duration-300" />
          <span className="h-0.5 w-full transform bg-gray-800 transition-transform duration-300" />
        </button>

        {/* Nav Links */}
        <ul
          className={`absolute top-full left-0 flex w-full flex-col items-center gap-4 bg-white py-6 shadow-md transition-all duration-300 ease-in-out md:static md:w-auto md:flex-row md:gap-8 md:bg-transparent md:py-0 md:shadow-none ${
            isOpen
              ? 'pointer-events-auto max-h-[500px] opacity-100'
              : 'pointer-events-none max-h-0 opacity-0'
          }`}
          style={{ transitionProperty: 'opacity, max-height' }}
        >
          {['Home', 'About', 'Contact'].map((text) => (
            <li key={text}>
              <a
                href="#"
                className="text-base font-medium text-gray-800 transition-colors duration-200 hover:text-blue-600"
              >
                {text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
