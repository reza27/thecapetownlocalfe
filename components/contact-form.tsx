"use client";

import { useAppDispatch, useAppSelector } from "../lib/hooks";
import {
  setTransportNeeded,
  setFlexibleDate,
  setEmailError,
  setNameError,
  setSubjectError,
  setPhoneError,
  setCanSubmit,
  setStartDate,
  setName,
  setEmail,
  setMobile,
  setSubject,
  setAddress,
  setMessage,
} from "../lib/features/contact/contactSlice";

import { useCountries } from "use-react-countries";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";

import { Input, Radio } from "@material-tailwind/react";
import { Textarea } from "@material-tailwind/react";
import { Button, Checkbox, Select, Option } from "@material-tailwind/react";
import React, { useState, useEffect, useRef } from "react";
import $ from "jquery";
import DatePicker from "react-datepicker";
import Image from "next/image";
import ImageLoader from "../components/image-loader";

const waImageStyle = {
  objectFit: "contain",
  objectPosition: "center bottom",
  height: "60px",
  width: "60px",
  overflow: "hidden",
};

export default function ContactForm(props) {
  const isTransportNeeded = useAppSelector(
    (state) => state.contact.isTransportNeeded
  );
  const isFlexibleDate = useAppSelector(
    (state) => state.contact.isFlexibleDate
  );
  const emailError = useAppSelector((state) => state.contact.hasEmailError);
  const nameError = useAppSelector((state) => state.contact.hasNameError);
  const subjectError = useAppSelector((state) => state.contact.hasSubjectError);
  const phoneError = useAppSelector((state) => state.contact.hasPhoneError);
  const canSubmit = useAppSelector((state) => state.contact.canSubmit);
  const startDate = useAppSelector((state) => state.contact.startDate);
  const nameVal = useAppSelector((state) => state.contact.name);
  const emailVal = useAppSelector((state) => state.contact.email);
  const mobileVal = useAppSelector((state) => state.contact.mobile);
  const messageVal = useAppSelector((state) => state.contact.message);
  const addressVal = useAppSelector((state) => state.contact.address);
  const subjectVal = useAppSelector((state) => state.contact.subject);
  const dispatch = useAppDispatch();

  const { selectOptions } = props;
  //const [transportNeeded, setTransportNeeded] = useState(false);
  //const [flexibleDate, setFlexibleDate] = useState(true);
  //const [isDateFlexible, setIsDateFlexible] = useState(false);
  //const [canSubmit, setCanSubmit] = useState(false);
  const [messageSubmitted, setMessageSubmitted] = useState(false);
  //const [emailError, setEmailError] = useState(false);
  //const [subjectError, setSubjectError] = useState(false);
  //const [nameError, setNameError] = useState(false);
  // const [phoneError, setPhoneError] = useState(false);
  //const [startDate, setStartDate] = useState(new Date());
  const inputRef = useRef();
  const autoCompleteRef = useRef();
  const { countries } = useCountries();
  const [country, setCountry] = React.useState(0);
  const { name, flags, countryCallingCode } = countries[country];

  const options = {
    componentRestrictions: { country: "za" },
    fields: ["address_components", "geometry", "icon", "name"],
  };

  const onSubmit = async (e) => {
    //e.preventDefault();
    //if (canSubmit) {

    let selectedDate = new Date(startDate);
    let month = selectedDate.getUTCMonth() + 1; //months from 1-12
    let day = selectedDate.getUTCDate();
    let year = selectedDate.getUTCFullYear();
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let formattedDate = day + " " + monthNames[month - 1] + " " + year;

    // let data = {
    //   name: $("#name")[0].value,
    //   email: $("#email")[0].value,
    //   subject: $("#subject")[0].innerText,
    //   date: formattedDate,
    //   transportNeeded: isTransportNeeded ? "yes" : "no",
    //   isDateFlexible: isFlexibleDate ? "yes" : "no",
    //   //address: $("#address")[0].value,
    //   phone: countryCallingCode + $("#phone").val(),
    //   message: $("#message").val(),
    // };
    let data = {
      name: nameVal,
      email: emailVal,
      subject: subjectVal,
      date: formattedDate,
      transportNeeded: isTransportNeeded ? "yes" : "no",
      isDateFlexible: isFlexibleDate ? "yes" : "no",
      address: isTransportNeeded ? addressVal : "",
      phone: countryCallingCode + mobileVal,
      message: messageVal,
    };
    console.log("data", data);

    let isValid = true;
    if (/(.+)@(.+){2,}\.(.+){2,}/.test(data.email)) {
      // valid email
      //setEmailError(false);
      dispatch(setEmailError(false));
    } else {
      // invalid email
      isValid = false;
      //setEmailError(true);
      dispatch(setEmailError(true));
    }

    if (!data.name) {
      isValid = false;
      //setNameError(true);
      dispatch(setNameError(true));
    } else {
      //setNameError(false);
      dispatch(setNameError(false));
    }

    if (data.phone.length < 7) {
      isValid = false;
      //setPhoneError(true);
      dispatch(setPhoneError(true));
    } else {
      //setPhoneError(false);
      dispatch(setPhoneError(false));
    }

    if (!data.subject) {
      //setSubjectError(true);
      dispatch(setSubjectError(true));

      isValid = false;
    } else {
      //setSubjectError(false);
      dispatch(setSubjectError(false));
    }

    if (!isValid) {
      return;
    }

    const JSONdata = JSON.stringify(data);

    const endpoint = process.env.NEXT_PUBLIC_PROD_URL + "/api/mail";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);

    const result = await response.json();
    console.log("data message", result);

    gtag("event", "submit_form", {
      action: "Form submit",
    });

    setMessageSubmitted(true);
    //}
  };

  const validateInputFields = (input) => {
    if (!input) {
      setTimeout(() => {
        validate();
      }, 100);
    }

    if (input && input.target.id === "phone") {
      $(input.target).val(
        $(input.target)
          .val()
          .match(/\d*\.?\d+/)
      );
    }

    validate();
  };

  const validate = () => {
    if (
      // $("#name")[0].value &&
      // $("#email")[0].value &&
      // $("#phone")[0].value &&
      // $("#subject")[0].innerText
      nameVal &&
      emailVal &&
      mobileVal &&
      subjectVal
    ) {
      //setCanSubmit(true);
      dispatch(setCanSubmit(true));
    } else {
      //setCanSubmit(false);
      dispatch(setCanSubmit(false));
    }
  };

  const displayOptions = (selectOptions) => {
    let options = [];
    selectOptions.map((item, i) => {
      options.push(
        <Option key={item.title} value={item.title}>
          {item.title}
        </Option>
      );
    });
    options.push(
      <Option key="General request" value={"General request"}>
        General request
      </Option>
    );
    return options;
  };

  useEffect(() => {
    // const input = document.getElementById("address");
    // autoCompleteRef.current = new window.google.maps.places.Autocomplete(
    //   input,
    //   options
    // );

    setCountry(204);

    //$('.address input').prop('autoComplete', 'address')
  }, []);

  // useEffect(() => {
  //   console.log('isTransportNeeded1', isTransportNeeded)
  //   // if (isTransportNeeded) {
  //   //   $(".contact-form .address").addClass("show");
  //   // } else {
  //   //   $(".contact-form .address").removeClass("show");
  //   // }
  //
  // }, [isTransportNeeded]);

  return (
    <div className="contact-form">
      <div className="heading">
        <h2>Get in touch.</h2>
        <p className="form-description">
          Submit to enquire about a tour, transport or anything you&apos;d like
          to know. Looking forward to be your guide.
        </p>
      </div>
      <div className="contact-form-inner">
        <div className="left-block">
          <div className="input-field-container">
            <Select
              error={subjectError}
              variant="standard"
              label="Select Tour"
              id="subject"
              value={subjectVal}
              onChange={(aOption) => {
                dispatch(setSubject(aOption));
                validate();
              }}
            >
              {displayOptions(selectOptions)}
            </Select>
            <p className="required-field">*Required field</p>
          </div>
          <div className="input-field-container">
            <Input
              autoComplete="off"
              error={nameError}
              id="name"
              required
              variant="standard"
              color="light-blue"
              label="Name"
              className="input-field"
              value={nameVal}
              onChange={(event) => {
                dispatch(setName(event.target.value));
                validateInputFields(event);
              }}
            />
            <p className="required-field">*Required field</p>
          </div>
          <div className="input-field-container">
            {/* <Input
              autoComplete="off"
              error={phoneError}
              type="tel"
              pattern="^[0-9-+\s()]*$"
              minLength="7"
              maxLength="15"
              required
              id="phone"
              variant="standard"
              color="light-blue"
              label="Phone (include country code)"
              className="input-field"
              onChange={validateInputFields}
            /> */}
            <div className="relative flex w-full">
              <Menu placement="bottom-start">
                <MenuHandler>
                  <Button
                    ripple={false}
                    id="countryCode"
                    variant="text"
                    color="blue-gray"
                    className="flex h-11 items-center gap-2 rounded-r-none border-b border-blue-gray-200  pl-3"
                  >
                    <img
                      src={flags.svg}
                      alt={name}
                      className="h-4 w-4 rounded-full object-cover"
                    />
                    {countryCallingCode}
                  </Button>
                </MenuHandler>
                <MenuList className="max-h-[20rem] max-w-[18rem]">
                  {countries

                    .sort((a, b) => (a.name > b.name ? 1 : -1))
                    .map(({ name, flags, countryCallingCode }, index) => {
                      return (
                        <MenuItem
                          key={name}
                          value={name}
                          className="flex items-center gap-2"
                          onClick={() => setCountry(index)}
                        >
                          <img
                            src={flags.svg}
                            alt={name}
                            className="h-5 w-5 rounded-full object-cover"
                          />
                          {name}{" "}
                          <span className="ml-auto">{countryCallingCode}</span>
                        </MenuItem>
                      );
                    })}
                </MenuList>
              </Menu>
              <Input
                autoComplete="off"
                error={phoneError}
                type="tel"
                pattern="^[0-9-+\s()]*$"
                minLength="7"
                maxLength="15"
                required
                id="phone"
                variant="standard"
                color="light-blue"
                label="Mobile number"
                value={mobileVal}
                onChange={(event) => {
                  dispatch(setMobile(event.target.value));
                  validateInputFields(event);
                }}
                className="input-field country-input"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                containerProps={{
                  className: "min-w-0",
                }}
              />
            </div>
            <p className="required-field">*Required field</p>
          </div>
          <div className="input-field-container email">
            <Input
              autoComplete="off"
              error={emailError}
              required
              type="email"
              id="email"
              variant="standard"
              color="light-blue"
              label="Email"
              className="input-field"
              value={emailVal}
              onChange={(event) => {
                dispatch(setEmail(event.target.value));
                validateInputFields(event);
              }}
            />
            <p className="required-field">*Required field</p>
          </div>
        </div>
        <div className="right-block">
          <div className="input-field-container date">
            <p>Preferred date:</p>
            <DatePicker
              selected={startDate}
              onChange={(date) => dispatch(setStartDate(date))}
              className="input-field"
            />
          </div>
          <div
            className="input-field-container"
            onChange={(e) => {
              e.stopPropagation();
              //setFlexibleDate(!flexibleDate);
              dispatch(setFlexibleDate(!isFlexibleDate));
            }}
          >
            <label className="label-check">
              Is your date flexible?
              <Radio
                id="flexibleYes"
                name="flexible"
                label="Yes"
                defaultChecked
              />
              <Radio id="flexibleNo" name="flexible" label="No" />
            </label>
          </div>
          <div className="input-field-container">
            <label
              className="label-check"
              onChange={(e) => {
                e.stopPropagation();
                // setTransportNeeded(!transportNeeded);
                dispatch(setTransportNeeded(!isTransportNeeded));
              }}
            >
              Do you need transport?
              <Radio id="transportYes" name="transport" label="Yes" />
              <Radio
                id="trasnportNo"
                name="transport"
                label="No"
                defaultChecked
              />
            </label>
          </div>
          {isTransportNeeded ? (
            <div className="input-field-container address">
              <Input
                autoCapitalize="off"
                autoComplete="off"
                autoCorrect="off"
                name="address"
                id="address"
                variant="standard"
                color="light-blue"
                label="Address/Hotel"
                className="input-field"
                value={addressVal}
                onChange={(event) => {
                  dispatch(setAddress(event.target.value));
                }}
              />
            </div>
          ) : (
            <></>
          )}
          <div className="input-field-container message">
            <Textarea
              autoComplete="off"
              id="message"
              variant="standard"
              color="light-blue"
              label="Message"
              className="input-field"
              value={messageVal}
              onChange={(event) => {
                dispatch(setMessage(event.target.value));
                validateInputFields(event);
              }}
            />
          </div>
          <div className="input-field-container">
            <Button
              type="submit"
              className={canSubmit ? "form-button" : "form-button disabled"}
              onClick={onSubmit}
            >
              Submit
            </Button>
            <p
              className={
                messageSubmitted ? "feedback-field" : "feedback-field hide"
              }
            >
              Enquiry sent.
            </p>
          </div>
        </div>
      </div>
      <a
        id="whatsapp"
        href="https://wa.me/27789803335"
        target="_blank"
        onClick={() => {
          gtag("event", "whatsapp", {
            action: "WhatsApp opened",
          });
        }}
      >
        <Image
          loader={ImageLoader}
          src="/WhatsApp.svg"
          width={60}
          height={60}
          style={waImageStyle}
          alt="whatsapp"
        />
        <p>Reach out via WhatsApp</p>
      </a>
    </div>
  );
}

// <Checkbox checked={transportNeeded} label="Transport needed" onClick={(e) => {
//   e.stopPropagation();setTransportNeeded(!transportNeeded)}}/>
// <div className="input-field-container">
//   <Checkbox checked={isDateFlexible} label="Is date flexible?" onClick={(e) => {
//     e.stopPropagation();setIsDateFlexible(!isDateFlexible)}}/>
// </div>
