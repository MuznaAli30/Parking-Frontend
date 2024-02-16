//FeedbackPage Buttons
//Contact page Buttons
//Login buttons
//Registration Buttons
//Book Slot timmings button

import React from 'react'

export const LoginRegistrationBtns = ({ label, onClick, icon }) => (
    <button className="text-white bg-indigo-500 border-0 py-2 px-6 mb-5 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={onClick} ><i class={icon}></i> {label}</button>
  )
