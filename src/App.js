// App.js
import Hero from './Pages/HomePages/HeroPart/Hero';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './Pages/HomePages/Contact/Contact';
import Login from './Pages/LoginPage/Login'
import Register from './Pages/RegisterPage/Register';
import UserDashBoardHome from './Pages/UserPages/UserHomePage/UserDashBoardHome';
import BookSpaceUser from './Pages/UserPages/SlotsBookingPages/BookSpaceUser';
import BookSlotTimings from './Pages/UserPages/SlotsBookingPages/BookSlotTimings';
import BookSlotsNumber from './Pages/UserPages/SlotsBookingPages/BookSlotsNumber';
import CancelBookingUser from './Pages/UserPages/CancleBookingPageUser/CancelBookingUser';
import FeedBackPage from './Pages/HomePages/FeedBackPages/FeedBackPage';
import ViewFeedbackReviews from './Pages/HomePages/FeedBackPages/ViewFeedbackReviews';
import AdminDashboardHome from './Pages/AdminPages/AdminHome/AdminDashboardHome';
import CancelBookingAdmin from './Pages/AdminPages/CancelBookingAdminPage/CancelBookingAdmin';
import ViewUser from './Pages/AdminPages/ViewUserPage/ViewUser';
import ReplyReviews from './Pages/AdminPages/ReplyReviewsPage/ReplyReviews';
import { DataContext, DataProvider } from "./context"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <DataProvider>
          <Routes>

            <Route path="/" element={<Hero />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/userDashboardHome/:id" element={<UserDashBoardHome />} />
            <Route path="/bookSpaceUser" element={<BookSpaceUser />} />
            <Route path="/bookSlotTimings" element={<BookSlotTimings />} />
            <Route path='/bookSlotsNumber' element={<BookSlotsNumber />} />
            <Route path='/cancelBooking' element={<CancelBookingUser />} />
            <Route path='/feedBackPage' element={<FeedBackPage />} />
            <Route path='/viewFeedbackReviews' element={<ViewFeedbackReviews />} />
            <Route path='/adminDashboardHome' element={<AdminDashboardHome />} />
            <Route path='/cancleBookingAdmin' element={<CancelBookingAdmin />} />
            <Route path='/viewUser' element={<ViewUser />} />
            <Route path='/replyReviews' element={<ReplyReviews />} />


          </Routes>
        </DataProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
