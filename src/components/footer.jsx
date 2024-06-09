import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-auto text-white mb-8 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">RRE India Pvt Ltd</h4>
            <p className="text-gray-400">© 2024 All rights reserved.</p>
          </div>
          <div className="w-full md:w-1/4 md:px-4 mb-8 md:mb-0">
            <h4 className="text-lg font-semibold mb-4 text-white">Products</h4>
            <ul className="list-none text-gray-400">
              <li className="mb-4">
                <Link href="/products/emd" className="hover:text-white">
                  EMD
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/products/alco" className="hover:text-white">
                  ALCO
                </Link>
              </li>
              <li>
                <Link href="/products/ge" className="hover:text-white">
                  GE
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 md:px-4 mb-8 md:mb-0">
            <h4 className="text-lg font-semibold mb-4 text-white">Company</h4>
            <ul className="list-none text-gray-400">
              <li className="mb-4">
                <Link href="#about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 md:px-4">
            <h4 className="text-lg font-semibold mb-4 text-white">Legal</h4>
            <ul className="list-none text-gray-400">
              <li className="mb-4">
                <Link href="#" className="hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Cookies Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
