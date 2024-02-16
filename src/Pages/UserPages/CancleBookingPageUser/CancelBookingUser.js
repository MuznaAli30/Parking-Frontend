import React from 'react';
import HeaderUser from '../../../Components/UserHeaderFooter/HeaderUser';
import FooterUser from '../../../Components/UserHeaderFooter/FooterUser';
import { Link} from 'react-router-dom';
import { TablesBtns } from '../../../Utilis/Buttons/TablesBtns/TablesBtns';

const CancelBookingUser = () => {

  const handleCancleBookingUser = (e) => {
    console.log("Booking Cancled by User")
    e.preventDefault()
  }


  const bookings = [
    {date: '2024-02-14', duration: '2 hours', Time: ' 9 PM ' },
    {date: '2024-02-15', duration: '3 hours', Time: ' 5 PM ' },
    {date: '2024-02-16', duration: '4 hours', Time: ' 10 am' }
  ];

  return (
    <div className='bg-purple-100'>
      <HeaderUser />
      <div className="container mx-auto p-6">
        <div className="overflow-x-auto">
        <div className="flex flex-col items-center text-center justify-center">
        <h2 class="font-bold title-font text-black text-3xl mt-10"><Link to='/userDashboardHome'><i class="fa-solid fa-circle-left text-3xl hover:scale-125"></i></Link>  Cacel Your Booking</h2>
        </div>
          <table className="min-w-full divide-y divide-gray-200 mt-56 mb-56">
            <thead className="bg-purple-600 text-white shadow-2xl">
              <tr>
                <th className="px-6 py-3 max-sm:p-1  text-3xl font-semibold uppercase tracking-wider border border-black max-md:text-sm max-sm:text-sm ">
                  Date
                </th>
                <th className="px-6 py-3 max-sm:p-1  text-3xl font-semibold uppercase tracking-wider border border-black max-md:text-sm max-sm:text-sm">
                  Duration
                </th>
                <th className="px-6 py-3 max-sm:p-1  text-3xl font-semibold uppercase tracking-wider border border-black max-md:text-sm max-sm:text-sm">
                  Time
                </th>
                <th className="px-6 py-3 max-sm:p-1  text-3xl font-semibold uppercase tracking-wider border border-black max-md:text-sm max-sm:text-sm">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-[#8683e6] divide-y divide-gray-500 rounded-2xl shadow-2xl">
              {bookings.map((booking, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 border max-sm:p-1 text-xl text-white border-black  max-sm:text-sm text-center">
                    {booking.date}
                  </td>
                  <td className="px-6 py-4 border max-sm:p-1 text-xl text-white border-black  max-sm:text-sm text-center">
                    {booking.duration}
                  </td>
                  <td className="px-6 py-4 border max-sm:p-1 text-white text-xl border-black  max-sm:text-sm text-center">
                    {booking.Time}
                  </td>
                  <td className="border border-gray-500 text-center">
                    
                    <TablesBtns  label={"Cancle"} onClick={handleCancleBookingUser}/>

                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <FooterUser />
    </div>
  );
};

export default CancelBookingUser;
