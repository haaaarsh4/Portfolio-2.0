import Circles from '../../components/Circles';

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import {BsArrowRight} from 'react-icons/bs'

import {motion} from 'framer-motion'

import {fadeIn} from '../../variants'

const Contact = () => {
  const [buttonText, setButtonText] = useState('Send');
  const form = useRef();

  const sendEmail = async (e) => {
      e.preventDefault();
  
      setButtonText("Sending...");
  
      try {
          const result = await emailjs.sendForm('service_ggogquo', 'template_gsl28kw', form.current, 'RZfkDMwLB2LmXjf-k');
          console.log(result.text);
          form.current.reset(); // Reset the form
      } catch (error) {
          console.log(error.text);
      }
  
      setButtonText("Send");
  };

  return <div className=" h-full bg-primary/30 ">
    <Circles />
    <div className=" container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full"> 
      <div className="flex flex-col w-full max-w-[700px]" id="connect">
        <h2 
        variants={fadeIn('up',0.2)} 
        initial="hidden" 
        animate="show" 
        exit="hidden" 
        className="h2 text-center mb-2">
          {`Let's`} <span className=" text-accent">connect</span>
        </h2>
        <form 
        ref={form} 
        onSubmit={sendEmail}
        className=" flex-1 flex flex-col gap-6 w-full mx-auto">
          <div className="flex gap-x-6 w-full">
            <input type="text"  placeholder="First Name" name="first_name" className="input"/>
            <input type="text"  placeholder="Email" name="email" className="input"/>
          </div>
          <input type="text"  placeholder="subject" className="input"/>
          <textarea placeholder="Message" name="message" className="textarea">
          </textarea>
          <button type="submit" className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
            <span>{buttonText}</span>
          </button>
        </form>
      </div>
    </div>
  </div>;
};

export default Contact;