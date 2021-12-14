import React from "react";
import moment from "moment";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-between px-6 py-4 bg-gray-800 sm:flex-row">
      <a href="#" className="text-xl text-white hover:text-gray-300">
        Snahashis Kanrar
      </a>

      <p className="py-2 text-white sm:py-0"> &copy; {moment().format("YYYY")} All rights reserved</p>

      <div className="flex -mx-2">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:snahashiskanrar@gmail.com"
          className="mx-2 text-gray-300 hover:text-gray-500 dark:hover:text-gray-300"
        >
          <svg
            viewBox="0 0 24 24"
            width="20"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            shapeRendering="geometricPrecision"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <path d="M22 6l-10 7L2 6"></path>
          </svg>
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/SnahashisKanrar"
          className="mx-2 text-gray-300 hover:text-gray-500 dark:hover:text-gray-300"
        >
          <svg
            viewBox="0 0 24 24"
            width="20"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            shapeRendering="geometricPrecision"
          >
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/snahashisk"
          className="mx-2 text-gray-300 hover:text-gray-500 dark:hover:text-gray-300"
        >
          <svg
            viewBox="0 0 24 24"
            width="20"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            shapeRendering="geometricPrecision"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"></path>
          </svg>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="#"
          className="mx-2 text-gray-300 hover:text-gray-500 dark:hover:text-gray-300"
        >
          <svg
            viewBox="0 0 24 24"
            width="20"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            shapeRendering="geometricPrecision"
          >
            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"></path>
            <path d="M2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
