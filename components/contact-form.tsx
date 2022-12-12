import { Input } from "@material-tailwind/react";
import { Textarea } from "@material-tailwind/react";
import { Button, Checkbox, Select, Option } from "@material-tailwind/react";
import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import DatePicker from 'react-datepicker';

export default function ContactForm() {
  const [transportNeeded, setTransportNeeded] = useState(false);
  const [isDateFlexible, setIsDateFlexible] = useState(false);
  const [canSubmit, setCanSubmit] = useState(false);
  const [messageSubmitted, setMessageSubmitted] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [subjectError, setSubjectError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [startDate, setStartDate] = useState(new Date());

  const onSubmit = async (e) => {
    //e.preventDefault();
    //if (canSubmit) {
      let selectedDate = new Date(startDate);
      let month = selectedDate.getUTCMonth() + 1; //months from 1-12
      let day = selectedDate.getUTCDate();
      let year = selectedDate.getUTCFullYear();
      const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];

      let formattedDate = day + " " + monthNames[month-1] + " " + year;

      let data = {
        name: $('#name')[0].value,
        email: $('#email')[0].value,
        subject: $('#subject')[0].innerText,
        date: formattedDate,
        transportNeeded: $('#transport-needed').val() === 'on' ? 'yes': 'no',
        address: $('#address')[0].value,
        phone: $('#phone').val(),
        message: $('#message').val(),

      }
      let isValid = true;
      if( /(.+)@(.+){2,}\.(.+){2,}/.test(data.email) ){
        // valid email
        setEmailError(false);
      } else {
        // invalid email
        isValid = false;
        setEmailError(true);

      }

      if (!data.name) {
        isValid = false;
        setNameError(true);
      }
      else {
        setNameError(false);
      }

      if (data.phone.length < 7) {
        isValid = false;
        setPhoneError(true);
      }
      else {
        setPhoneError(false);
      }

      if (!data.subject) {
        setSubjectError(true);
        isValid = false;
      } else {
        setSubjectError(false);
      }

      if (!isValid) {
        return;
      }

       // Send the data to the server in JSON format.
        const JSONdata = JSON.stringify(data);
       // // API endpoint where we send form data.
       //const endpoint = process.env.NODE_ENV==='production'? process.env.NODE_ENV.PROD_URL+'/api/mail':process.env.LOCAL_URL+'/api/mail';
       console.log('process.env.PROD_URL', process.env.NEXT_PUBLIC_PROD_URL)
       const endpoint = process.env.NEXT_PUBLIC_PROD_URL+'/api/mail';

       // Form the request for sending data to the server.
       const options = {
         // The method is POST because we are sending data.
         method: 'POST',
         // Tell the server we're sending JSON.
         headers: {
           'Content-Type': 'application/json',
         },
         // Body of the request is the JSON data we created above.
         body: JSONdata,
       }
       const response = await fetch(endpoint, options)
      // // Get the response data from server as JSON.
      // // If server returns the name submitted, that means the form works.
        const result = await response.json();
        console.log('data message', result);

        setMessageSubmitted(true);
    //}
  }

  const validateInputFields = (input) => {
    // /console.log('inputs', input.target.id);

    if(!input) {
      setTimeout(() => {
        //console.log('inputs', $('#subject')[0].innerText);
        validate();
      }, 100);
    }

    if (input && input.target.id === 'phone') {
      $(input.target).val($(input.target).val().match(/\d*\.?\d+/));
    }


    validate();

  };

  const validate = () => {
    if ($('#name')[0].value && $('#email')[0].value && $('#phone')[0].value && $('#subject')[0].innerText) {
      setCanSubmit(true);
    }
    else {
      setCanSubmit(false);
    }
  }

  useEffect(() => {
    if (transportNeeded) {
      $('.contact-form .address').addClass('show');
    }
    else {
      $('.contact-form .address').removeClass('show');
    }
  },[transportNeeded])

  return (
    <div className="contact-form">
      <div className="left-block">
        <h2>Get in touch.</h2>
        <p className="form-description">Submit to enquire about a tour, transport or anything you&apos;d like to know. Looking forward to be your guide.</p>

        <div className="input-field-container">
          <Select error={subjectError} variant="standard" label="Select Tour" id="subject" onChange={validateInputFields}>
            <Option>Lion&apos;s head - sunrise</Option>
            <Option>Lion&apos;s head - sunset</Option>
            <Option>Table mountain - India venster</Option>
            <Option>Custom request</Option>
          </Select>
          <p className="required-field">*Required field</p>
        </div>
        <div className="input-field-container">
          <Input autocomplete="off" error={nameError} id="name" required variant="standard" color="light-blue" label="Name" className="input-field" onChange={validateInputFields}/>
          <p className="required-field">*Required field</p>
        </div>
        <div className="input-field-container">
          <Input autocomplete="off" error={phoneError} type="tel" pattern="^[0-9-+\s()]*$" minlength="7" maxlength="15" required id="phone" variant="standard" color="light-blue" label="Phone (include country code)" className="input-field" onChange={validateInputFields}/>
          <p className="required-field">*Required field</p>
        </div>
      </div>
      <div className="right-block">
      <div className="input-field-container">
        <Input autocomplete="off" error={emailError} required type="email" id="email" variant="standard" color="light-blue" label="Email" className="input-field" onChange={validateInputFields}/>
        <p className="required-field">*Required field</p>
      </div>
      <div className="input-field-container date">
        <p>Choose date:</p>
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="input-field" />
      </div>

      <div className="input-field-container">
        <label className="label-check">Transport needed?
            <input id="transport-needed" type="checkbox" checked={transportNeeded} onChange={(e) => {
               e.stopPropagation();setTransportNeeded(!transportNeeded)}} />
        </label>
      </div>
      <div className="input-field-container address">
        <Input autocomplete="off" id="address" variant="standard" color="light-blue" label="Address" className="input-field"/>
      </div>
      <div className="input-field-container message">
        <Textarea autocomplete="off" id="message" variant="standard" color="light-blue" label="Message" className="input-field"/>
      </div>
      <div className="input-field-container">
        <Button type="submit" className={canSubmit ? "form-button": "form-button disabled"} onClick={onSubmit}>Submit</Button>
        <p className={messageSubmitted ? "feedback-field": "feedback-field hide"}>Enquiry sent.</p>
      </div>
      </div>
    </div>
  )
}

// <Checkbox checked={transportNeeded} label="Transport needed" onClick={(e) => {
//   e.stopPropagation();setTransportNeeded(!transportNeeded)}}/>
// <div className="input-field-container">
//   <Checkbox checked={isDateFlexible} label="Is date flexible?" onClick={(e) => {
//     e.stopPropagation();setIsDateFlexible(!isDateFlexible)}}/>
// </div>
