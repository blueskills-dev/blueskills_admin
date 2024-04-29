import { Route, Routes } from "react-router-dom"
import Services from "./pages/service/Services"
import Category from "./pages/category/Category"
import SubCategory from "./pages/subcategory/Subcategory"
import Bookings from "./pages/bookings/Bookings"
import Invoice from "./pages/Invoice"
import Payments from "./pages/payment/Payments"
import ServicePartner from "./pages/service-partners/ServicePartner"
import Users from "./pages/users/Users"
import UserDetails from "./pages/users/UserDetails"
import ServicePartnerDetails from "./pages/service-partners/ServicePartnerDetails"
import BookingDetails from "./pages/bookings/BookingDetails"
import PaymentDetails from "./pages/payment/PaymentDetails"
import BluskillsServicesDetails from "./pages/service/ServiceDetails"
import CreateSub from "./pages/subcategory/CreateSubcategory"
import CreateUser from "./pages/users/createUser"
import CreateService from "./pages/service/CreateService"
import CreateBooking from "./pages/bookings/CreateBookings"
import CreatePartner from "./pages/service-partners/CreatePartner"
import CreateCategory from "./pages/category/CreateCategory"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Partners from "./pages/service-partners/ServicePartner"
import { ToastContainer } from "react-toastify"


const App = () => {
  return (
    <>
    <ToastContainer/>
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/dashboard' element={<Dashboard />}/>
      <Route path="/service" element={<Services />} />
      <Route path='/category' element={<Category />}/>
      <Route path='/partners' element={<Partners />}/>
      <Route path='/subcategory' element={<SubCategory />}/>
      <Route path='/category/:id' element={<SubCategory />}/> //From category to sub-category
      <Route path='/subcategory/:id' element={<Services />}/> //From the Sub-category page to the offerings page
      <Route path='/category/:id/offerings' element={<Services />}/> //From the Category page directly to the offerings page bypassing sub-category
      <Route path='/bookings' element={<Bookings />}/>
      <Route path='/invoice' element={<Invoice />}/>
      <Route path='/payments' element={<Payments />}/>
      <Route path='/service-partners' element={<ServicePartner />}/>
      <Route path='/users' element={<Users />}/>
      <Route path='/user-details/:userId' element={<UserDetails />}/>
      <Route path='/service-partner-details/:serviceId' element={<ServicePartnerDetails />}/>
      <Route path='/booking-details/:bookingId' element={<BookingDetails />}/>
      <Route path='/payment-details/:paymentId' element={<PaymentDetails />}/>
      <Route path='/service-details/:serviceId' element={<BluskillsServicesDetails />}/>
      <Route path='/subcategory/create' element={<CreateSub />}/>
      <Route path='/users/create' element={<CreateUser />}/>
      <Route path='/bookings/create' element={<CreateBooking />}/>
      <Route path='/category/create' element={<CreateCategory />}/>
      <Route path='/partner/create' element={<CreatePartner />}/>
      <Route path='/service/create' element={<CreateService />}/>
      
  </Routes>
  </>
  )
}

export default App
