// images as a buttons in Space booking page

import React from 'react'

export const SpaceBookingbtns=({src, onClick})=> (
  <button ><img className="h-[50vh] w-full hover:shadow-2xl hover:scale-105 rounded-xl"  onClick={onClick} src={src} alt=""/></button>
  )

