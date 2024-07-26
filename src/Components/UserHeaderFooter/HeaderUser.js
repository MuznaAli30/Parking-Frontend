// Header for user pages 
import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Headersbtns } from '../../Utilis/Buttons/HeadersButtons/Headersbtns';
import toast from 'react-hot-toast';
import { Api } from '../../Api/Api';

const HeaderUser = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const navigateToLogOutPage = (e) => {
        e.preventDefault();
        // Navigate to login page
        navigate('/Login');
    };

    const handleDeleteAccount = async () => {
        try {
            await axios.delete(`${Api}/Register/deleteUser/${id}`);
            toast.success("Account deleted successfully");
            navigate('/Login');
        } catch (error) {
            toast.error("Failed to delete account");
        }
    };

    return (
        <div>
            <header className="text-gray-300 body-font bg-[#d46e08]">
                <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center md:items-center md:text-center md:justify-center">
                    <h1 className="flex title-font font-medium items-center mb-4 md:mb-0">
                        <i className="fa-solid fa-square-parking text-white text-2xl max-sm:hidden"></i>
                        <span className="ml-3 text-xl text-white max-sm:text-xl md:text-xl">Parking Booking System</span>
                    </h1>
                    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 flex flex-wrap items-center text-xl justify-center">
                        <Link to={`/userDashboardHome/${id}`} className="mr-5 text-white cursor-pointer hover:text-gray-400 max-sm:mt-3 max-sm:mb-3 font-medium max-sm:text-xl">
                            <i className="fa-solid fa-house"></i> Home
                        </Link>
                        <Link to={`/bookSpaceUser/${id}`} className="mr-5 text-white cursor-pointer hover:text-gray-400 max-sm:mt-3 max-sm:mb-3 max-sm:text-xl">
                            <i className="fa-solid fa-clipboard-check"></i> Book Space
                        </Link>
                        <Link to={`/cancelBooking/${id}`} className="mr-5 text-white cursor-pointer hover:text-gray-400 max-sm:mt-3 max-sm:mb-3 font-medium max-sm:text-xl">
                            <i className="fa-solid fa-check"></i> Bookings
                        </Link>
                        <Link to={`/ViewAllBookings/${id}`} className="mr-5 text-white cursor-pointer hover:text-gray-400 max-sm:mt-3 max-sm:mb-3 max-sm:text-xl"><i class="fa-solid fa-clipboard-check"></i> View All Bookings </Link>

                        <Link to={`/feedBackPage/${id}`} className="mr-5 text-white cursor-pointer hover:text-gray-400 max-sm:mt-3 max-sm:mb-3 font-medium max-sm:text-xl">
                            <i className="fa-sharp fa-solid fa-comments"></i> Feedback
                        </Link>
                    </nav>
                    <div className='space-x-3'>
                        <Headersbtns label={"LogOut"} onClick={navigateToLogOutPage} />
                        <Headersbtns label={"Delete Account"} onClick={handleDeleteAccount} />
                    </div>
                </div>
            </header>
        </div>
    );
};

export default HeaderUser;
