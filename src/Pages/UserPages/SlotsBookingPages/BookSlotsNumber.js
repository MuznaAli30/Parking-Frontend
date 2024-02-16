import React from 'react'
import HeaderUser from '../../../Components/UserHeaderFooter/HeaderUser'
import FooterUser from '../../../Components/UserHeaderFooter/FooterUser'
import ParkingSlotNum from '../../../Assets/Images/parkingSlotNum.webp'
import { Link } from 'react-router-dom'

const BookSlotsNumber=()=>{
  return (
    <div className='bg-purple-100'>
      <HeaderUser/>
      <div className="flex flex-col items-center text-center justify-center">
        <h2 class="font-bold title-font text-black text-3xl mt-10"><Link to='/bookSlotTimings'><i class="fa-solid fa-circle-left text-3xl hover:scale-125"></i></Link>  Select Slot Number</h2>
        </div>
      <div className="flex flex-wrap mt-24 mb-24 items-center text-center justify-center">
            <div className="px-8 py-6">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Slot One</h2>
              <Link><img className='rounded-2xl cursor-pointer hover:shadow-2xl hover:scale-105' src={ParkingSlotNum} alt=""/></Link>
            </div>
            <div className=" px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Slot Two</h2>
              <Link><img className='rounded-2xl cursor-pointer hover:shadow-2xl hover:scale-105' src={ParkingSlotNum} alt=""/></Link>
            </div>
            <div className=" px-8 py-6 ">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Slot Three</h2>
              <Link><img className='rounded-2xl cursor-pointer hover:shadow-2xl hover:scale-105' src={ParkingSlotNum} alt=""/></Link>
            </div>
            <div className=" px-8 py-6 ">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Slot Four</h2>
              <Link><img className='rounded-2xl cursor-pointer hover:shadow-2xl hover:scale-105' src={ParkingSlotNum} alt=""/></Link>
            </div>
          </div>
          <div className="flex flex-wrap mt-24 mb-24 items-center text-center justify-center">
            <div className=" px-8 py-6 ">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Slot Five</h2>
              <Link><img className='rounded-2xl cursor-pointer hover:shadow-2xl hover:scale-105' src={ParkingSlotNum} alt=""/></Link>
            </div>
            <div className=" px-8 py-6 ">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Slot Six</h2>
              <Link><img className='rounded-2xl cursor-pointer hover:shadow-2xl hover:scale-105' src={ParkingSlotNum} alt=""/></Link>
            </div>
            <div className=" px-8 py-6 ">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Slot Seven</h2>
              <Link><img className='rounded-2xl cursor-pointer hover:shadow-2xl hover:scale-105' src={ParkingSlotNum} alt=""/></Link>
            </div>
            <div className=" px-8 py-6">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Slot Eight</h2>
              <Link><img className='rounded-2xl cursor-pointer hover:shadow-2xl hover:scale-105' src={ParkingSlotNum} alt=""/></Link>
            </div>
          </div>
      <FooterUser/>
    </div>
  )
}
export default BookSlotsNumber