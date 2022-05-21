import React from 'react'
import logo from './fashio.gif'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
function navigations(){

return (
    <BrowserRouter>
    <nav class="navbar background">
      <ul class="nav-list">
        <div class="logo">
          <img src={logo}/>
        </div>
        <li><a href="/home">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
  
      <div class="rightNav">
         
        <button class="btn btn-sm">Search</button>
      </div>
    </nav>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/product' element={<Products/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
)
}
export default navigations