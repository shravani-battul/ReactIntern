import React from 'react'
import JaneDoe from './JaneDoe.jpg'
import MarkRoss from './MarkRoss.jpg'
import JohnDoe from './JohnDoe.jpg'
import  './Aboutus.css'
export default function Aboutus() {
    return (
        <>
            <br></br> 
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1> Meet our Team </h1>
            <div class="about-section">
                    <h3> What makes us different </h3>
                    <div>
                        <p>
                            Our passion stems from our people.We value diversity and believe that
                            different backgrounds , ideas and perspectives are what makes us a
                            stronger and capable team of fashioneers. Each and every employee adds
                            to our inclusive culture of creating fashions that matters.
                        </p>
                        <p>
                            We blend our strengths together, combining our business experience
                            and creative minds to bring the best ideas to the table and drive 
                            results for our partners.
                        </p>
                    </div>                
                        
            </div>
            
  <div class="row">
    <div class="column">
      <div class="card">
        <img src={JaneDoe}/>
        <div class="container">
          <h2>Jane Doe</h2>
          <p class="title">CEO & Founder</p>
          <p>Experienced Stylist.</p>
          <p>jane@gmail.com</p>
        </div>
      </div>
    </div>

    <div class="column">
      <div class="card">
        <img src= {MarkRoss}/>
        <div class="container">
          <h2>Mike Ross</h2>
          <p class="title">Art Director</p>
          <p>Fashion designer.</p>
          <p>mike@gmail.com</p>
        </div>
      </div>
    </div>
  
    <div class="column">
      <div class="card">
        <img src={JohnDoe}/>
        <div class="container">
          <h2>John Doe</h2>
          <p class="title">Designer</p>
          <p>Customer service manager.</p>
          <p>john@gmail.com</p>
        </div>
      </div>
    </div>
  </div>
  
        </>
    );
  }