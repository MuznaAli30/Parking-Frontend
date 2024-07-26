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
        {setName(''), setEmail(''), setPassword(''), setContact('');} //after registration set field empty
      }
      else if(newRegistration.status === 400){
        toast.error("user already exist")
      }
      else if(newRegistration.status === 204){
        toast.error("Invalid Fileds Please check all fields")
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
    <div className='bg-black'>
      <Header/>
      <section className='bg-black min-h-screen flex items-center justify-center'>
        <div className="container mx-auto px-4">
          <form className="lg:w-1/3 md:w-1/2 flex flex-col mx-auto w-full md:py-8 mt-8 md:mt-0" onSubmit={handleRegistration}>
            <h2 className="text-[#d46e08] text-3xl mb-2 font-medium title-font mt-24 text-center">
              <i className="fa-solid fa-address-card"></i> Registration
            </h2>
            <input className="bg-white rounded border border-gray-400 focus:outline-none text-base px-4 py-2 mb-4" placeholder="Name" type="text" value={Name} onChange={(e) => setName(e.target.value)}/>
            <input className="bg-white rounded border border-gray-400 focus:outline-none text-base px-4 py-2 mb-4" placeholder="Email" type="email" value={Email} onChange={(e) => setEmail(e.target.value)}/>
            <p className="text-white">Password must be contain 6 characters</p>
            <input className="bg-white rounded border border-gray-400 focus:outline-none text-base px-4 py-2 mb-4" placeholder="Password" type="password" value={Password} onChange={(e) => setPassword(e.target.value)} />
            <p className=" text-white">Contact number must be contein 11 digits</p>
            <input className="bg-white rounded border border-gray-400 focus:outline-none text-base px-4 py-2 mb-4" placeholder="Contact" type="contact" value={Contact} onChange={(e) => setContact(e.target.value)} />
            <LoginRegistrationBtns  label={"Register"}  icon={"fa-solid fa-address-card"} type={'submit'} onClick={handleRegistration}/>

            <p className="leading-relaxed mt-5 text-white">Now Login!</p>

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
