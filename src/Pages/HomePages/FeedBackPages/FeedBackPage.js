import React from 'react'
import Footer from '../../../Components/HomeHeaderFooter/Footer'
import Header from '../../../Components/HomeHeaderFooter/Header'
import feedback from '../../../Assets/Images/feedback.jpg'
import { Link,useNavigate} from 'react-router-dom'
import { LoginRegistrationBtns } from '../../../Utilis/Buttons/LoginRegistrationBtns/LoginRegistrationBtns'

const FeedBackUser=()=>{

  const navigate = useNavigate()

  const handleSendFeedback = (e) => {
    e.preventDefault()
    console.log("sent feedback")
  }

  const navigateToHomePage = (e) => {
    e.preventDefault()
    console.log("Homepage")
    navigate('/')
  }

  return (
    <div>
        <Header/>
      <section className="bg-purple-100">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 max-sm:p-0 flex items-end justify-start relative">
            <img className='rounded-2xl' src= {feedback} alt='err'/>
            <div className="absolute inset-0 flex items-center justify-center">
            </div>
          </div>
          <form className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2  className="text-gray-900 text-3xl font-medium title-font mt-24 mb-10"><Link to='/'><i class="fa-solid fa-circle-left text-3xl hover:scale-125"></i></Link> FeedBack</h2>
          <input className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4" placeholder="Name" type="name" />
            <textarea className="bg-white rounded border border-gray-400 focus:outline-none h-32 focus:border-indigo-500 text-base px-4 py-2 mb-4 resize-none" placeholder="Message" defaultValue={""} />

            <LoginRegistrationBtns  label={"Send"}  icon={"fa-solid fa-paper-plane-top"}  onClick={handleSendFeedback}/>
            <LoginRegistrationBtns  label={"Home"}  icon={"fa-solid fa-house"} onClick={navigateToHomePage}/>


          </form>
        </div>
      </section>
      <Footer/>
    </div>
  )
}
export default FeedBackUser
