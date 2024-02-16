import React from 'react'
import FooterUser from '../../../Components/UserHeaderFooter/FooterUser'
import HeaderUser from '../../../Components/UserHeaderFooter/HeaderUser'
import UserHome from '../../../Assets/Images/UserHome.jpg'


const UserDashBoardHome=()=>{
  return (
    <div className='bg-purple-100'>
      <HeaderUser/>
      <section class="text-black body-font">
  <div class="container px-0 py-24 mx-auto flex flex-col">
    <div class="w-{90%]">
      <div class="rounded-lg h-94 overflow-hidden">
      <div>
        <div className="flex flex-col items-center text-center justify-center">
            <h2 class="font-medium title-font mt-4 text-black text-3xl">User Name</h2>
            <div class="w-24 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
            <p class="leading-relaxed text-2xl mb-4">Welcome to your personalized parking space dashboard!</p>
        </div>
          </div>
          <div class="flex flex-col sm:flex-row mt-5 items-center text-center justify-center w-full">
        <div class=" text-center sm:pr-8 sm:py-8">
        <img className='mb-10' src={UserHome} aria-label='err'/>
        <div>
        <p class="leading-relaxed text-2xl mb-4">With our Real Time Parking Booking System, you can easily book available parking spaces, cancel reservations if plans change, and share feedback to help us improve your experience. Your dashboard is designed to provide hassle-free parking experiences, offering convenience and control at your fingertips. Thank you for choosing our system; we're committed to delivering exceptional service and enhancing your parking journey.</p>
        </div>
      </div>
      
    </div>
      </div>
      </div>
  </div>
</section>
  <FooterUser/>
    </div>
  )
}
export default UserDashBoardHome