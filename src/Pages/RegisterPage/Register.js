import React, { useState } from 'react'
import Registeration from '../../Assets/Images/register.webp'
import { useNavigate } from 'react-router-dom'
import Header from '../../Components/HomeHeaderFooter/Header';
import Footer from '../../Components/HomeHeaderFooter/Footer';
import { LoginRegistrationBtns } from '../../Utilis/Buttons/LoginRegistrationBtns/LoginRegistrationBtns';
import axios from 'axios';
import toast, {Toaster} from "react-hot-toast";
import {Api} from '../../Api/Api';

const Register=()=>{

  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const [Contact, setContact] = useState('')

  const navigate = useNavigate()

  const handleRegistration = async (e) => {
    
    e.preventDefault(); 

    try {
      
      const newRegistration = await axios.post(`${Api}/Register/addUsers`, {Name, Email, Password, Contact});
      
      if(newRegistration.status === 201){
        toast.success("Registered sucessfully");
        // eslint-disable-next-line no-unused-expressions
        {setName(''), setEmail(''), setPassword(''), setContact(''); }//after registration set field empty
      }
      else{
        toast.error("Try again")
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong")
    }
  };

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
          <form className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0" onSubmit={handleRegistration}>
            <h2  className="text-gray-900 text-3xl mb-1 font-medium title-font mt-24"><i class="fa-solid fa-address-card"></i>  Registeration</h2>
            <p className="leading-relaxed mb-5 text-gray-600">Register Yourself here!</p>
            <input className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4" placeholder="Name" type="text" value={Name} onChange={(e) => setName(e.target.value)}/>
            <input className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4" placeholder="Email" type="email" value={Email} onChange={(e) => setEmail(e.target.value)}/>
            <input className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4" placeholder="Password" type="password" value={Password} onChange={(e) => setPassword(e.target.value)} />
            <input className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4" placeholder="Contact" type="contact" value={Contact} onChange={(e) => setContact(e.target.value)} />
            <LoginRegistrationBtns  label={"Register"}  icon={"fa-solid fa-address-card"} type={'submit'} onClick={handleRegistration}/>

            <p className="leading-relaxed mt-5 text-gray-600">Now Login!</p>

            <LoginRegistrationBtns  label={"Login"} icon={"fa-solid fa-right-to-bracket"} onClick={navigateToLoginPage} />
            <LoginRegistrationBtns  label={"Home"}  icon={"fa-solid fa-house"} onClick={navigateToHomePage} />
            
            </form>
        </div>
      </section>
      <Footer/>
      <Toaster/>
    </div>
  )
}
export default Register
