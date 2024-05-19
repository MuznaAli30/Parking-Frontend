// color
import React from 'react'
import Content from '../Content/Content';
import lux from '../../../Assets/Images/lux.webp'
import top from '../../../Assets/Images/top.webp'
import about from '../../../Assets/Images/about.webp'
import {useNavigate } from 'react-router-dom';
import Header from '../../../Components/HomeHeaderFooter/Header';
import Footer from '../../../Components/HomeHeaderFooter/Footer';
import { Homebtns } from '../../../Utilis/Buttons/HomePagebtns/Homebtns';
import About from '../About/About';

const Hero=()=>{

  const navigate = useNavigate()

  const navigateToLoginPage = (e) => {
    e.preventDefault()
    console.log("LoginPage")
    navigate('/Login')
  }


  return (
    <div className=''>
      <Header/>
      <section class="bg-black">
  <div class="container mx-auto flex flex-col items-center justify-center">
    <img className="w-full h-[80vh] py-12 mb-10 max-sm:h-[50vh] rounded-2xl " alt="hero" src={lux}/>
    <div class="text-center lg:w-2/3 w-[100%]">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium underline-offset-2 text-[#d46e08]">Welcome to Real-time Parking Booking System</h1>
      <p class="mb-8 leading-relaxed  text-white text-xl">The smart real-time parking booking system aims to streamline the parking reservation process, saving users time and reducing the stress associated with finding parking in congested areas. By providing a user-friendly interface and real-time information, the system enhances the efficiency and convenience of parking management for both users and parking operators.</p>
      <div class="flex justify-center">

        <Homebtns label={"Login Now"} onClick={navigateToLoginPage} />
      </div>
    </div>
  </div>
  <img className="w-[85%] mx-auto flex flex-col items-center justify-center h-[80vh] py-12 rounded-2xl max-sm:h-[50vh] max-sm:w-full" alt="hero" src={top}/>
</section>
<Content/>
<Footer/>

    </div>
  )
}
export default Hero
