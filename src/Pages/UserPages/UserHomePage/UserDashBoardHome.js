import React, { useState, useEffect } from 'react'
import FooterUser from '../../../Components/UserHeaderFooter/FooterUser'
import HeaderUser from '../../../Components/UserHeaderFooter/HeaderUser'
import dh from '../../../Assets/Images/dh.webp'
import axios from 'axios';
import { Api } from '../../../Api/Api';
import { useParams } from 'react-router-dom';


const UserDashBoardHome=()=>{

  const [data, setData] = useState([]);
  const params = useParams();

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const userName = await axios.get(`${Api}/Register/registerid/${params.id}`);
        console.log("url is correct")
        setData(userName.data);
        console.log(userName.data);
        console.log("fetched")
      } catch (error) {
        console.log("not fetching : ", error);
        
      }
    };
    fetchUserName();
    // eslint-disable-next-line no-unused-expressions
  },[])

  return (
    <div className='bg-black'>
      <HeaderUser/>
      <section class="text-black body-font">
  <div class="container px-0 py-24 mx-auto flex flex-col">
    <div class="w-{90%]">
      <div class="rounded-lg h-94 overflow-hidden">
      <div>
        <div className="flex flex-col items-center text-center justify-center">
            <div class="font-medium title-font mt-4 text-[#d46e08] text-3xl">
            {data && <h2>{data.Name}</h2>}
            </div>
            <div class="w-24 h-1 rounded mt-2 mb-4 bg-[#d46e08]"></div>
            <p class="leading-relaxed text-2xl mb-4 text-white">Welcome to your personalized parking space dashboard!</p>
        </div>
          </div>
          <div class="flex flex-col sm:flex-row mt-5 items-center text-center justify-center w-full">
        <div class=" text-center sm:pr-8 sm:py-8">
        <img className='mb-10' src={dh} aria-label='err'/>
        <div>
        <p class="leading-relaxed text-2xl mb-4 text-white">With our Real Time Parking Booking System, you can easily book available parking spaces, cancel reservations if plans change, and share feedback to help us improve your experience. Your dashboard is designed to provide hassle-free parking experiences, offering convenience and control at your fingertips. Thank you for choosing our system; we're committed to delivering exceptional service and enhancing your parking journey.</p>
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
