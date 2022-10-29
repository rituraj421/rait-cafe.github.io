import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from "styled-components";
import './FindUs.css';
// import {SubHeading } from '../../components';
// import { images } from '../../constants';

const FindUs = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_t0vg32v', 'template_vsdsw2k', form.current, 'fG9ecY18xFKWebiv6')
      .then((result) => {
          console.log(result.text);
          console.log("Message sent");
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    
    <div className="formm">
    <StyledContactForm className='formmm'>
    {/* <SubHeading title="Feedback" /> */}
    <h1 className='rituu'><span className='rituuu'>Feed</span>back</h1>
    <form ref={form} onSubmit={sendEmail}>
      <label className='ritu'>Name</label>
      <input type="text" className='ritu' name="user_name" />
      <label className='ritu'>Email</label>
      <input type="email" className='ritu' name="user_email" />
      <label className='ritu'>Message</label>
      <textarea className='ritu' name="message" />
      <input type="submit"  className='ritu' value="Send" />
    </form>
    </StyledContactForm>
    </div>
  );
};

export default FindUs;


// Styles
const StyledContactForm = styled.div`
  wclassNameth: 400px;
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin-left: 400px;
    // background-color: black;
    wclassNameth: 100%;
    font-size: 16px;
    input {
      wclassNameth: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solclassName rgb(220, 220, 220);
      &:focus {
        border: 2px solclassName rgba(0, 206, 158, 1);
      }
    }
    textarea {
      max-wclassNameth: 100%;
      min-wclassNameth: 100%;
      wclassNameth: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solclassName rgb(220, 220, 220);
      &:focus {
        border: 2px solclassName rgba(0, 206, 158, 1);
      }
    }
    label {
      margin-top: 1rem;
    }
    input[type="submit"] {
      margin-top: 2rem;
      margin-bottom: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }
`;