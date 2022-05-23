import React from "react";
import service2 from "./service2.png"
import service3 from "./service3.png"
import service4 from "./service4.png"

export default function Services() {
  return ( <>
    <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1>SERVICES</h1>
      <h3> Tailor </h3>
      <p> Hey Fashioneers,here we make cloths that best suit you.
        </p>
        <p>
          Now you are Available with what you really waiting for.
        </p>
        <p>
          THEN FIND YOUR CHOICE AT REASONABLE PRICE,     
          <br></br>
          <i>go SHOP NOW....at Fashio Bond</i>
      </p>
     </div>
    <div class="row">
    <div class="column">
      <div class="card">
        <img class = "pictures" src={service2}/>
        <div class="container">
          <h2>Seiwing</h2>
          <p class="title">customized outfit</p>
          <p>Experience the beauty of dress with personalized styles.</p>
          <p>Your style, Your right</p>
        </div>
      </div>
    </div>

    <div class="column">
      <div class="card">
        <img class = "pictures" src= {service3}/>
        <div class="container">
          <h2>Size fit</h2>
          <p class="title">Get your perfect size</p>
          <p>A perfect measure brings out the perfect look.</p>
          <p>your choice , we prefer</p>
        </div>
      </div>
    </div>
  
    <div class="column">
      <div class="card">
        <img class = "pictures" src={service4}/>
        <div class="container">
          <h2>Readymade</h2>
          <p class="title">Designer wear</p>
          <p>Any style you ask for, we provide you with best clothes.</p>
          <p>Lovely Designs</p>
          <br></br>
          <br></br>
        </div>
      </div>
    </div>
  </div>
  </>
  );
}
