import React from 'react';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './login/login';
import Register from './register/register';
import Error from './error/error';
import Forget from './forget/forget';
import Home from './home/home';
import Productdetails from './productDetails/productdetails';
import Search from './search/search';
import Cart from './cart/cart';
import Myoder from './myoder/myoder';
import Profile from './pofile/Profile';
import Address from './addressupdate/addressupdate';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/productdetails/:id' element={<Productdetails />} />
          <Route path='/search' element={<Search />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/myoder' element={<Myoder />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/addressupdate' element={<Address/>}/>
          <Route path='/forget' element={<Forget />} />
          <Route path='*' element={<Error />} />
        </Routes>


      </BrowserRouter>

    </>
  )
}

export default App
