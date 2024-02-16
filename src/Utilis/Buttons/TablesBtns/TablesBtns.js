//user can cancle their booking's btns
//admin can cancel user's bookings btns
//admin can reply to user's feebacks btns

import React from 'react'

export const TablesBtns = ({label, onClick, className})=> (

    <button  onClick={onClick} className="inline-flex text-white bg-red-700 border-0 py-2 px-5 max-sm:p-1 focus:outline-none hover:bg-gray-500 rounded text-lg mt-4 mb-4 max-sm:text-sm">{label}</button>

)
