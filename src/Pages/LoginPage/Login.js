import React from 'react'
import login from '../../Assets/Images/login.webp'
import {useNavigate } from 'react-router-dom'
import Header from '../../Components/HomeHeaderFooter/Header';
import Footer from '../../Components/HomeHeaderFooter/Footer';
import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react';
import { LoginRegistrationBtns } from '../../Utilis/Buttons/LoginRegistrationBtns/LoginRegistrationBtns';

const Login = ()=> {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e) =>{
    e.preventDefault();
    if(email === "muzna@gmail.com" && password === "muz123"){
      console.log("login")
      navigate('/userDashboardHome')
    }
    else if (email === "admin@gmail.com" && password === "ad123"){
      console.log("login")
      navigate('/adminDashboardHome')
    }
    else{
      
      toast.error("Incorrect email and passowrd")

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
      <section>
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 max-sm:p-0 flex items-end justify-start relative">
            <img className='rounded-2xl' src= {login} alt='err'/>
            <div className="absolute inset-0 flex items-center justify-center">
            </div>
          </div>
          <form className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0" onSubmit={handleLogin} >
            <h2  className="text-gray-900 text-3xl mb-1 font-medium title-font mt-24"><i class="fa-solid fa-user"></i> Login</h2>
            <p className="leading-relaxed mb-5 text-gray-600">Login Yourself here!</p>
            <input className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4" placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4" placeholder="Password" type="password" value={password}  onChange={(e) => setPassword(e.target.value)} />
            <LoginRegistrationBtns  label={"Login"} type={'submit'} onClick={handleLogin} icon={"fa-solid fa-right-to-bracket"} />

            <p className="leading-relaxed mt-5 text-gray-600">If you dont have an account then Register here!</p>
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