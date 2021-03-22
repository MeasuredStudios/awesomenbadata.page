import * as React from 'react';
import { Link } from 'gatsby';
import tw, { css } from 'twin.macro';
import ThemeToggle from './themeToggle';

const NavBar = () => {
  return (
    <header tw="relative max-w-screen-xl mx-auto h-24 p-5 md:flex md:justify-between md:items-center">
      {/* logo */}
      <a href="/" title="back to homepage" tw="logo">
        <svg
          tw="dark:text-white transform scale-75"
          width={52}
          height={52}
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
        >
          <path d="M52 39a13.02 13.02 0 0 1-13-13 13.02 13.02 0 0 1 13-13v26zM26 13L13 26l13 13V13z" />
          <path d="M13 39L0 52V13L13 0V39Z" />
        </svg>
      </a>
      <nav tw="hidden md:block py-1">
        <ul tw="text-right">
          <li tw="inline-block mr-5">
            <a
              href="/about/"
              tw="font-bold transition-colors dark:hover:text-yellow-200 hover:text-black
            dark:text-white text-gray-700 "
            >
              Players
            </a>
          </li>
          <li tw="inline-block mr-5">
            <a
              href="/works/"
              tw="font-bold transition-colors dark:hover:text-yellow-200 hover:text-black
            dark:text-white text-gray-700 "
            >
              Seasons
            </a>
          </li>
          <li tw="inline-block mr-5">
            <a
              href="/posts/"
              tw="font-bold transition-colors dark:hover:text-yellow-200 hover:text-black
            dark:text-white text-gray-700 "
            >
              Stats
            </a>
          </li>
          <li tw="inline-block">
            <a
              href=""
              title="get in touch"
              target="_blank"
              rel="noreferrer"
              tw="text-gray-800 dark:text-yellow-300 py-2 px-5 rounded-full font-bold border-2 border-gray-900 dark:border-yellow-100 border-opacity-20 transition-colors hover:border-opacity-100"
            >
              <span>Get in touch</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
