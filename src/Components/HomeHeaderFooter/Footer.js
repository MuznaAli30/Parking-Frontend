// footer for home pages
import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-300 body-font bg-[#d46e08]">
        <div className="container mx-auto flex items-center justify-between px-5 py-3">
          <h className="flex title-font font-medium items-center text-purple-400">
            <i className="fa-solid fa-square-parking text-white text-2xl"></i>
            <span className="ml-3 text-xl text-white">Parking</span>
          </h>
          <p className="text-xl text-white max-sm:hidden">© 2024 Real Time Parking</p>
          <div className="inline-flex space-x-4 text-xl text-gray-300">
            <a className="text-white" href="https://www.facebook.com">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a className="text-white" href="https://twitter.com">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a className="text-white" href="https://instagram.com">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a className="text-white" href="https://linkedin.com">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
