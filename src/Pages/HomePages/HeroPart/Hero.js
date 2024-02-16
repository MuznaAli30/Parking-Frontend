// color
import React from 'react'
import Content from '../Content/Content';
import homeImage from '../../../Assets/Images/homeimg3.jpg'
import about from '../../../Assets/Images/about.jpg'
import { Link,useNavigate } from 'react-router-dom';
import Header from '../../../Components/HomeHeaderFooter/Header';
import Footer from '../../../Components/HomeHeaderFooter/Footer';
import { Homebtns } from '../../../Utilis/Buttons/HomePagebtns/Homebtns';

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
      <section class="bg-purple-100">
  <div class="container mx-auto flex flex-col items-center justify-center">
    <img className="w-full h-[80vh] py-12 mb-10  rounded-xl max-sm:h-[50vh]" alt="hero" src={homeImage}/>
    <div class="text-center lg:w-2/3 w-[100%]">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium underline-offset-2 text-black">Welcome to Real-time Parking Booking System</h1>
      <p class="mb-8 leading-relaxed text-xl">The smart real-time parking booking system aims to streamline the parking reservation process, saving users time and reducing the stress associated with finding parking in congested areas. By providing a user-friendly interface and real-time information, the system enhances the efficiency and convenience of parking management for both users and parking operators.</p>
      <div class="flex justify-center">
        {/* <Link to="/login" className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Login</Link> */}
        <Homebtns label={"Login Now"} onClick={navigateToLoginPage} />
      </div>
    </div>
  </div>
  <img className="w-[85%] mx-auto flex flex-col items-center justify-center h-[80vh] py-12  rounded-xl max-sm:h-[50vh] max-sm:w-full" alt="hero" src={about}/>
</section>
<Content/>
<Footer/>
    </div>
  )
}
export default Hero
