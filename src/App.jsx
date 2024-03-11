import { Route, Routes } from "react-router-dom"
import BlueskillsServices from "./pages/blueskills-service/BlueskillsServices"
import SubCategory from "./pages/Subcategory"
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


const App = () => {
  return (
    <Routes>
      <Route path='/category' element={<BlueskillsServices/>}/>
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
      <Route path='/booking-details/:bookingId' element={<BookingDetails />}/>
      <Route path='/payment-details/:paymentId' element={<PaymentDetails />}/>
      <Route path='/blueskills-details/:serviceId' element={<BluskillsServicesDetails />}/>
  </Routes>
  )
}

export default App
