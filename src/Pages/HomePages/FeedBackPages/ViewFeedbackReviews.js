import React, { useEffect, useState } from 'react';
import Header from '../../../Components/HomeHeaderFooter/Header';
import Footer from '../../../Components/HomeHeaderFooter/Footer';
import { LoginRegistrationBtns } from '../../../Utilis/Buttons/LoginRegistrationBtns/LoginRegistrationBtns'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Api } from '../../../Api/Api';
import toast, { Toaster } from 'react-hot-toast'


const ViewFeedbackReviews = () => {
  const navigate = useNavigate();
  const [feedback, setFeedback] = useState([]);
  const [Message, setMessage] = useState();

  const navigateToHomePage = (e) => {
    e.preventDefault();
    console.log("Homepage");
    navigate('/');
  };

  // const handleSendFeedback = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const newFeedBack = await axios.post(`${Api}/feedback/addFeedBack`, { Name, Email, Message });
  
  //     if (newFeedBack.status === 201) {
  //       toast.success("Feedback sent successfully");
  //       setName('');
  //       setEmail('');
  //       setMessage('');
  //     } else if (newFeedBack.status === 400) {
  //       toast.error("You have already submitted feedback");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     toast.error("Something went wrong while sending feedback");
  //   }
  // };
  

  useEffect(() => {
    const fetchUserFeedback = async () => {
      try {
        const userFeedback = await axios.get(`${Api}/feedback/getFeedback`);
        console.log("url is correct");
        setFeedback(userFeedback.data);
        console.log(userFeedback.data);
        console.log("fetched");
      } catch (error) {
        console.log("fetching error ", error);
      }
    };
    fetchUserFeedback();
  }, []);

  return (
    <div>
      <Header />
      <section className="bg-black py-8 lg:py-16 antialiased">
        <div className="max-w-2xl mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg lg:text-2xl font-bold text-[#d46e08]">Discussion ({feedback.length})</h2>
          </div>
          
          {feedback.map((comment, index) => (
            <div key={index} className="mb-8">
              <p className="inline-flex text-xl items-center mr-3 text-[#d46e08] dark:text-white font-semibold">
                {comment.Name}
              </p>
              <p className="text-white text-lg">{comment.Message}</p>
            </div>
          ))}
          <LoginRegistrationBtns  label={"Home"}  icon={"fa-solid fa-house"} onClick={navigateToHomePage}/>

        </div>
        
      </section>
      <Footer />
    </div>
  );
};

export default ViewFeedbackReviews;


