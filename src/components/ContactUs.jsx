import React from 'react'
import "./contactUs.css"
import {HiBuildingOffice} from "react-icons/hi2"
import {MdLocalPostOffice} from "react-icons/md"
import {BsStopwatchFill} from "react-icons/bs"

const ContactUs = () => {
  return (
    <section>
    
    <div class="section-header">
      <div class="container">
        <h2>Get In Touch</h2>
        <p>Our expert consultants work onsite with clients for best output. They are supported by our management for training and operational tools.</p>
      </div>
    </div>
    
    <div class="container">
      <div class="row">
        
        <div class="contact-info">
          <div class="contact-info-item">
            <div class="contact-info-icon">
              <HiBuildingOffice size={40} color=''/>
            </div>
            
            <div class="contact-info-content">
              <h4>Address</h4>
              <p>Noida, Uttar Pradesh, India<br/></p>
            </div>
          </div>
          
          <div class="contact-info-item">
            <div class="contact-info-icon">
            <BsStopwatchFill size={40} color=''/>
            </div>
            
            <div class="contact-info-content">
              <h4>Working Hour</h4>
              <p>Mon - Friday : 09 am - 07pm</p>
            </div>
          </div>
          
          <div class="contact-info-item">
            <div class="contact-info-icon">
            <MdLocalPostOffice size={40} color=''/>
            </div>
            
            <div class="contact-info-content">
              <h4>Email</h4>
             <p>info@avinyait.com
                <br></br>
                www.avinyait.com</p>
            </div>
          </div>
        </div>
        
        <div class="contact-form">
          <form action="" id="contact-form">
            <h2>Send Message</h2>
            <div class="input-box">
              <input type="text" required="true" name=""/>
              <span>Full Name</span>
            </div>
            
            <div class="input-box">
              <input type="email" required="true" name=""/>
              <span>Email</span>
            </div>
            
            <div class="input-box">
              <textarea required="true" name=""></textarea>
              <span>Type your Message...</span>
            </div>
            
            <div class="input-box">
              <input type="submit" value="Send" name=""/>
            </div>
          </form>
        </div>
        
      </div>
    </div>
  </section>
  )
}

export default ContactUs