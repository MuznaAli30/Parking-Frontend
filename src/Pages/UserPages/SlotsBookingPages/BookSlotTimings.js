import React, { useContext, useState } from 'react';
import HeaderUser from '../../../Components/UserHeaderFooter/HeaderUser';
import FooterUser from '../../../Components/UserHeaderFooter/FooterUser';
import { Link, useNavigate, useParams } from 'react-router-dom';
import bookSlots from '../../../Assets/Images/avlb.webp';
import { LoginRegistrationBtns } from '../../../Utilis/Buttons/LoginRegistrationBtns/LoginRegistrationBtns';
import toast, { Toaster } from 'react-hot-toast';
import { DataContext } from '../../../ReactContext/Context';

const BookSlotTimings = () => {
  const navigate = useNavigate();
  const params = useParams();

  const { newTimings } = useContext(DataContext);

  const [formData, setFormData] = useState({
    date: '',
    time: '',
    duration: '',
  });

  const handleBookSotTimings = (e) => {
    e.preventDefault();
    console.log('Slot booked');
    newTimings(formData);
    toast.success('Timings Booked');

    setTimeout(() => {
      navigate(`/bookSlotsNumber/${params.id}`);
    }, 3000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const durations = [];
  for (let d = 1; d <= 4; d++) {
    durations.push({ Duration: `${d} Hours` });
  }

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className='bg-black'>
      <HeaderUser />
      <section>
        <div className='container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap'>
          <div className='lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative'>
            <img className='rounded-2xl' src={bookSlots} alt='err' />
            <div className='absolute inset-0 flex items-center justify-center'></div>
          </div>
          <form
            className='lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0'
            onSubmit={handleBookSotTimings}
          >
            <h2 className='text-[#d46e08] text-3xl font-medium title-font mt-24 mb-10'>
              <Link to={`/bookSpaceUser/${params.id}`}>
                <i className='text-[#d46e08] fa-solid fa-circle-left text-3xl hover:scale-125'></i>
              </Link>{' '}
              Book Slot Timing
            </h2>
            <label className='font-bold text-xl text-[#d46e08] mb-2'>Date</label>
            <input
              className='bg-white cursor-pointer rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4'
              type='date'
              placeholder='date'
              name='date'
              value={formData.date}
              onChange={handleChange}
              min={today} // Set min attribute to today's date
            />
            <label className='font-bold text-xl text-[#d46e08] mb-2'>Timings</label>
            <input
              className='bg-white cursor-pointer rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4'
              type='time'
              placeholder='hours'
              name='time'
              value={formData.time}
              onChange={handleChange}
            />
            <label className='font-bold text-xl text-[#d46e08] mb-2'>Duration</label>
            <select
              className='bg-white cursor-pointer rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4'
              type='hour'
              placeholder='Duration'
              name='duration'
              value={formData.duration}
              onChange={handleChange}
            >
              {durations.map((duration, index) => (
                <option key={index} value={duration.Duration}>
                  {' '}
                  {duration.Duration}{' '}
                </option>
              ))}
            </select>

            <LoginRegistrationBtns label={'Book Slot'} icon={'fa-solid fa-circle-check'} onClick={handleBookSotTimings} />
          </form>
        </div>
      </section>
      <FooterUser />
      <Toaster />
    </div>
  );
};
export default BookSlotTimings;
