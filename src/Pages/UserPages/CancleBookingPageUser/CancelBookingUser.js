import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import HeaderUser from '../../../Components/UserHeaderFooter/HeaderUser';
import FooterUser from '../../../Components/UserHeaderFooter/FooterUser';
import { TablesBtns,TablesBtnsPut } from '../../../Utilis/Buttons/TablesBtns/TablesBtns';
import { Api } from '../../../Api/Api';
import toast, { Toaster } from 'react-hot-toast';

const CancelBookingUser = () => {
  const [bookings, setBookings] = useState([]);
  const params = useParams();

  const handleCancelBookingUser = async (id) => {
    try {
      await axios.delete(`${Api}/BookSlotSpace/dltUserBooking/${id}`);
      setBookings((prevData) => prevData.filter((booking) => booking._id !== id));
      toast.success("Booking Canceled Successfully");
    } catch (error) {
      console.error("Error canceling booking:", error);
      toast.error("Failed to cancel booking");
    }
  };

  useEffect(() => {
    const fetchBookingByID = async () => {
      try {
        const response = await axios.get(`${Api}/BookSlotSpace/bookingSpaceGetByID/${params.id}`);
        if (Array.isArray(response.data)) {
          setBookings(response.data);
        } else {
          console.error("API response is not an array:", response.data);
          setBookings([]);
        }
      } catch (error) {
        console.error("Error fetching booking:", error);
        setBookings([]);
      }
    };
    fetchBookingByID();
  }, [params.id]);

  return (
    <div className='bg-black'>
      <HeaderUser />
      <div className="container mx-auto p-6">
        <div className="overflow-x-auto">
          <div className="flex flex-col items-center text-center justify-center">
            <h2 className="font-bold title-font text-[#d46e08] text-3xl mt-10">
              <Link to={`/userDashboardHome/${params.id}`}>
                <i className="fa-solid fa-circle-left text-3xl hover:scale-125 text-[#d46e08]"></i>
              </Link> 
              Cancel Your Booking
            </h2>
          </div>
          <table className="min-w-full divide-y divide-gray-200 mt-56 mb-56">
            <thead className="bg-[#d46e08] text-white shadow-2xl">
              <tr>
                <th className="px-6 py-3 max-sm:p-1 text-3xl font-semibold uppercase tracking-wider border border-black max-md:text-sm max-sm:text-sm">
                  Information
                </th>
                <th className="px-6 py-3 max-sm:p-1 text-3xl font-semibold uppercase tracking-wider border border-black max-md:text-sm max-sm:text-sm">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-[#d46e08] divide-y divide-gray-500 rounded-2xl shadow-2xl">
              {bookings.length > 0 ? (
                bookings.map((booking) => (
                  <tr key={booking._id}>
                    <td className="px-6 py-4 border max-sm:p-1 text-xl text-white border-black max-sm:text-sm text-center">
                      <p>Area: {booking.image}</p>
                      <p>Timing: {new Date(booking.startTimeISO).toLocaleString()} to {new Date(booking.endTimeISO).toLocaleString()}</p>
                      <p>Slot Number: {booking.slotNumber}</p>
                    </td>
                    <td className="border border-gray-500 text-center">
                      <TablesBtns label={"Cancel"} onClick={() => handleCancelBookingUser(booking._id)} />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="2" className="px-6 py-4 text-xl text-white text-center">
                    No bookings found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <FooterUser />
      <Toaster />
    </div>
  );
};

export default CancelBookingUser;