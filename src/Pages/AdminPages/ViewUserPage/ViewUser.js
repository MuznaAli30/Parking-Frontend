import React from 'react'
import { useEffect, useState } from 'react'
import HeaderAdmin from '../../../Components/AdminHeaderOnly/HeaderAdmin'
import FooterUser from '../../../Components/UserHeaderFooter/FooterUser'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { Api } from '../../../Api/Api'

const ViewUser=()=>{
  const [data, setData] = useState([]);

    useEffect(() => {
      const fetchAllUsers = async () => {
        try {
          const userName = await axios.get(`${Api}/Register/getUsers`);
          console.log("url is correct")
          setData(userName.data);
          console.log(userName.data);
          console.log("fetched")
        } catch (error) {
          console.log("not fetching : ", error);
          
        }
      };
      fetchAllUsers();
    },[])
    

   

  return (
    <div>
      <div className='bg-black'>
      <HeaderAdmin/>
      <div className="container mx-auto p-6">
        <div className="overflow-x-auto">
        <div className="flex flex-col items-center text-center justify-center">
        <h2 class="font-bold title-font text-[#d46e08]  text-3xl mt-10"><Link to='/adminDashboardHome'><i class="fa-solid fa-circle-left text-3xl hover:scale-125"></i> </Link>User's Information</h2>
        </div>
          <table className="min-w-full divide-y divide-gray-200 mt-56 mb-56">
            <thead className="bg-[#d46e08] text-white shadow-2xl">
              <tr>
                <th className="px-6 py-3 max-sm:p-1  text-3xl font-semibold uppercase tracking-wider border border-black max-md:text-sm max-sm:text-sm ">
                  User
                </th>
                <th className="px-6 py-3 max-sm:p-1  text-3xl font-semibold uppercase tracking-wider border border-black max-md:text-sm max-sm:text-sm">
                  Information
                </th>
              </tr>
            </thead>
            <tbody className="bg-[#d46e08]  divide-y divide-gray-500 rounded-2xl shadow-2xl">
              {data.map((userName, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 border max-sm:p-1 text-xl text-white border-black  max-sm:text-sm text-center">
                    {userName.Name}
                  </td>
                  <td className="px-6 py-4 border max-sm:p-1 text-xl text-white border-black  max-sm:text-sm text-center">
                    <p>Email : {userName.Email}</p>
                    <p>Contact : {userName.Contact}</p>
                    </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <FooterUser/>
    </div>
    </div>
  )
}
export default ViewUser
