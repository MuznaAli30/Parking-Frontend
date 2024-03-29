import React from 'react'
import HeaderAdmin from '../../../Components/AdminHeaderOnly/HeaderAdmin'
import FooterUser from '../../../Components/UserHeaderFooter/FooterUser'
import { Link } from 'react-router-dom'
import { TablesBtns } from '../../../Utilis/Buttons/TablesBtns/TablesBtns';


export default function ReplyReviews() {

  const handleReplyAdmin = (e) => {
    console.log("Replying")
    e.preventDefault()
  }
    const feebbacks = [
        {User : "user1", Feedback: "good"},
        {User : "user1", Feedback: "bad"},
        {User : "user1", Feedback: "good"}

    ]


  return (
    <div>
      <div className='bg-purple-100'>
      <HeaderAdmin/>
      <div className="container mx-auto p-6">
        <div className="overflow-x-auto">
        <div className="flex flex-col items-center text-center justify-center">
        <h2 class="font-bold title-font text-black text-3xl mt-10"><Link to='/adminDashboardHome'><i class="fa-solid fa-circle-left text-3xl hover:scale-125"></i></Link> Reply To Feedbacks</h2>
        </div>
          <table className="min-w-full divide-y divide-gray-200 mt-56 mb-56">
            <thead className="bg-purple-600 text-white shadow-2xl">
              <tr>
                <th className="px-6 py-3 max-sm:p-1  text-3xl font-semibold uppercase tracking-wider border border-black max-md:text-sm max-sm:text-sm ">
                  User
                </th>
                <th className="px-6 py-3 max-sm:p-1  text-3xl font-semibold uppercase tracking-wider border border-black max-md:text-sm max-sm:text-sm">
                  Feedback
                </th>
                <th className="px-6 py-3 max-sm:p-1  text-3xl font-semibold uppercase tracking-wider border border-black max-md:text-sm max-sm:text-sm">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-[#8683e6] divide-y divide-gray-500 rounded-2xl shadow-2xl">
              {feebbacks.map((feedback, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 border max-sm:p-1 text-xl text-white border-black  max-sm:text-sm text-center">
                    {feedback.User}
                  </td>
                  <td className="px-6 py-4 border max-sm:p-1 text-xl text-white border-black  max-sm:text-sm text-center">
                    {feedback.Feedback}
                    </td>
                  <td className="border border-gray-500 text-center">
                  <TablesBtns  label={"Reply"} onClick={handleReplyAdmin}/>

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
