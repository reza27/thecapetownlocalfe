"use client";

import Link from "next/link";
import ImageSlider from "../../components/image-slider";
import Image from "next/image";
import { Button } from "@material-tailwind/react";
import $ from "jquery";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import React, { useState, useEffect } from "react";
import { DocumentRenderer } from "@keystone-6/document-renderer";
const ContactForm = dynamic(() => import("../../components/contact-form"), {
  ssr: false,
});
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMountainSun,
  faMountainCity,
  faClock,
  faTag,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

import Head from "next/head";
import { Metadata } from "next";
import Tours from "../tours/tours-page";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Services",
};

// type About = {
//   id: String,
//   title: String,
//   featureImage: String,
//   content: JSON,
//   guides: [Guide],
//   guidesCount: Int
// };

const guideImageStyle = {
  objectFit: "cover",
  height: "400px",
  width: "100%",
  //padding:'15px',
  overflow: "hidden",
};

const affiliateImageStyle = {
  objectFit: "contain",
  height: "120px",
  width: "120px",
  padding: "5px",
  overflow: "hidden",
};

export default function Services(aData) {
  const data = aData.data.props.data;

  console.log("services data", data);
  const services = data.services[0];
  const featureImageStyle = {
    objectFit: "cover",
    height: "500px",
    width: "100%",
    overflow: "hidden",
  };

  const activity = data.activities[0];

  const getFormOptions = (activity) => {
    let ItemsArr = [];
    let activityItemHeadings = activity?.activityItemHeading;
    for (var i = 0; i < activityItemHeadings?.length; i++) {
      for (var j = 0; j < activityItemHeadings[i].activityItems.length; j++) {
        ItemsArr.push(activityItemHeadings[i].activityItems[j]);
      }
    }
    return ItemsArr;
  };

  useEffect(() => {
    const handleScroll = (event) => {
      //console.log('window.scrollY', window.scrollY);
      //if (window.scrollY > 0) {
      $("#navbar").addClass("scrolled");
      // }
      // else {
      //   $('#navbar').removeClass('scrolled')
      // }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // <div className="header">
  //   <h1 className="drop-shadow-md">{data.about.title}</h1>
  //
  // <Image
  //   loader={ImageLoader}
  //   src={data.about.featureImage.url}
  //    width={100}
  //    height={100}
  //    style={featureImageStyle}/>
  // </div>

  return (
    <>
      <Head>
        <title>Services - The Cape Town Local</title>
      </Head>
      <div id="services">
        <h2 className="main-heading">Services</h2>
        <div className="tab-panels">
          {services?.serviceItems.map((serviceItem) => (
            <div className="panel-outer" key={serviceItem.id}>
              <div key={serviceItem.id} className="panel-inner">
                <div className="tab-panel">
                  <h2>{serviceItem.title}</h2>
                  <div className="doc">
                    <DocumentRenderer document={serviceItem.content.document} />
                  </div>
                  <div className="price">
                    <span className="price-black">
                      <FontAwesomeIcon icon={faTag} />{" "}
                    </span>
                    {serviceItem.price}
                  </div>

                  <Button
                    className="enquire-button"
                    onClick={() => {
                      //  document.getElementById('tour-contact-form').scrollIntoView();
                      $("html").animate(
                        {
                          scrollTop: $("#tour-contact-form").offset().top - 100,
                        },
                        1000
                      );
                      //var top = document.getElementById('tour-contact-form').offsetTop + $('#tour-contact-form').height() - 150; //Getting Y of target element
                      //window.scrollTo(0, top);
                    }}
                  >
                    Enquire now
                  </Button>
                </div>
              </div>
              <div className="panel-images">
                <ImageSlider images={serviceItem.images} id={serviceItem.id} />
              </div>
            </div>
          ))}
        </div>
        <div id="tour-contact-form" className="tour-contact-form">
          <ContactForm selectOptions={getFormOptions(activity)} />
        </div>
      </div>
    </>
  );
}
