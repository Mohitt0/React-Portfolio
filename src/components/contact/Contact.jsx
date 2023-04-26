import React, { useState } from "react";
import '../contact/contact.css'
import {ToastContainer, toast} from 'react-toastify'
import emailjs from '@emailjs/browser';
import "react-toastify/dist/ReactToastify.css";
const Contact = (props) => {
    const[loading,setLoading] = useState(false);
    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[subject,setSubject] = useState("");
    const[message,setMessage] = useState("");
  const submitHandler = async(e) => {
    e.preventDefault();
    if(!name||!email||!subject||!message){
        return toast.error("Please complete the form above!")
    }
    setLoading(true);
    const data = {
        name,
        email,
        subject,
        message,
    };
    emailjs.send(
      "service_mnluqf8",
      "template_5v5ag3i",
        data,
        "kQkZA1kyC3xust7T7"
    )
    .then((result)=>{
      setLoading(false);
      toast.success(`Successfully sent email.`);
    },(error)=>{
      setLoading(false);
      console.log(error);
      toast.error(error.text);
    })
    
  };
  return (
    <section className="contact section container" id="contact">
      <h2 className="section__title">Get in Touch</h2>
      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's talk about everything!</h3>
          <p className="contact__details">
            Don't like forms? Send me an email.👋
          </p>
        </div>
        <form className="contact__form" onSubmit={submitHandler}>
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                type="text"
                className="contact__form-input"
                placeholder="Insert your name"
                onChange={(e)=>setName(e.target.value)}
              />
            </div>
            <div className="contact__form-div">
              <input
                type="text"
                className="contact__form-input"
                placeholder="Insert your email"
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
            </div>
            <div className="contact__form-div">
              <input
                type="text"
                className="contact__form-input"
                placeholder="Insert your subject"
                onChange={(e)=>setSubject(e.target.value)}
              />
            </div>
            <div className="contact__form-div contact__form-area">
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Write your message"
                onChange={(e)=>setMessage(e.target.value)}
                ></textarea>
            </div>
            <button type="submit" className="btn">
                {loading?"Sending....":"Send Message"}
            </button>
         
        </form>
        <ToastContainer position="bottom-right" theme={props.theme} />
      </div>
    </section>
  );
};

export default Contact;
