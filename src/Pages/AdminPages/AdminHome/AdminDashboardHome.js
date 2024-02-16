import React from 'react'
import HeaderAdmin from '../../../Components/AdminHeaderOnly/HeaderAdmin'
import FooterUser from '../../../Components/UserHeaderFooter/FooterUser'
import adminHome from '../../../Assets/Images/adminHome.webp'

const AdminDashboardHome=()=>{
  return (
    <div className='bg-purple-100' >
      <HeaderAdmin/>
      <section class="text-black body-font">
  <div class="container px-0 py-24 mx-auto flex flex-col">
    <div class="w-{90%]">
      <div class="rounded-lg h-94 overflow-hidden">
      <div>
        <div className="flex flex-col items-center text-center justify-center">
            <h2 class="font-medium title-font mt-4 text-black text-3xl">Admin Name</h2>
            <div class="w-24 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
            <p class="leading-relaxed text-2xl mb-4">Welcome to your personalized parking space dashboard!</p>
        </div>
          </div>
          <div class="flex flex-col sm:flex-row mt-5 items-center text-center justify-center w-full">
        <div class=" text-center sm:pr-8 sm:py-8">
        <img className='mb-10' src={adminHome} alt='err' />
        <div>
        <p class="leading-relaxed text-2xl mb-4">With our Real-Time Parking Booking System, managing bookings, user interactions, and feedback is streamlined. You can effortlessly handle booking cancellations, review user profiles, and respond to feedback to improve the parking experience. Our intuitive dashboard empowers admins with seamless control and insightful analytics. we're dedicated to facilitating exceptional parking services and refining our platform based on your insights.</p>
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
export default AdminDashboardHome