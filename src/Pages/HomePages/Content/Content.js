import React from 'react';
import { useNavigate} from 'react-router-dom';
import book from '../../../Assets/Images/book.webp'
import manage from '../../../Assets/Images/manage.webp'
import available from '../../../Assets/Images/avlb.webp'
import emailNoti from '../../../Assets/Images/emailNotification.webp'
import { Homebtns } from '../../../Utilis/Buttons/HomePagebtns/Homebtns';


const Content = () => {

  const navigate = useNavigate()


  const navigateToRegistrationPage = (e) => {
    e.preventDefault()
    console.log("registerPage")
    navigate('/register')
  }


  return (
    <div>
      <section className="bg-purple-100">
        <div className="container px-5 py-24 mx-auto ">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Easy Parking Reservation</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-xl">Discover available parking spots, reserve your space, and manage your bookings hassle-free with our smart parking solution. No more searching for parking spaces in crowded areas.</p>
          </div>
          <div className="flex flex-wrap">
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Book Your Space</h2>
              <p className="mb-10 leading-relaxed text-base">Reserve your parking spot online for your desired date and time. Say goodbye to the stress of finding parking when you arrive.</p>
              <img src={book} alt="err"/>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Manage Bookings</h2>
              <p className="leading-relaxed text-base mb-4">Easily view and manage your parking bookings. Need to cancel or modify your reservation? No problem, you can do it online with just a few clicks.</p>
              <img className='h-[22vh] w-full max-md:w-54 max-md:h-[40vh] max-sm:h-[30vh]' src={manage} alt=""/>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Real-Time Availability Check</h2>
              <p className="leading-relaxed text-base mb-4">Check the real-time availability of parking spaces before making a reservation. Get live updates on available spots to ensure a smooth parking experience.</p>
              <img src={available} alt="err"/>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Email Confirmation and Notifications</h2>
              <p className="leading-relaxed text-base mb-4">Receive email confirmations for successful parking bookings. Get timely notifications for upcoming reservations.</p>
              <img src={emailNoti} alt="err" />
            </div>
          </div>
          <div className='flex justify-center'>
            
        <Homebtns label={"Register Now"} onClick={navigateToRegistrationPage}/>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Content;
