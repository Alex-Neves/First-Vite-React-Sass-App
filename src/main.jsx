import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './global.scss'
import Homepage from './Hompage.jsx'
import Aboutus from './Aboutus.jsx'
import Registration from './Registration.jsx'
import PageNotFound from './Not-Found.jsx'
import Contactus from './Contactus.jsx'
import FAQs from './FAQs.jsx'
import Franchising from './Franchising.jsx'
import LabTests from './LabTests.jsx'
import Locations from './Locations.jsx'
import Shipping from './Shipping.jsx'
import Shop from './Shop.jsx'
import Cart from './Cart.jsx'
import Sitemap from './Sitemap.jsx'
import Checkout from './Checkout.jsx'

  


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='aboutus' element={<Aboutus />} />
        <Route path='registration' element={<Registration />} />
        <Route path='contactus' element={<Contactus />} />
        <Route path='faqs' element={<FAQs />} />
        <Route path='franchising' element={<Franchising />} />
        <Route path='labtests' element={<LabTests />} />
        <Route path='locations' element={<Locations />} />
        <Route path='shipping' element={<Shipping />} />
        <Route path='shop' element={<Shop />} />
        <Route path='cart' element={<Cart />} />
        <Route path='sitemap' element={<Sitemap />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);