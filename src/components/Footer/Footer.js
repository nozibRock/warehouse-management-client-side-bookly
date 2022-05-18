import React from 'react';
import logo from '../../assets/logo.gif'

const Footer = () => {
    return (
      <div className=" border-t-2 border-gray-700">
        <footer className="p-4 bg-white sm:p-6 dark:bg-gray-800">
          <div className="grid grid-cols-1 gap-1 sm:gap-0 sm:grid-cols-2">
            <div className="mb-6 md:mb-0 align-middle">
              <img src={logo} className="h-16 inline" alt="Bookly Logo" />
              <span className="text-4xl font-bold whitespace-nowrap dark:text-white">
                Bookly
              </span>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:gap-12 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Resources
                </h2>
                <ul className="text-gray-600 dark:text-gray-400">
                  <li className="mb-4">
                    <a
                      href="https://getbookly.com/"
                      className="hover:underline"
                    >
                      Bookly
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tailwindcss.com/"
                      className="hover:underline"
                    >
                      Tailwind CSS
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Follow us
                </h2>
                <ul className="text-gray-600 dark:text-gray-400">
                  <li className="mb-4">
                    <a
                      href="https://www.instagram.com/booklyapp/"
                      className="hover:underline "
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/booklyreadmore/"
                      className="hover:underline"
                    >
                      Facebook
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Legal
                </h2>
                <ul className="text-gray-600 dark:text-gray-400">
                  <li className="mb-4">
                    <a href="/" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="/" className="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
};

export default Footer;