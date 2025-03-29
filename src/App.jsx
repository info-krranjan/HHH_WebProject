import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Views/Header/Navbar'
import Carousel from './Views/Carousel/Carousel'
import Footer from './Views/Footer/Footer'
import Home from './Views/Dashboard/Home'
import Services from './Views/Services/Services'
import Profile from './Views/Profile/Profile'
import Booking from './Views/Bookings/Booking';
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <BrowserRouter>
    <Routes>
      {/* <Route path="" element={<Navbar/>}></Route> */}
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/services" element={<Services/>}></Route>
      <Route path="/profile" element={<Profile/>}></Route>
      <Route path="/booking" element={<Booking/>}></Route>
    </Routes>
    </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App
