import React from 'react'
import HeaderAdmin from '../../../Components/AdminHeaderOnly/HeaderAdmin'
import FooterUser from '../../../Components/UserHeaderFooter/FooterUser'
import { Link } from 'react-router-dom'
import { TablesBtns } from '../../../Utilis/Buttons/TablesBtns/TablesBtns';


const CancelBookingAdmin=()=>{

  const handleCancleBookingAdmin = (e) => {
    console.log("Booking Cancled by Admin")
    e.preventDefault()
  }


    const cancleBooking = [
        {User : "user1", Information: "2 hours, 9 PM "},
        {User : "user1", Information: "3 hours, 5 PM "},
        {User : "user1", Information: "4 hours, 10 am"}

    ]
  return (
    <div className='bg-purple-100'>
      <HeaderAdmin/>
      <div className="container mx-auto p-6">
        <div className="overflow-x-auto">
        <div className="flex flex-col items-center text-center justify-center">
        <h2 class="font-bold title-font text-black text-3xl mt-10"><Link to='/adminDashboardHome'><i class="fa-solid fa-circle-left text-3xl hover:scale-125"></i></Link> Cancle Booking</h2>
        </div>
          <table className="min-w-full divide-y divide-gray-200 mt-56 mb-56">
            <thead className="bg-purple-600 text-white shadow-2xl">
              <tr>
                <th className="px-6 py-3 max-sm:p-1  text-3xl font-semibold uppercase tracking-wider border border-black max-md:text-sm max-sm:text-sm ">
                  User
                </th>
                <th className="px-6 py-3 max-sm:p-1  text-3xl font-semibold uppercase tracking-wider border border-black max-md:text-sm max-sm:text-sm">
                  Information
                </th>
                <th className="px-6 py-3 max-sm:p-1  text-3xl font-semibold uppercase tracking-wider border border-black max-md:text-sm max-sm:text-sm">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-[#8683e6] divide-y divide-gray-500 rounded-2xl shadow-2xl">
              {cancleBooking.map((cancel, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 border max-sm:p-1 text-xl text-white border-black  max-sm:text-sm text-center">
                    {cancel.User}
                  </td>
                  <td className="px-6 py-4 border max-sm:p-1 text-xl text-white border-black  max-sm:text-sm text-center">
                    {cancel.Information}
                    </td>
                  <td className="border border-gray-500 text-center">
                  <TablesBtns  label={"Cancle"} onClick={handleCancleBookingAdmin}/>

                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <FooterUser/>
    </div>
  )
}
export default CancelBookingAdmin