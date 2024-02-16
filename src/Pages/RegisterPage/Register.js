import React from 'react'
import Registeration from '../../Assets/Images/register.webp'
import { useNavigate } from 'react-router-dom'
import Header from '../../Components/HomeHeaderFooter/Header';
import Footer from '../../Components/HomeHeaderFooter/Footer';
import { LoginRegistrationBtns } from '../../Utilis/Buttons/LoginRegistrationBtns/LoginRegistrationBtns';

const Register=()=>{

  const navigate = useNavigate()

  const navigateToLoginPage = (e) => {
    e.preventDefault()
    console.log("LoginPage")
    navigate('/Login')
  }

  const navigateToHomePage = (e) => {
    e.preventDefault()
    console.log("Homepage")
    navigate('/')
  }

  return (
    <div className='bg-purple-100'>
      <Header/>
      <section>
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <img className='rounded-2xl' src= {Registeration} alt='err'/>
            <div className="absolute inset-0 flex items-center justify-center">
            </div>
          </div>
          <form className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2  className="text-gray-900 text-3xl mb-1 font-medium title-font mt-24"><i class="fa-solid fa-address-card"></i>  Registeration</h2>
            <p className="leading-relaxed mb-5 text-gray-600">Register Yourself here!</p>
            <input className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4" placeholder="Name" type="text" />
            <input className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4" placeholder="Email" type="email" />
            <input className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4" placeholder="Password" type="password" />
            <input className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4" placeholder="Contact" type="contact" />
            <LoginRegistrationBtns  label={"Register"}  icon={"fa-solid fa-address-card"}/>

            <p className="leading-relaxed mt-5 text-gray-600">Now Login!</p>

            <LoginRegistrationBtns  label={"Login"} icon={"fa-solid fa-right-to-bracket"} onClick={navigateToLoginPage} />
            <LoginRegistrationBtns  label={"Home"}  icon={"fa-solid fa-house"} onClick={navigateToHomePage} />
            
            </form>
        </div>
      </section>
      <Footer/>
    </div>
  )
}
export default Register
