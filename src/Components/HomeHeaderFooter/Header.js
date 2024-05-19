// Header for home pages
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Headersbtns } from '../../Utilis/Buttons/HeadersButtons/Headersbtns';

const Header = () => {

  const navigate = useNavigate()


  const navigateToRegistrationPage = (e) => {
    e.preventDefault()
    console.log("registerPage")
    navigate('/register')
  }

  const navigateToLoginPage = (e) => {
    e.preventDefault()
    console.log("LoginPage")
    navigate('/Login')
  }

  return (
    <div>
      <header className="text-gray-300 body-font bg-[#d46e08]">
        <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center md:items-center md:text-center md:justify-center">
        <h className="flex title-font font-medium items-center text-purple-400 mb-4 md:mb-0">
            <i className="fa-solid fa-square-parking text-white text-2xl max-sm:hidden"></i>
            <span className="ml-3 max-sm:hidden text-lg text-white max-sm:text-xl md:text-xl">Parking Booking System</span>
          </h>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-xl justify-center">
          <Link to="/" className="mr-5 text-white cursor-pointer hover:text-gray-400 max-sm:mt-3 max-sm:mb-3 max-sm:text-xl"><i class="fa-solid fa-house"></i> Home</Link>
            <Link to="/About" className="mr-5 text-white cursor-pointer hover:text-gray-400 max-sm:mt-3 max-sm:mb-3 max-sm:text-xl"><i class="fa-solid fa-address-card"></i> About</Link>
            <Link to="/viewFeedbackReviews" className="mr-5 text-white cursor-pointer hover:text-gray-400 max-sm:mt-3 max-sm:mb-3 font-medium max-sm:text-xl"><i class="fa-solid fa-users-viewfinder"></i> Reviews</Link>
          </nav>
          <div className='space-x-3'>

          <Headersbtns  label={"Login"} onClick={navigateToLoginPage}/>
          <Headersbtns  label={"Register"} onClick={navigateToRegistrationPage}/>

          
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
