import React, { useEffect, useState } from 'react';
import HeaderUser from '../../../Components/UserHeaderFooter/HeaderUser';
import FooterUser from '../../../Components/UserHeaderFooter/FooterUser';
import { Link, useParams} from 'react-router-dom';
import { TablesBtns } from '../../../Utilis/Buttons/TablesBtns/TablesBtns';
import axios from 'axios';
import { Api } from '../../../Api/Api';

const CancelBookingUser = () => {

  const [data, setData] = useState([]);
  const params = useParams();

  const handleCancleBookingUser = (e) => {
    console.log("Booking Cancled by User")
    e.preventDefault()
  }

  // useEffect(()=>{
  //   const fetchUserBookings = async()=>{
  //     try {
  //       const userBooking = await axios.get(`${Api}/BookSlotSpace/bookingSpaceGetByID/${params.id}`);
  //       console.log("url is correct");
  //       setBooking(userBooking.data);
  //       console.log(userBooking.data);
  //       console.log("fetched")
  //     } catch (error) {
  //       console.log("fetching error ",error)
  //     }
  //   }
  //   fetchUserBookings();
  // },[])

  useEffect(() => {
    const fetchBookingByID = async () => {
      try {
        const userBooking = await axios.get(`${Api}/BookSlotSpace/bookingSpaceGetByID/${params.id}`);
        console.log("url is correct")
        setData(userBooking.data);
        console.log(userBooking.data);
        console.log("fetched")
      } catch (error) {
        console.log("not fetching : ", error);
        
      }
    };
    fetchBookingByID();
  },[])


  return (
    <div className='bg-black'>
      <HeaderUser />
      <div className="container mx-auto p-6">
        <div className="overflow-x-auto">
        <div className="flex flex-col items-center text-center justify-center">
        <h2 class="font-bold title-font text-[#d46e08] text-3xl mt-10"><Link to={`/userDashboardHome${params.id}`}><i class="fa-solid fa-circle-left text-3xl hover:scale-125 text-[#d46e08]"></i></Link>  Cacel Your Booking</h2>
        </div>
          <table className="min-w-full divide-y divide-gray-200 mt-56 mb-56">
            <thead className="bg-[#d46e08] text-white shadow-2xl">
              <tr>
                <th className="px-6 py-3 max-sm:p-1  text-3xl font-semibold uppercase tracking-wider border border-black max-md:text-sm max-sm:text-sm ">
                  Information
                </th>
                <th className="px-6 py-3 max-sm:p-1  text-3xl font-semibold uppercase tracking-wider border border-black max-md:text-sm max-sm:text-sm">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-[#d46e08] divide-y divide-gray-500 rounded-2xl shadow-2xl">
            {data && data.map((dataa, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 border max-sm:p-1 text-xl text-white border-black  max-sm:text-sm text-center">
                  <p>space : {dataa.image}</p>
                    <p>timing : {dataa.timing}</p>
                    <p>number : {dataa.number}</p>
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
