"use client";

import { sendGAEvent } from "@next/third-parties/google";
import { useAppDispatch, useAppSelector } from "../lib/hooks";
import { postBookingRequest } from "../lib/features/contact/contactSlice";

import { Input } from "@material-tailwind/react";
import { Textarea } from "@material-tailwind/react";
import { Button, Select, Option } from "@material-tailwind/react";
import React, { useRef, useState } from "react";
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

  const displayOptions = (selectOptions: Array<any>) => {
    let options = selectOptions.slice().map((item, i) => {
      return (
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

  const subject = useRef<HTMLDivElement | null>(null);
  const name1 = useRef<HTMLDivElement | null>(null);
  const email = useRef<HTMLDivElement | null>(null);
  const phone = useRef<HTMLDivElement | null>(null);
  const numberOfPeople = useRef<HTMLDivElement | null>(null);

  const errorRefs = [
    { ref: subject, id: "subject" },
    { ref: name1, id: "name" },
    { ref: email, id: "email" },
    { ref: numberOfPeople, id: "numberOfPeople" },
    { ref: phone, id: "phone" },
  ];

  const onCountryCodeChange = (value) => {
    setCountryCallingCode(value);
  };

  return (
    <div className="contact-form">
      <div className="heading">
        <h2>Get in touch.</h2>
        <p className="form-description">
          Submit to enquire about a tour, transport or anything you&apos;d like
          to know. Looking forward to be your guide.
        </p>
      </div>
      <Formik
        initialValues={{
          subject: "",
          name: "",
          email: "",
          numberOfPeople: "",
          phone: "",
          date: new Date(),
          isFlexibleDate: true,
          isTransportNeeded: false,
          address: "",
          message: "",
        }}
        validationSchema={contactSchema}
        onSubmit={(values) => {
          let formattedValues: IBookingRequest = Object.assign({}, values, {
            date: moment(values.date).format("MMMM Do YYYY"),
            isFlexibleDate: values.isFlexibleDate ? "Yes" : "No",
            isTransportNeeded: values.isTransportNeeded ? "Yes" : "No",
            phone: countryCallingCode + values.phone,
          });

          dispatch(postBookingRequest(formattedValues));

          sendGAEvent("event", "submit_form", {
            action: "Form submit",
          });
        }}
      >
        {(formik) => (
          <form
            className="contact-form-inner relative"
            onSubmit={formik.handleSubmit}
          >
            <ScrollToErrors refs={errorRefs} />
            <div className="left-block">
              <div className="input-field-container" ref={subject}>
                <Select
                  variant="standard"
                  label="Select Tour*"
                  id="subject"
                  onChange={(aOption) => {
                    formik.setFieldValue("subject", aOption);
                  }}
                >
                  {displayOptions(selectOptions)}
                </Select>

                {formik.touched.subject && formik.errors.subject ? (
                  <div className="text-xs text-red-900 pt-2">
                    {formik.errors.subject}
                  </div>
                ) : null}
              </div>
              <div className="input-field-container" ref={name1}>
                <Input
                  autoComplete="off"
                  id="name"
                  variant="standard"
                  color="light-blue"
                  label="Name*"
                  className="input-field"
                  {...formik.getFieldProps("name")}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="text-xs text-red-900 pt-2">
                    {formik.errors.name}
                  </div>
                ) : null}
              </div>

              <div className="input-field-container" ref={phone}>
                <TCTLCountryCodeMobileNumberInput
                  onCountryCodeChange={onCountryCodeChange}
                  {...formik.getFieldProps("phone")}
                />

                {formik.touched.phone && formik.errors.phone ? (
                  <div className="text-xs text-red-900 pt-2 w-full">
                    {formik.errors.phone}
                  </div>
                ) : null}
              </div>
              <div className="input-field-container email" ref={email}>
                <Input
                  autoComplete="off"
                  type="email"
                  variant="standard"
                  color="light-blue"
                  label="Email*"
                  className="input-field"
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-xs text-red-900 pt-2">
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>
              <div
                className="input-field-container message"
                ref={numberOfPeople}
              >
                <Select
                  variant="standard"
                  label="Number of people*"
                  onChange={(aOption) => {
                    formik.setFieldValue("numberOfPeople", aOption);
                  }}
                >
                  {displayNumPeopleOptions()}
                </Select>
              </div>
              {formik.touched.numberOfPeople && formik.errors.numberOfPeople ? (
                <div className="text-xs text-red-900 pt-2 font-medium">
                  {formik.errors.numberOfPeople}
                </div>
              ) : null}
            </div>
            <div className="right-block">
              <div className="input-field-container date">
                <p>Preferred date:</p>

                <DatePicker
                  selected={formik.values.date}
                  onChange={(val) => {
                    formik.setFieldValue("date", val);
                  }}
                  className="input-field"
                />
              </div>
              <div className="input-field-container">
                <label className="label-check">
                  Is your date flexible?
                  <TCTLRadioButton
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
                  />
                </label>
              </div>
              <div className="input-field-container">
                <label className="label-check">
                  Do you need transport?
                  <TCTLRadioButton
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
                  />
                </label>
              </div>
              {formik.values.isTransportNeeded ? (
                <div className="input-field-container address">
                  <Input
                    autoCapitalize="off"
                    autoComplete="off"
                    autoCorrect="off"
                    id="address"
                    variant="standard"
                    color="light-blue"
                    label="Address/Hotel"
                    className="input-field"
                    {...formik.getFieldProps("address")}
                  />
                  {formik.touched.address && formik.errors.address ? (
                    <div className="text-xs text-red-900 pt-2 w-full">
                      {formik.errors.address}
                    </div>
                  ) : null}
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
                  {...formik.getFieldProps("message")}
                />
              </div>
              <div className="input-field-container">
                {messageSubmitted ? (
                  <p className="text-white text-base font-bold">
                    Enquiry submitted.
                  </p>
                ) : (
                  <Button
                    type="submit"
                    size="lg"
                    color="blue"
                    className="form-button flex justify-center"
                    loading={bookingRequestIsSubmitting}
                  >
                    Submit
                  </Button>
                )}
              </div>
            </div>
          </form>
        )}
      </Formik>
      <a
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
      </a>
    </div>
  );
}
