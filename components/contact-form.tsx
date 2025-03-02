"use client";

import { useAppDispatch, useAppSelector } from "../lib/hooks";
import { postBookingRequest } from "../lib/features/contact/contactSlice";

import {
  Input,
  ThemeProvider,
  Select,
  Option,
  Textarea,
} from "@material-tailwind/react";
import React, { ReactElement, useMemo, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import Image from "next/image";
import ImageLoader from "../components/image-loader";
import { IBookingRequest } from "../types/IBookingRequest";
import { Formik } from "formik";
import moment from "moment";
import { TCTLRadioButton } from "./forms/TCTLRadioButton";
import contactSchema from "../lib/schemas/contact.schema";
import { ScrollToErrors } from "./forms/ScrollToErrors";
import { TCTLCountryCodeMobileNumberInput } from "./forms/TCTLCountryCodeMobileNumberInput";
import { IActivityItem } from "../types/IActivity";
import { TCPTLButton } from "./tcptl-button";
import TCPTLDatePicker from "./forms/tcptl-date-picker";
import { SelectTheme } from "../themes/select-theme";
import { InputTheme } from "../themes/input-theme";
import { FancyButton } from "./fancy-button";
import { AnyAaaaRecord } from "dns";
import { AnyAsyncThunk } from "@reduxjs/toolkit/dist/matchers";

const waImageStyle = {
  objectFit: "contain",
  objectPosition: "center bottom",
  height: "60px",
  width: "60px",
  overflow: "hidden",
};

export default function ContactForm(props) {
  const messageSubmitted = useAppSelector(
    (state) => state.contact.bookingRequestSubmitted
  );
  const bookingRequestIsSubmitting = useAppSelector(
    (state) => state.contact.bookingRequestIsSubmitting
  );

  const dispatch = useAppDispatch();

  const { selectOptions } = props;

  const [countryCallingCode, setCountryCallingCode] = useState(null);

  const displayOptions = (selectOptions: Array<IActivityItem>) => {
    let options = selectOptions.slice().map((item, i) => {
      return (
        <Option key={item.id} value={item.shortTitle}>
          {item.shortTitle}
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
  const displayNumPeopleOptions = () => {
    let options: any = [1, 2, 3, 4, 5, 6, 7, 8];
    return options.map((item, i) => {
      return (
        <Option key={item} value={item}>
          {item}
        </Option>
      );
    });
  };

  const displayYesNoOptions = () => {
    let options: any = ["Yes", "No"];
    return options.map((item, i) => {
      return (
        <Option key={item} value={item}>
          {item}
        </Option>
      );
    });
  };

  const subject = useRef<HTMLDivElement | null>(null);
  const name1 = useRef<HTMLDivElement | null>(null);
  const email = useRef<HTMLDivElement | null>(null);
  const phone = useRef<HTMLDivElement | null>(null);
  const date = useRef<HTMLDivElement | null>(null);

  const numberOfPeople = useRef<HTMLDivElement | null>(null);

  const errorRefs = [
    { ref: subject, id: "subject" },
    { ref: name1, id: "name" },
    { ref: email, id: "email" },
    { ref: numberOfPeople, id: "numberOfPeople" },
    { ref: phone, id: "phone" },
    { ref: date, id: "date" },
  ];

  const datePicker = useMemo(() => {
    return (
      <div ref={date}>
        <TCPTLDatePicker className="w-full text-white" label="Preferred date" />
      </div>
    );
  }, []);

  const onCountryCodeChange = (value) => {
    setCountryCallingCode(value);
  };

  return (
    <div className="bg-blue flex pt-12 pb-10 w-full relative px-8 md:px-10 lg:px-12 rounded-3xl flex-col lg:flex-row">
      <div className="flex flex-col items-center justify-center w-full lg:w-2/5 lg:pr-10">
        <div className="flex justify-start flex-col">
          <p className="text-yellow text-xs font-medium pb-2">CONTACT US</p>
          <h2 className="text-white text-5xl md:text-6xl tracking-tighter">
            Get in touch <br /> with our team.
          </h2>
          <p className="text-white text-xs pt-4 max-w-96 leading-5">
            Submit to enquire about a tour, transport or anything you&apos;d
            like to know. Looking forward to be your guide.
          </p>
        </div>
      </div>
      <Formik
        initialValues={{
          subject: "",
          name: "",
          email: "",
          numberOfPeople: 0,
          phone: "",
          date: null,
          //isFlexibleDate: true,
          isFlexibleDate: "No",

          //isTransportNeeded: false,
          isTransportNeeded: "No",

          address: "",
          message: "",
        }}
        validationSchema={contactSchema}
        onSubmit={(values) => {
          let formattedValues: IBookingRequest = Object.assign({}, values, {
            date: moment(values.date).format("MMMM Do YYYY"),
            // isFlexibleDate: values.isFlexibleDate ? "Yes" : "No",
            //isTransportNeeded: values.isTransportNeeded ? "Yes" : "No",
            phone: countryCallingCode + values.phone,
          });

          //dispatch(postBookingRequest(formattedValues));
          console.log("formattedValues1", values);
          sendGAEvent("event", "submit_form", {
            action: "Form submit",
          });
        }}
      >
        {(formik) => (
          <form className="flex relative flex-1" onSubmit={formik.handleSubmit}>
            <ScrollToErrors refs={errorRefs} />
            <div className="flex flex-col w-full ">
              <div className="flex flex-col lg:flex-row">
                <div
                  className="mt-7 lg:mt-0 w-full lg:w-1/2 lg:pr-4 flex flex-col"
                  ref={name1}
                >
                  <ThemeProvider value={InputTheme}>
                    <Input
                      autoComplete="off"
                      id="name"
                      size="md"
                      variant="standard"
                      color="light-blue"
                      label="Name*"
                      className="text-white placeholder:text-xs"
                      {...formik.getFieldProps("name")}
                    />
                  </ThemeProvider>
                  {formik.touched.name && formik.errors.name ? (
                    <div className="text-xs text-yellow pt-2">
                      {formik.errors.name}
                    </div>
                  ) : null}
                </div>
                <div
                  className="flex flex-col w-full lg:w-1/2 mt-7 lg:mt-0"
                  ref={phone}
                >
                  <TCTLCountryCodeMobileNumberInput
                    onCountryCodeChange={onCountryCodeChange}
                    {...formik.getFieldProps("phone")}
                  />

                  {formik.touched.phone && formik.errors.phone ? (
                    <div className="text-xs text-yellow pt-2 w-full">
                      {formik.errors.phone}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="flex flex-col lg:flex-row mt-7">
                <div className=" flex flex-col w-full" ref={email}>
                  <ThemeProvider value={InputTheme}>
                    <Input
                      autoComplete="off"
                      type="email"
                      variant="standard"
                      color="light-blue"
                      label="Email*"
                      className="text-white"
                      {...formik.getFieldProps("email")}
                    />
                  </ThemeProvider>
                  {formik.touched.email && formik.errors.email ? (
                    <div className="text-xs text-yellow pt-2">
                      {formik.errors.email}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="flex mt-0 lg:mt-7 flex-col lg:flex-row">
                <div
                  className="flex w-full flex-col lg:w-1/2 mt-7 lg:mt-0 lg:pr-4"
                  ref={subject}
                >
                  <ThemeProvider value={SelectTheme}>
                    <Select
                      variant="standard"
                      label="Select Tour*"
                      id="subject"
                      color="light-blue"
                      className="text-white"
                      onChange={(aOption) => {
                        formik.setFieldValue("subject", aOption);
                      }}
                    >
                      {displayOptions(selectOptions)}
                    </Select>
                  </ThemeProvider>

                  {formik.touched.subject && formik.errors.subject ? (
                    <div className="text-xs text-yellow pt-2">
                      {formik.errors.subject}
                    </div>
                  ) : null}
                </div>
                <div
                  className="flex flex-col lg:flex-row w-full lg:w-1/2 mt-7 lg:mt-0 "
                  ref={numberOfPeople}
                >
                  <ThemeProvider value={SelectTheme}>
                    <Select
                      variant="standard"
                      label="Number of people*"
                      color="light-blue"
                      className="text-white"
                      onChange={(aOption) => {
                        formik.setFieldValue("numberOfPeople", aOption);
                      }}
                    >
                      {displayNumPeopleOptions()}
                    </Select>
                  </ThemeProvider>
                  {formik.touched.numberOfPeople &&
                  formik.errors.numberOfPeople ? (
                    <div className="text-xs text-yellow pt-2 font-medium">
                      {formik.errors.numberOfPeople}
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="flex mt-0 lg:mt-7 flex-col lg:flex-row justify-center lg:justify-start">
                <div className="input-field-container flex w-full lg:w-1/3 date relative mt-7 lg:mt-0 lg:pr-4">
                  {/* <label className="absolute bottom-4 lg:bottom-9 text-white text-xs mt-7">
                    Preferred date:
                  </label>

                  <DatePicker
                    selected={formik.values.date}
                    onChange={(val) => {
                      formik.setFieldValue("date", val);
                    }}
                    className="input-field absolute"
                  />*/}
                  {/* <TCPTLDatePicker
                    className="w-full text-white"
                    label="Preferred date"
                  /> */}
                  <div className="flex flex-col w-full">
                    {datePicker}

                    {formik.touched.date && formik.errors.date ? (
                      <div className="text-xs text-yellow pt-2 w-full">
                        {formik.errors.date}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="flex text-white text-xs w-full lg:w-1/3 mt-7 lg:pr-4 lg:mt-0">
                  {/* <label className="label-check"> */}
                  {/* <div className="w-full">Is your date flexible?</div> */}
                  {/* <TCTLRadioButton
                      label="Yes"
                      name="isFlexibleDate"
                      color="blue"
                      onChange={() => {
                        formik.setFieldValue("isFlexibleDate", true);
                      }}
                      defaultChecked
                    />
                    <TCTLRadioButton
                      label="No"
                      name="isFlexibleDate"
                      color="blue"
                      onChange={() => {
                        formik.setFieldValue("isFlexibleDate", false);
                      }}
                    /> */}
                  <ThemeProvider value={SelectTheme}>
                    <Select
                      variant="standard"
                      label="Is your date flexible?*"
                      color="light-blue"
                      className="text-white"
                      onChange={(aOption) => {
                        formik.setFieldValue("isFlexibleDate", aOption);
                      }}
                    >
                      {displayYesNoOptions()}
                    </Select>
                  </ThemeProvider>
                  {/* </label> */}
                </div>
                <div className="flex text-white text-xs w-full lg:w-1/3 mt-7 lg:mt-0">
                  {/* <label className="label-check"> */}
                  {/* <div>Do you need transport?</div> */}
                  {/* <TCTLRadioButton
                      id="transportYes"
                      label="Yes"
                      name="isTransportNeeded"
                      color="blue"
                      onChange={() => {
                        formik.setFieldValue("isTransportNeeded", true);
                      }}
                    />
                    <TCTLRadioButton
                      id="transportNo"
                      label="No"
                      name="isTransportNeeded"
                      color="blue"
                      onChange={() => {
                        formik.setFieldValue("isTransportNeeded", false);
                      }}
                      defaultChecked
                    /> */}
                  <ThemeProvider value={SelectTheme}>
                    <Select
                      variant="standard"
                      label="Do you need transport?"
                      color="light-blue"
                      className="text-white  !min-w-[100px]"
                      onChange={(aOption) => {
                        formik.setFieldValue("isTransportNeeded", aOption);
                      }}
                    >
                      {displayYesNoOptions()}
                    </Select>
                  </ThemeProvider>
                  {/* </label> */}
                </div>
              </div>

              <div className="flex flex-col mt-7">
                <div>
                  {formik.values.isTransportNeeded === "Yes" ? (
                    <div className="">
                      <ThemeProvider value={InputTheme}>
                        <Input
                          autoCapitalize="off"
                          autoComplete="off"
                          autoCorrect="off"
                          id="address"
                          variant="standard"
                          color="light-blue"
                          label="Address/Hotel"
                          className="text-white text-xs"
                          {...formik.getFieldProps("address")}
                        />
                      </ThemeProvider>
                      {formik.touched.address && formik.errors.address ? (
                        <div className="text-xs text-yellow pt-2 w-full">
                          {formik.errors.address}
                        </div>
                      ) : null}
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
                <div className="mt-7">
                  <Textarea
                    autoComplete="off"
                    id="message"
                    variant="standard"
                    color="light-blue"
                    label="Message"
                    className="text-white text-xs"
                    labelProps={{
                      className:
                        "after:content[' '] after:block after:w-full after:absolute  peer-placeholder-shown:text-xs",
                    }}
                    {...formik.getFieldProps("message")}
                  />
                </div>
              </div>
              <div className="flex mt-7">
                {messageSubmitted ? (
                  <p className="text-sm text-yellow">Enquiry submitted.</p>
                ) : (
                  // <Button
                  //   type="submit"
                  //   size="lg"
                  //   color="blue"
                  //   className="form-button flex justify-center"
                  //   loading={bookingRequestIsSubmitting}
                  // >
                  //   Submit
                  // </Button>
                  <button
                    type="submit"
                    className="py-3 px-8 border text-white border-white rounded-3xl text-xs font-medium cursor-pointer hover:bg-white hover:text-blue ease-out duration-300 transition-all"
                  >
                    SUBMIT
                  </button>
                )}
              </div>
            </div>
          </form>
        )}
      </Formik>
      {/* <a
        id="whatsapp"
        href="https://wa.me/27789803335"
        target="_blank"
        onClick={() => {
          sendGAEvent("event", "whatsapp", {
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
        <p className="hover:text-gray-700">Contact us on WhatsApp</p>
      </a> */}
    </div>
  );
}
