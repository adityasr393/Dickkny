import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import "./App.css";
import Header from './components/header';
import Login from './components/login';
import About from './components/about';
import BlogComponent from './components/blog';
import Home from './components/home';
import Coupon from './components/coupon';
import ContactUsComponent from './components/contact';
import Cart from './components/cart';
import Wishlist from './components/wishlist';
import Dashboard from './components/dashboard';
import MyProfile from './components/myprofile';
import MyOrder from './components/myorder';
import MyPayment from './components/mypayment';
import MyAddress from './components/myadddress';
import Bulkinquery from './components/bulkinquery';
import Checkout from './components/checkout';
import Product from './components/product';
import { AuthProvider } from './components/useAuth';

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={< Login/>} />
          <Route path="/header" element={<Header />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<BlogComponent />} />
          <Route path="/home" element={<Home />} />
          <Route path="/coupon" element={<Coupon />} />
          <Route path="/contact" element={<ContactUsComponent />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/myorder" element={<MyOrder />} />
          <Route path="/mypayment" element={<MyPayment />} />
          <Route path="/myaddress" element={<MyAddress />} />
          <Route path="/bulkinquery" element={<Bulkinquery />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/product" element={<Product />} />


        </Routes>
   
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
