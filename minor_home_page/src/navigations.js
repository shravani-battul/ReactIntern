import React from 'react'
import logo from './fashio.gif'
function navigations(){
return <nav class="navbar background">
      <ul class="nav-list">
        <div class="logo">
          <img src={logo}/>
        </div>
        <li><a href="#home">HOME</a></li>
        <li><a href="#about_us">ABOUT US</a></li>
        <li><a href="#services">SERVICES</a></li>
        <li><a href="#products">PRODUCTS</a></li>
        <li><a href="#contact_us">CONTACT US</a></li>
      </ul>
  
      <div class="rightNav">
         
        <button class="btn btn-sm">Search</button>
      </div>
    </nav>
}
export default navigations