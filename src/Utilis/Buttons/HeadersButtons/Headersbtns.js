//home Header
//User header (logout btn)
//admin header (logout btn)

import React from 'react'

export const Headersbtns=({label, onClick})=>(

<button  onClick={onClick} className="inline-flex text-black bg-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-100 rounded text-lg max-sm:mt-3 max-sm:mb-3 mt-4 mb-4">{label}</button>

)

