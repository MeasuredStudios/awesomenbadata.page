import * as React from 'react';
import 'twin.macro';
import Layout from '../components/Layout';
import { PageProps } from 'gatsby';

const Home: React.FC<PageProps> = () => (
  <Layout>
    <div tw="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
      <div tw="flex items-center justify-between">
        <h3 tw="font-bold sm:hidden">League</h3>
        <button tw="flex items-center py-1 pr-1 rounded-md text-primary focus:outline-none">
          <p id="toggle1" tw="px-3 py-1 ml-1 rounded-md">
            West
          </p>
          <p id="toggle2" tw="px-4 py-1 rounded-md">
            East
          </p>
        </button>
        <div tw="px-2 py-2 rounded-md ">
          <select tw="focus:outline-none">
            <option>This Week</option>
          </select>
        </div>
      </div>
      <h1 tw="font-bold text-5xl tracking-tight mb-4">Awesome NBA Data</h1>
      <div tw="mb-8 leading-6 text-gray-600 dark:text-gray-400">
        <p tw="my-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p tw="my-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p tw="my-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <h2 tw="font-bold text-4xl tracking-tight mb-4 mt-8">Table</h2>
      <div tw="my-2">
        <div tw="bg-gray-200 text-sm text-gray-500 leading-none border-2 border-gray-200 rounded-full inline-flex">
          <button
            tw="inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:text-blue-400 focus:text-blue-400 rounded-l-full px-4 py-2 bg-white text-blue-400 rounded-full"
            id="grid"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              tw="fill-current w-4 h-4 mr-2"
            >
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
            <span>Grid</span>
          </button>
          <button
            tw="inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:text-blue-400 focus:text-blue-400 rounded-r-full px-4 py-2"
            id="list"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              tw="fill-current w-4 h-4 mr-2"
            >
              <line x1="8" y1="6" x2="21" y2="6"></line>
              <line x1="8" y1="12" x2="21" y2="12"></line>
              <line x1="8" y1="18" x2="21" y2="18"></line>
              <line x1="3" y1="6" x2="3.01" y2="6"></line>
              <line x1="3" y1="12" x2="3.01" y2="12"></line>
              <line x1="3" y1="18" x2="3.01" y2="18"></line>
            </svg>
            <span>List</span>
          </button>
        </div>
      </div>
      <h2 tw="font-bold text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
        Title
      </h2>
      <p></p>
      <div tw="flex items-center justify-between lg:mt-12  sm:flex-wrap">
        <h4 tw="pb-3 font-semibold ">Toggle</h4>
        <button tw="flex items-center py-1 pr-1 rounded-md sm:w-full text-primary  focus:outline-none ">
          <p
            id="toggle11"
            tw="px-3 px-4 py-1 ml-1 text-white rounded-md sm:flex-1  "
          >
            Toggle 1
          </p>
          <p id="toggle22" tw="px-4 py-1 rounded-md sm:flex-1 ">
            Toggle 2
          </p>
        </button>
      </div>
    </div>
  </Layout>
);

export default Home;
