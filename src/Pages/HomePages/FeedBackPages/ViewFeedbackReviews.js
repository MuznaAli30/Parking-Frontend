import React from 'react'
import Header from '../../../Components/HomeHeaderFooter/Header'
import Footer from '../../../Components/HomeHeaderFooter/Footer'
import FeedBackReview from '../../../Assets/Images/review.webp'
import { Link, useNavigate } from 'react-router-dom'
import { LoginRegistrationBtns } from '../../../Utilis/Buttons/LoginRegistrationBtns/LoginRegistrationBtns'

const ViewFeedbackReviews=()=>{

  const navigate = useNavigate()


  const navigateToHomePage = (e) => {
    e.preventDefault()
    console.log("Homepage")
    navigate('/')
  }

  const reviews = [
    {Name: 'abc1', msg: 'good', },
    {Name: 'abc2', msg: 'bad', },
    {Name: 'abc3', msg: 'good', }
  ];

  return (
    <div>
      <Header/>
      <section className="bg-purple-100">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 max-sm:p-0 flex items-end justify-start relative">
            <img className='rounded-2xl lg:flex-col max-sm:w-full' src= {FeedBackReview}/>
            <div className="absolute inset-0 flex items-center justify-center">
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2  className="text-gray-900 text-3xl font-medium title-font mt-24 mb-10"> Reviews Of Our Website</h2>
          <table className="min-w-full divide-y divide-gray-200 mt-16 mb-16">
            <thead className="bg-purple-600 text-white shadow-2xl">
              <tr>
                <th className="px-6 py-3 max-sm:p-1  text-3xl font-semibold uppercase tracking-wider border border-black max-md:text-sm max-sm:text-sm ">
                Name
                </th>
                <th className="px-6 py-3 max-sm:p-1  text-3xl font-semibold uppercase tracking-wider border border-black max-md:text-sm max-sm:text-sm">
                  Review
                </th>
              </tr>
            </thead>
            <tbody className="bg-[#8683e6] divide-y divide-gray-500 rounded-2xl shadow-2xl">
              {reviews.map((review, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 border max-sm:p-1 text-xl text-white border-black  max-sm:text-sm text-center">
                    {review.Name}
                  </td>
                  <td className="px-6 py-4 border max-sm:p-1 text-xl text-white border-black  max-sm:text-sm text-center">
                    {review.msg}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <LoginRegistrationBtns  label={"Home"}  icon={"fa-solid fa-house"} onClick={navigateToHomePage}/>

          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}
export default ViewFeedbackReviews