// import React, { useState } from 'react'
// import Header from '../../../Components/HomeHeaderFooter/Header'
// import Footer from '../../../Components/HomeHeaderFooter/Footer'
// import feedback from '../../../Assets/Images/feedback.webp'
// import {useNavigate} from 'react-router-dom'
// import { LoginRegistrationBtns } from '../../../Utilis/Buttons/LoginRegistrationBtns/LoginRegistrationBtns'
// import axios from 'axios';
// import { Api } from '../../../Api/Api'
// import toast, { Toaster } from 'react-hot-toast'

// const FeedBackUser=()=>{

//   const navigate = useNavigate()
//   const [Name, setName] = useState('');
//   const [Message, setMessage] = useState('');


//   const handleSendFeedback = async (e) => {
//     e.preventDefault();
//     try {
//       const newFeedBack = await axios.post(`${Api}/feedback/addFeedBack`, { Name,Message });
  
//       if (newFeedBack.status === 201) {
//         toast.success("Feedback sent successfully");
//         setName('');
//         setMessage('');
//       } else if (newFeedBack.status === 400) {
//         toast.error("You have already submitted feedback");
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error("Something went wrong while sending feedback");
//     }
//   };
  

//   const navigateToHomePage = (e) => {
//     e.preventDefault()
//     console.log("Homepage")
//     navigate('/')
//   }



//   return (
//     <div>
//         <Header/>
//       <section className="bg-purple-100">
//         <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
//           <div className="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 max-sm:p-0 flex items-end justify-start relative">
//             <img className='rounded-2xl' src= {feedback} alt='err'/>
//             <div className="absolute inset-0 flex items-center justify-center">
//             </div>
//           </div>
//           <form className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0" onSubmit={handleSendFeedback}>
//           <input name="name" className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4" placeholder="Name" type="text" value={Name} onChange={(e) => setName(e.target.value)} />
//           <textarea name="message" className="bg-white rounded border border-gray-400 focus:outline-none h-32 focus:border-indigo-500 text-base px-4 py-2 mb-4 resize-none" placeholder="Message" type="text" value={Message} onChange={(e) => setMessage(e.target.value)} defaultValue={""} />


//             <LoginRegistrationBtns  label={"Send"}  icon={"fa-solid fa-paper-plane-top"} type={'submit'}  onClick={handleSendFeedback}/>
//             <LoginRegistrationBtns  label={"Home"}  icon={"fa-solid fa-house"} onClick={navigateToHomePage}/>


//           </form>
//         </div>
//       </section>
//       <Footer/>
//       <Toaster/>
//     </div>
//   )
// }
// export default FeedBackUser
import React, { useEffect, useState } from 'react';
import { LoginRegistrationBtns } from '../../../Utilis/Buttons/LoginRegistrationBtns/LoginRegistrationBtns'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Api } from '../../../Api/Api';
import toast, { Toaster } from 'react-hot-toast'
import HeaderUser from '../../../Components/UserHeaderFooter/HeaderUser';
import FooterUser from '../../../Components/UserHeaderFooter/FooterUser';


const FeedBackUser = () => {
  const navigate = useNavigate();
  const [feedback, setFeedback] = useState([]);
  const [Name, setName] = useState('');
  const [Message, setMessage] = useState();


  const handleSendFeedback = async (e) => {
    e.preventDefault();
    try {
      const newFeedBack = await axios.post(`${Api}/feedback/addFeedBack`, { Name ,Message });
  
      if (newFeedBack.status === 201) {
        toast.success("Feedback sent successfully");
        setName('');
        setMessage('');
      } else if (newFeedBack.status === 400) {
        toast.error("You have already submitted feedback");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong while sending feedback");
    }
  };
  

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
      <HeaderUser />
      <section className="bg-black py-8 lg:py-16 antialiased">
        <div className="max-w-2xl mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg lg:text-2xl font-bold text-[#d46e08]">Discussion ({feedback.length})</h2>
          </div>
          <form className="mb-6 " onSubmit={handleSendFeedback}>
            <input name="name" className=" rounded border border-gray-400 focus:outline-none text-base px-4 py-2 mb-4 w-full" placeholder="Name" type="text" value={Name} onChange={(e) => setName(e.target.value)} />
            <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
              <label htmlFor="comment" className="sr-only">Your comment</label>
              <textarea id="comment" rows="6"
                className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                placeholder="Write a comment..." required value={Message} onChange={(e) => setMessage(e.target.value)} ></textarea>
            </div>
            <LoginRegistrationBtns  label={"Send"}  icon={"fa-solid fa-paper-plane-top"} type={'submit'}  onClick={handleSendFeedback}/>

          </form>
          {feedback.map((comment, index) => (
            <div key={index} className="mb-8">
              <p className="inline-flex items-center mr-3 text-xl text-[#d46e08] font-semibold">
                {comment.Name}
              </p>
              <p className="text-white text-lg">{comment.Message}</p>
            </div>
          ))}
        </div>
      </section>
      <FooterUser />
    </div>
  );
};

export default FeedBackUser;


