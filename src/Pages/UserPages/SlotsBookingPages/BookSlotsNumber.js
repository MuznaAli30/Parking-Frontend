import React, { useState, useContext } from 'react';
import HeaderUser from '../../../Components/UserHeaderFooter/HeaderUser';
import FooterUser from '../../../Components/UserHeaderFooter/FooterUser';
import ParkingSlotNum from '../../../Assets/Images/parkingSlotNum.webp';
import { Link, useParams } from 'react-router-dom';
import { LoginRegistrationBtns } from '../../../Utilis/Buttons/LoginRegistrationBtns/LoginRegistrationBtns';
import toast, { Toaster } from 'react-hot-toast';
import { DataContext } from '../../../ReactContext/Context';
import axios from 'axios';
import { Api } from '../../../Api/Api';

const BookSlotsNumber = () => {
  const { slotNumber } = useContext(DataContext);
  const { image, newSlotNumber, timing } = useContext(DataContext);
  const params = useParams();
  const [userID, setUserID] = useState(params.id);

  const slots = [
    { id: 1, name: "Slot One" },
    { id: 2, name: "Slot Two" },
    { id: 3, name: "Slot Three" },
    { id: 4, name: "Slot Four" },
    { id: 5, name: "Slot Five" },
    { id: 6, name: "Slot Six" },
    { id: 7, name: "Slot Seven" },
    { id: 8, name: "Slot Eight" },
    { id: 9, name: "Slot Nine" },
    { id: 10, name: "Slot Ten" },
  ];

  const handleSelectSlot = (i) => {
    newSlotNumber(i.id);
    const selectedSlot = document.querySelector('.slots');
    if (selectedSlot) {
      selectedSlot.classList.remove('slots');
      selectedSlot.style.borderColor = 'red';
      selectedSlot.style.boxShadow = '2xl';
    }
  }

  const handleBookSlot = async (e) => {
    e.preventDefault();
    await submitRequest(image, timing, slotNumber, userID);
  };

  //
//   function convertToUnix(obj) {
//     // Extract the date and time components
//     const [year, month, day] = obj.date.split('-').map(Number);
//     const [hours, minutes] = obj.time.split(':').map(Number);
    
//     // Create a new Date object with the given date and time
//     const localDate = new Date(year, month - 1, day, hours, minutes);
    
//     // Extract the duration in hours from the duration string
//     const durationHours = parseInt(obj.duration);

//     // Calculate the start time in Unix timestamp (in milliseconds)
//     const startTimeUnix = localDate.getTime();

//     // Calculate the end time by adding duration hours
//     const endTimeUnix = startTimeUnix + (durationHours * 60 * 60 * 1000);

//     return {
//         startTimeUnix: Math.floor(startTimeUnix / 1000), // Convert milliseconds to seconds
//         endTimeUnix: Math.floor(endTimeUnix / 1000) // Convert milliseconds to seconds
//     };
// }


//   const submitRequest = async (image, timing, slotNumber, userID) => {
//     try {
//         const unixTiming = convertToUnix(timing);

//         console.log("Original Timing:", timing);
//         console.log("Converted Unix Timing:", unixTiming);

//         const slotBookedRes = await axios.post(`${Api}/BookSlotSpace/BookSpace`, {
//             image,
//             timing: unixTiming,
//             slotNumber,
//             userID
//         });

//         if (slotBookedRes.status === 200) {
//             toast.success(`Slot is booked`);
//         } else if (slotBookedRes.status === 400) {
//             toast.error("Slot is already booked by someone");
//         }
//     } catch (error) {
//         console.error(error);
//         toast.error("Slot is already booked by someone");
//     }
// };

//iso
function convertToISO8601(obj) {
  // Extract the date and time components
  const [year, month, day] = obj.date.split('-').map(Number);
  const [hours, minutes] = obj.time.split(':').map(Number);
  
  // Create a new Date object with the given date and time
  const localDate = new Date(year, month - 1, day, hours, minutes);
  
  // Format the start time as ISO 8601 string
  const startTimeISO = localDate.toISOString();
  
  // Extract the duration in hours from the duration string
  const durationHours = parseInt(obj.duration);
  
  // Calculate the end time by adding duration hours
  const endTime = new Date(localDate.getTime() + (durationHours * 60 * 60 * 1000));
  const endTimeISO = endTime.toISOString();

  return {
      startTimeISO,
      endTimeISO
  };
}



//iso submit
const submitRequest = async (image, timing, slotNumber, userID) => {
  try {
      const isoTiming = convertToISO8601(timing);

      console.log("Original Timing:", timing);
      console.log("Converted ISO 8601 Timing:", isoTiming);

      const slotBookedRes = await axios.post(`${Api}/BookSlotSpace/BookSpace`, {
          image,
          timing: isoTiming,
          slotNumber,
          userID
      });

      if (slotBookedRes.status === 200) {
          toast.success(`Slot is booked`);
      } else if (slotBookedRes.status === 400) {
          toast.error("Slot is already booked by someone");
      }
  } catch (error) {
      console.error(error);
      toast.error("Slot is already booked by someone");
  }
};




  return (
    <div className='bg-black'>
      <HeaderUser />
      <div className="flex flex-col items-center text-center justify-center">
        <h2 className="font-bold title-font text-[#d46e08] text-3xl mt-10">
          <Link to={`/bookSlotTimings/${params.id}`}>
          <i className="fa-solid fa-circle-left text-3xl hover:scale-125"></i> 
          </Link> 
           Select Slot Number
        </h2>
      </div>
      <div className="flex flex-wrap items-center text-center justify-center mt-56 mb-56">
        {slots.map((slot) => (
          <div key={slot.id} className="px-8 py-6">
            <h2 className="text-lg sm:text-xl text-[#d46e08] font-medium title-font mb-2">{slot.name}</h2>
            <Link>
              <img onClick={() => handleSelectSlot(slot)} className={`rounded-2xl cursor-pointer hover:shadow-2xl hover:scale-105 ${slotNumber === slot.id ? 'selected' : ''}`} src={ParkingSlotNum} alt="" style={{ border: '1px solid transparent' }} />
            </Link>
          </div>
        ))}
      </div>
      <div className='flex items-center text-center justify-center mb-10'>
        <LoginRegistrationBtns label={"Book Slot"} icon={"fa-solid fa-circle-check"} onClick={handleBookSlot} />
      </div>
      <FooterUser />
      <Toaster />
    </div>
  );
}

export default BookSlotsNumber;
