"use client";

import * as Yup from "yup";

import { sendGAEvent } from "@next/third-parties/google";
import { useAppDispatch, useAppSelector } from "../lib/hooks";
import { postBookingRequest } from "../lib/features/contact/contactSlice";

import { useCountries } from "use-react-countries";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";

import { Input } from "@material-tailwind/react";
import { Textarea } from "@material-tailwind/react";
import { Button, Select, Option } from "@material-tailwind/react";
import React, { useEffect } from "react";
import DatePicker from "react-datepicker";
import Image from "next/image";
import ImageLoader from "../components/image-loader";
import { IBookingRequest } from "../types/IBookingRequest";
import { Formik } from "formik";
import moment from "moment";
import { TCTLRadioButton } from "./TCTLRadioButton";

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

  const dispatch = useAppDispatch();

  const { selectOptions } = props;
  const { countries } = useCountries();
  const [country, setCountry] = React.useState(0);
  const { name, flags, countryCallingCode } = countries[country];
  const SOUTH_AFRICA = 204;

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

  useEffect(() => {
    setCountry(SOUTH_AFRICA);
  }, []);

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
        validationSchema={Yup.object({
          subject: Yup.string().required("Subject is required"),
          name: Yup.string().required("Name is required"),
          phone: Yup.string().min(7, "Invalid mobile number"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          numberOfPeople: Yup.string().required("Number of people is required"),
          date: Yup.date().default(() => new Date()),
          isFlexibleDate: Yup.boolean(),
          isTransportNeeded: Yup.boolean(),
          address: Yup.string(),
          message: Yup.string(),
        })}
        onSubmit={(values) => {
          let formattedValues: IBookingRequest = Object.assign({}, values, {
            date: moment(values.date).format("MMMM Do YYYY"),
            isFlexibleDate: values.isFlexibleDate ? "Yes" : "No",
            isTransportNeeded: values.isTransportNeeded ? "Yes" : "No",
          });

          dispatch(postBookingRequest(formattedValues));

          sendGAEvent("event", "submit_form", {
            action: "Form submit",
          });
        }}
      >
        {(formik) => (
          <form className="contact-form-inner" onSubmit={formik.handleSubmit}>
            <div className="left-block">
              <div className="input-field-container">
                <Select
                  variant="standard"
                  label="Select Tour"
                  id="subject"
                  onChange={(aOption) => {
                    console.log(aOption);
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
              <div className="input-field-container">
                <Input
                  autoComplete="off"
                  id="name"
                  required
                  variant="standard"
                  color="light-blue"
                  label="Name"
                  className="input-field"
                  {...formik.getFieldProps("name")}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="text-xs text-red-900 pt-2">
                    {formik.errors.name}
                  </div>
                ) : null}
              </div>

              <div className="input-field-container">
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
                              <span className="ml-auto">
                                {countryCallingCode}
                              </span>
                            </MenuItem>
                          );
                        })}
                    </MenuList>
                  </Menu>
                  <Input
                    autoComplete="off"
                    type="tel"
                    required
                    id="phone"
                    variant="standard"
                    color="light-blue"
                    label="Mobile number"
                    {...formik.getFieldProps("phone")}
                    className="input-field country-input"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    containerProps={{
                      className: "min-w-0",
                    }}
                  />
                </div>
                {formik.touched.phone && formik.errors.phone ? (
                  <div className="text-xs text-red-900 pt-2 w-full">
                    {formik.errors.phone}
                  </div>
                ) : null}
              </div>
              <div className="input-field-container email">
                <Input
                  autoComplete="off"
                  required
                  type="email"
                  id="email"
                  variant="standard"
                  color="light-blue"
                  label="Email"
                  className="input-field"
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-xs text-red-900 pt-2">
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>
              <div className="input-field-container message">
                <Select
                  variant="standard"
                  label="Number of people"
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
                  className="input-field"
                />
              </div>
              <div className="input-field-container">
                <label className="label-check">
                  Is your date flexible?
                  <TCTLRadioButton
                    label="Yes"
                    name="isFlexibleDate"
                    onChange={() => {
                      formik.setFieldValue("isFlexibleDate", true);
                    }}
                    defaultChecked
                  />
                  <TCTLRadioButton
                    label="No"
                    name="isFlexibleDate"
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
                    onChange={() => {
                      formik.setFieldValue("isTransportNeeded", true);
                    }}
                  />
                  <TCTLRadioButton
                    id="transportNo"
                    label="No"
                    name="isTransportNeeded"
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
                <Button type="submit" className={"form-button"}>
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
        <p>Reach out via WhatsApp</p>
      </a>
    </div>
  );
}
