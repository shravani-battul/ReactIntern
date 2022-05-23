import React from "react";
import prod1 from "./prod1.png"
import prod2 from "./prod2.png"
import prod3 from "./prod3.png"
import prod4 from "./prod4.png"
import prod5 from "./prod5.png"
import prod6 from "./prod6.png"
import prod7 from "./prod7.png"
import prod8 from "./prod8.png"
import prod9 from "./prod9.png"
export default function Products() {
  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1> <i>Products</i></h1>
      <div class="row">
    <div class="column">
      <div class="card">
        <img src={prod1}/>
        <div class="container">
          <h2>kpop styles</h2>
          <p class="title"></p>
          <p>at reasonable prizes</p>
        </div>
      </div>
    </div>

    <div class="column">
      <div class="card">
        <img src= {prod2}/>
        <div class="container">
          <h2>personalized skin</h2>
          <p class="title">low prizes</p>
          <p>Get your choice at your home door.</p>
          <p>#stylish and trendy looks</p>
        </div>
      </div>
    </div>
  
    <div class="column">
      <div class="card">
        <img src={prod3}/>
        <div class="container">
          <h2>Party wear</h2>
          <p class="title">Designer</p>
          <p>design your dress your way.</p>
          <p>Get the bold looks , in our collections</p>
        </div>
      </div>
    </div>

  </div>
  

  <div class="row">
    <div class="column">
      <div class="card">
        <img src={prod4}/>
        <div class="container">
          <h2>Official Wear</h2>
          <p class="title">Descent looks</p>
          <p>In your way</p>
          <p>All models available</p>
        </div>
      </div>
    </div>

    <div class="column">
      <div class="card">
        <img src= {prod5}/>
        <div class="container">
          <h2>Party wear</h2>
          <p class="title">Stylish Outfits</p>
          <p>Trendy and Handsome looks for boys available</p>
          <p>Get your favourite star outfits at our store.</p>
          
        </div>
      </div>
    </div>
  
    <div class="column">
      <div class="card">
        <img src={prod6}/>
        <div class="container">
          <h2>College wear</h2>
          <p class="title"></p>
        
        </div>
      </div>
    </div>
    
  </div>


  <div class="row">
    <div class="column">
      <div class="card">
        <img src={prod7}/>
        <div class="container">
          <h2>Match you fits</h2>
          <p class="title"></p>
          <p>Get Fashion suggestions here</p>
        </div>
      </div>
    </div>

    <div class="column">
      <div class="card">
        <img src= {prod8}/>
        <div class="container">
          <h2> Different Matching guides</h2>
          <p class="title">fashion guides</p>
          <p>any dress match like this.</p>
         
        </div>
      </div>
    </div>
  
    <div class="column">
      <div class="card">
        <img src={prod9}/>
        <div class="container">
          <h2>Different model pants</h2>
          <p class="title">Designer</p>
          <p>Select your Best fit from above collection.</p>
          <p>john@example.com</p>
        </div>
      </div>
    </div>
    
  </div>
      
    </div>
  );
}
