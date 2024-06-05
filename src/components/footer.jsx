import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-auto text-white mb-8 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">ASA Engine Equipment</h4>
            <p className="text-gray-400">© 2024 All rights reserved.</p>
          </div>
          <div className="w-full md:w-1/4 md:px-4 mb-8 md:mb-0">
            <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
            <ul className="list-none text-gray-400">
              <li className="mb-4">
                <a href="#" className="hover:text-white">
                  Web Development
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:text-white">
                  Mobile App Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  UI/UX Design
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 md:px-4 mb-8 md:mb-0">
            <h4 className="text-lg font-semibold mb-4 text-white">Company</h4>
            <ul className="list-none text-gray-400">
              <li className="mb-4">
                <a href="#" className="hover:text-white">
                  About
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 md:px-4">
            <h4 className="text-lg font-semibold mb-4 text-white">Legal</h4>
            <ul className="list-none text-gray-400">
              <li className="mb-4">
                <a href="#" className="hover:text-white">
                  Terms of Service
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Cookies Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
