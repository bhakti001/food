import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

import './contact.css'
function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_b8s3', 'template_dwit8ep', form.current, 'ClD5vQ9LJm6Uu15df')
        .then((result) => {
            console.log(result.text);
                  console.log("message sent");
  e.target.reset();
        }, (error) => {
            console.log(error.text);
        });
    }; 
  return (
    <>
       <div className="title" style={{paddingTop:'40px'}}>
        <h1 style={{color:'white'}}>Contact<span style={{color:'#f5b70a'}}> Us</span></h1>
    </div>
    <div className="title">
    <form className='frm' ref={form} onSubmit={sendEmail} >
    <div className="frm">
        <div className="name">
            <label className='left'>Name:</label> 
            <div className="fe">
            <input type="text" placeholder=' &nbsp;Enter Your Name' className='label' name="user_name"  /></div>
        </div>
        <div className="name">
            <label className='left' >Email:</label>
            <div className="fe">
            <input type="email" placeholder='&nbsp;Enter Your Email' className='label' name="user_email" /></div>
        </div>
        <div className="name">
            <label className='left'>Massege:  </label>
            <div className="fe">
            <textarea name="message" placeholder='&nbsp;enter your message' className='text' />
</div>
<div className="bn">
      <input type="submit" value="Send" className='send' />
</div>
        </div>
        </div>
    </form>
    </div>
    </>
  )
}
export default Contact;
