// footer for user pages
import React from 'react'

export default function FooterUser() {
  return (
    <div>
      <footer className="text-gray-300 body-font bg-purple-700">
        <div className="container mx-auto flex items-center justify-between px-5 py-2">
          <a className="flex title-font font-medium items-center text-purple-400">
            <i className="fa-solid fa-square-parking text-white text-2xl"></i>
            <span className="ml-3 text-xl text-white">Parking Booking System</span>
          </a>
          <div className="inline-flex space-x-4 text-xl text-gray-300 max-sm:hidden">
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
  )
}
