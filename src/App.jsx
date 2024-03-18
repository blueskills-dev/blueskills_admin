import { Route, Routes } from "react-router-dom"
import BlueskillsServices from "./pages/blueskills-service/BlueskillsServices"
import Category from "./pages/category/Category"
import SubCategory from "./pages/subcategory/Subcategory"
import Offerings from "./pages/blueskills-service/BlueskillsServices"
import Bookings from "./pages/bookings/Bookings"
import Invoice from "./pages/Invoice"
import Payments from "./pages/payment/Payments"
import ServiceGallery from "./pages/service-gallery/ServiceGallery"
import ServicePartner from "./pages/service-partners/ServicePartner"
import Users from "./pages/users/Users"
import UserDetails from "./pages/users/UserDetails"
import ServicePartnerDetails from "./pages/service-partners/ServicePartnerDetails"
import ServiceGalleryDetails from "./pages/service-gallery/ServiceGalleryDetails"
import BookingDetails from "./pages/bookings/BookingDetails"
import PaymentDetails from "./pages/payment/PaymentDetails"
import BluskillsServicesDetails from "./pages/blueskills-service/BluskillsServicesDetails"
import CreateSub from "./pages/subcategory/CreateSubcategory"
import CreateUser from "./pages/users/createUser"
import CreateService from "./pages/blueskills-service/CreateService"
import CreateBooking from "./pages/bookings/CreateBookings"
import CreateGallery from "./pages/service-gallery/CreateGallery"
import CreatePartner from "./pages/service-partners/CreatePartner"
import CreateCategory from "./pages/category/CreateCategory"


const App = () => {
  return (
    <Routes>
      <Route path="blueskills-service" element={<BlueskillsServices />} />
      <Route path='/category' element={<Category/>}/>
      <Route path='/subcategory' element={<SubCategory/>}/>
      <Route path='/category/:id' element={<SubCategory/>}/> //From category to sub-category
      <Route path='/subcategory/:id' element={<Offerings/>}/> //From the Sub-category page to the offerings page
      <Route path='/category/:id/offerings' element={<Offerings/>}/> //From the Category page directly to the offerings page bypassing sub-category
      <Route path='/bookings' element={<Bookings/>}/>
      <Route path='/invoice' element={<Invoice/>}/>
      <Route path='/service-gallery' element={<ServiceGallery/>}/>
      <Route path='/payments' element={<Payments/>}/>
      <Route path='/service-partners' element={<ServicePartner/>}/>
      <Route path='/users' element={<Users/>}/>
      <Route path='/user-details/:userId' element={<UserDetails />}/>
      <Route path='/service-details/:serviceId' element={<ServicePartnerDetails />}/>
      <Route path='/gallery-details/:serviceId' element={<ServiceGalleryDetails />}/>
      <Route path='/bookings-details/:bookingId' element={<BookingDetails />}/>
      <Route path='/payment-details/:paymentId' element={<PaymentDetails />}/>
      <Route path='/blueskills-details/:serviceId' element={<BluskillsServicesDetails />}/>
      <Route path='/subcategory/create' element={<CreateSub />}/>
      <Route path='/user/create' element={<CreateUser />}/>
      <Route path='/bookings/create' element={<CreateBooking />}/>
      <Route path='/category/create' element={<CreateCategory />}/>
      <Route path='/partner/create' element={<CreatePartner />}/>
      <Route path='/blueskills-service/create' element={<CreateService />}/>
      <Route path='/service-gallery/create' element={<CreateGallery />}/>
  </Routes>
  )
}

export default App
