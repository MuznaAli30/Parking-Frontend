import React from 'react';
import HeaderUser from '../../../Components/UserHeaderFooter/HeaderUser';
import FooterUser from '../../../Components/UserHeaderFooter/FooterUser';
import { Link, useNavigate } from 'react-router-dom';
import bookSlots from '../../../Assets/Images/avlb.webp'
import { LoginRegistrationBtns } from '../../../Utilis/Buttons/LoginRegistrationBtns/LoginRegistrationBtns';

const BookSlotTimings = () => {
  const navigate = useNavigate()

  const handleBookSot = (e) => {
    e.preventDefault()
    console.log("Slot booked")
    navigate('/bookSlotsNumber')
  } 

// const timings = [];

// for (let hour = 1; hour <= 12; hour++) {
//   timings.push({ Time: `${hour} Am` });
// }

// for (let hour = 1; hour <= 12; hour++) {
//   timings.push({ Time: `${hour} Pm` });
// }

const durations =[]
for(let d = 1; d <= 4; d++){
  durations.push({Duration: `${d} Hours`})
}



  return (
    <div className='bg-purple-100'>
      <HeaderUser />
      <section>
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <img className='rounded-2xl' src= {bookSlots} alt='err'/>
            <div className="absolute inset-0 flex items-center justify-center">
            </div>
          </div>
          <form className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2  className="text-gray-900 text-3xl font-medium title-font mt-24 mb-10"><Link to='/bookSpaceUser'><i class="fa-solid fa-circle-left text-3xl hover:scale-125"></i></Link> Book Slot Timing</h2>
            <label className='font-bold text-xl'>Date</label><input className='bg-white cursor-pointer rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4' type="date" placeholder="date" />
            <label className='font-bold text-xl'>Timings</label>
            
            <input className='bg-white cursor-pointer rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4' type="time" placeholder="hours">
              {/* {timings.map((timing, index) => (
              <option key={index} value={timing.Time}> {timing.Time}</option>
              ))} */}
            </input>
          <label className='font-bold text-xl'>Duration</label>
          <select className='bg-white cursor-pointer rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4' type="hour" placeholder="Duration">
            {durations.map((duration, index) => (
              <option key={index} value={duration.Duration} > {duration.Duration} </option>
            ))}
          </select>

            <LoginRegistrationBtns  label={"Book Slot"}  icon={"fa-solid fa-circle-check"} onClick={handleBookSot}/>
          
          </form>
        </div>
      </section>
      <FooterUser />
    </div>
  );
};
export default BookSlotTimings;