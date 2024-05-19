import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Headersbtns } from '../../Utilis/Buttons/HeadersButtons/Headersbtns';
import Cookies from 'js-cookie';
import { useEffect } from 'react';

const HeaderAdmin=()=>{

  const navigate = useNavigate()

  const navigateToLogOutPage = (e) => {
    e.preventDefault();
    // removing cookies
    Cookies.remove('Email');
    Cookies.remove('Password');
    // after removing navigate to login page
    navigate('/Login');
  };
  // a variable that will be true if cookies is equal to admin@gmail.com means if user is admin otherwise it will be false
  const isUserAdmin = Cookies.get('Email') === 'admin@gmail.com';

  useEffect(() => {
    // if user is not admin "isUserAdmin === false" its navigate to login page
    if (!isUserAdmin) {
      navigate('/Login');
    }
    // dependency array, navigation depneds on isUserAdmin value
  }, [isUserAdmin, navigate]);

  return (
    <div>
      <header className="text-gray-300 body-font bg-[#d46e08] ">
        <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center md:items-center md:text-center md:justify-center">
          <h className="flex title-font font-medium items-center text-purple-400 mb-4 md:mb-0">
            <i className="fa-solid fa-square-parking text-white text-2xl max-sm:hidden"></i>
            <span className="ml-3 text-xl text-white max-sm:text-xl md:text-xl max-sm:hidden">Parking Booking System</span>
          </h>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4  flex flex-wrap items-center text-xl justify-center">
          <Link to={`/adminDashboardHome`}  className="mr-5 text-white cursor-pointer hover:text-gray-400 max-sm:mt-3 max-sm:mb-3 font-medium max-sm:text-xl"><i class="fa-solid fa-house"></i> Home</Link>
            <Link to="/cancleBookingAdmin" className="mr-5 text-white cursor-pointer hover:text-gray-400 max-sm:mt-3 max-sm:mb-3 max-sm:text-xl"><i class="fa-solid fa-clipboard-check"></i> Cancel Bookings </Link>
            <Link to="/viewUser" className="mr-5 text-white cursor-pointer hover:text-gray-400 max-sm:mt-3 max-sm:mb-3 font-medium max-sm:text-xl"><i class="fa-solid fa-users"></i> View Users</Link>
          </nav>
          <div className='space-x-3'>
            
          <Headersbtns  label={"LogOut"} onClick={navigateToLogOutPage}/>

          </div>
        </div>
      </header>
    </div>
  )
}
export default HeaderAdmin