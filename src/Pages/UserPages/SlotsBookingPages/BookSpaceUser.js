import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import FooterUser from '../../../Components/UserHeaderFooter/FooterUser'
import HeaderUser from '../../../Components/UserHeaderFooter/HeaderUser'
import area1 from '../../../Assets/Images/book.webp'
import area2 from '../../../Assets/Images/homeimg3.webp'
import area3 from '../../../Assets/Images/avlb.webp'
import toast, { Toaster } from 'react-hot-toast';
import { SpaceBookingbtns } from '../../../Utilis/Buttons/SpaceBookingButtons/SpaceBookingbtns';
import { DataContext } from '../../../context';

const BookSpaceUser = () => {
  const navigate = useNavigate()
  const { updateImage } = useContext(DataContext);

  const navigateToBookingSlotTimings = (ImageName) => {
    console.log("To Booking Timings")
    updateImage(ImageName);
    toast.success("Space Is Booked")

    setTimeout(() => {
      navigate("/bookSlotTimings")
    }, 3000);
  }

  return (
    <div className='bg-purple-100'>
      <HeaderUser />
      <div className="flex flex-col items-center text-center justify-center">
        <h2 class="font-bold title-font text-black text-3xl mt-10"><Link to='/userDashboardHome'><i class="fa-solid fa-circle-left text-3xl hover:scale-125"></i></Link>  Select Your Parking Area</h2>
      </div>
      <div className="flex flex-wrap justify-center mt-16 mb-72 mx-auto">
        <div className="xl:w-1/3 lg:w-1/2 md:w-full px-4 py-6 border-l-2 border-gray-200 border-opacity-60">
          <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">First Area</h2>

          <SpaceBookingbtns src={area1} onClick={() => navigateToBookingSlotTimings("image-1")} />
        </div>
        <div className="xl:w-1/3 lg:w-1/2 md:w-full px-4 py-6 border-l-2 border-gray-200 border-opacity-60">
          <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Second Area</h2>

          <SpaceBookingbtns src={area2} onClick={() => navigateToBookingSlotTimings("image-2")} />

        </div>
        <div className="xl:w-1/3 lg:w-1/2 md:w-full px-4 py-6 border-l-2 border-gray-200 border-opacity-60">
          <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Third Area</h2>

          <SpaceBookingbtns src={area3} onClick={() => navigateToBookingSlotTimings("image-3")} />

        </div>
      </div>

      <FooterUser />
      <Toaster />
    </div>
  )
}
export default BookSpaceUser