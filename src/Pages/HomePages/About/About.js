import React from 'react';
import lux from '../../../Assets/Images/lux.webp'
import avlb from'../../../Assets/Images/avlb.webp'
import { useNavigate } from 'react-router-dom';
import Header from '../../../Components/HomeHeaderFooter/Header';
import Footer from '../../../Components/HomeHeaderFooter/Footer';
import { LoginRegistrationBtns } from '../../../Utilis/Buttons/LoginRegistrationBtns/LoginRegistrationBtns';




const About = () => {

  const navigate = useNavigate()

  const navigateToHomePage = (e) => {
    e.preventDefault()
    console.log("Homepage")
    navigate('/')
  }

  const handleContactSend = (e) => {
    e.preventDefault()
    console.log("sent Contact")
  }

  return (
    <div>
      <Header/>
      <section class="bg-black dark:bg-gray-900">
    <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div class="font-light text-white sm:text-lg">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-[#d46e08] ">We didn't reinvent the wheel</h2>
            <p class="mb-4">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
            <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-8">
            <img class="w-full rounded-lg" src={lux} alt="office content 1"/>
            <img class="mt-4 w-full lg:mt-10 rounded-lg" src={avlb} alt="office content 2"/>
        </div>
        </div>
</section>
<section class="bg-black">
  <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="max-w-screen-lg text-black sm:text-lg ">
          <h2 class="mb-4 text-4xl tracking-tight font-bold text-[#d46e08]">Powering innovation at <span class="font-extrabold">200,000+</span> companies worldwide</h2>
          <p class="mb-4 font-light text-white">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
          <p class="mb-4 font-medium text-[#da924a]">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease.</p>
          <LoginRegistrationBtns  label={"Home"}  icon={"fa-solid fa-house"} onClick={navigateToHomePage}/>

      </div>
  </div>
</section>
      <Footer/>
      </div>
  );
}

export default About;
