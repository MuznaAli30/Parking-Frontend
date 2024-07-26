//home page login and register btn except header's btns

import React from 'react'

export const Homebtns=({label,onClick})=>(

    <button onClick={onClick} className="inline-flex text-white bg-[#d46e08] border-0 py-2 px-6 focus:outline-none hover:bg-[#a05306] rounded text-lg mt-5">{label}</button>
)
