import React, { useState, useContext } from 'react'
import HeaderUser from '../../../Components/UserHeaderFooter/HeaderUser'
import FooterUser from '../../../Components/UserHeaderFooter/FooterUser'
import ParkingSlotNum from '../../../Assets/Images/parkingSlotNum.webp'
import { Link } from 'react-router-dom'
import { LoginRegistrationBtns } from '../../../Utilis/Buttons/LoginRegistrationBtns/LoginRegistrationBtns';
import toast, { Toaster } from 'react-hot-toast'
import { DataContext } from '../../../context';
import axios from 'axios';

const BookSlotsNumber = () => {
  const { image, updateNumber, timing, number } = useContext(DataContext);

  // eslint-disable-next-line no-unused-expressions
  const [selected, setSelected] = useState();

  const slots = [
    { id: 1, name: "Slot One" },
    { id: 2, name: "Slot Two" },
    { id: 3, name: "Slot Three" },
    { id: 4, name: "Slot Four" },

  ];


  const handleSelectSlot = (i) => {
    // Deselect previously selected slot
    updateNumber(i.id)
    const selectedSlot = document.querySelector('.slots');
    if (selectedSlot) {
      selectedSlot.classList.remove('slots');
      selectedSlot.style.borderColor = 'transparent';
      selectedSlot.style.boxShadow = 'none';
    }

    // Select the current slot
    // e.currentTarget.classList.add('slots');
    // e.currentTarget.style.borderColor = 'salmon';
    // e.currentTarget.style.boxShadow = '0 0 5px 2px salmon';
  }


  const handleBookSot = async (e) => {
    e.preventDefault()
    console.log("image frm the context: ", image, timing, number);
    await submitRequest(image, timing, number)

  }

  const submitRequest = async (image, timing, number) => {
    try {
      //todo: correct api url
      const slotBookedRes = await axios.post(`${"Api"}/Submit/User`, { image, timing, number });
      //todo: correct below success failure thing
      if (slotBookedRes.status === 200) {
        toast.success(`Slot is booked`);
        console.log("sdsdsdsds");
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong")
    }
  }


  return (
    <div className='bg-purple-100'>
      <HeaderUser />
      <div className="flex flex-col items-center text-center justify-center">
        <h2 class="font-bold title-font text-black text-3xl mt-10"><Link to='/bookSlotTimings'><i class="fa-solid fa-circle-left text-3xl hover:scale-125"></i></Link>  Select Slot Number</h2>
      </div>
      <div className="flex flex-wrap items-center text-center justify-center mt-56 mb-56">
        {slots.map((i, slot) => (
          <div key={slot.id} className="px-8 py-6">
            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">{slot.name}</h2>
            <Link><img onClick={() => handleSelectSlot(i)} className={`rounded-2xl cursor-pointer hover:shadow-2xl hover:scale-105 ${selected ? 'selected' : ''}`} src={ParkingSlotNum} alt="" style={{ border: '1px solid transparent' }} />
            </Link>
          </div>
        ))}
      </div>
      <div className='flex items-center text-center justify-center mb-10'>
        <LoginRegistrationBtns label={"Book Slot"} icon={"fa-solid fa-circle-check"} onClick={handleBookSot} />
      </div>
      <FooterUser />
      <Toaster />
    </div>
  )
}
export default BookSlotsNumber
