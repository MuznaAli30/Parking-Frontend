import React from 'react'
import log from '../../Assets/Images/log.webp'
import {useNavigate } from 'react-router-dom'
import Header from '../../Components/HomeHeaderFooter/Header';
import Footer from '../../Components/HomeHeaderFooter/Footer';
import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react';
import { LoginRegistrationBtns } from '../../Utilis/Buttons/LoginRegistrationBtns/LoginRegistrationBtns';
import axios from 'axios';
import { Api } from '../../Api/Api';
import Cookies from 'js-cookie';

const Login = ()=> {

  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const userLogin = await axios.post(`${Api}/Register/loginUsers`, { Email, Password });
  
      if (userLogin.status === 200) {
        const { result, role } = userLogin.data;
        console.log(result); 
        console.log(Email);
        console.log(role);
  
        if (role === 'admin') {
          Cookies.set('Email', Email);
          Cookies.set('Password', Password)
          navigate('/adminDashboardHome');


        } else if (result && result.Email) {

          navigate(`/userDashboardHome/${result._id}`);
          toast.success("Logged in");
        } else {
          toast.error("Invalid response from the server");
        }
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  }
  
  const navigateToRegistrationPage = (e) => {
    e.preventDefault()
    console.log("registerPage")
    navigate('/register')
  }

  const navigateToHomePage = (e) => {
    e.preventDefault()
    console.log("Homepage")
    navigate('/')
  }

  return (
    <div>
      <Header/>
      <section className='bg-black'>
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 max-sm:p-0 flex items-end justify-start relative">
            <img className='rounded-2xl' src= {log} alt='err'/>
            <div className="absolute inset-0 flex items-center justify-center">
            </div>
          </div>
          <form className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0" onSubmit={handleLogin} >
            <h2  className="text-[#d46e08] text-3xl mb-1 font-medium title-font mt-24"><i class="text-[#d46e08] fa-solid fa-user"></i> Login</h2>
            <p className="leading-relaxed mb-5 text-white">Login Yourself here!</p>
            <input className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4" placeholder="Email" type="email" value={Email} onChange={(e) => setEmail(e.target.value)} />
            <input className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4" placeholder="Password" type="password" value={Password}  onChange={(e) => setPassword(e.target.value)} />
            <LoginRegistrationBtns  label={"Login"} type={'submit'} onClick={handleLogin} icon={"fa-solid fa-right-to-bracket"} />

            <p className="leading-relaxed mt-5 text-white">If you dont have an account then Register here!</p>
            <LoginRegistrationBtns  label={"Register"}  icon={"fa-solid fa-address-card"}  onClick={navigateToRegistrationPage}/>
            <LoginRegistrationBtns  label={"Home"}  icon={"fa-solid fa-house"} onClick={navigateToHomePage}/>

          </form>
        </div>
      </section>
      <Footer/>
      <Toaster/>
    </div>
  )
}
export default Login