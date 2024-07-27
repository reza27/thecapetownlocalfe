"use client";

import { Button } from "@material-tailwind/react";
import $ from "jquery";
import { DocumentRenderer } from "@keystone-6/document-renderer";
const ContactForm = dynamic(() => import("../../components/contact-form"), {
  ssr: false,
});

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";

import Head from "next/head";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import Slider from "../../components/slider";
import { SliderContext } from "../../lib/slider-context";
import TourImages from "../../components/tour-images";

export const metadata: Metadata = {
  title: "Services",
};

const guideImageStyle = {
  objectFit: "cover",
  height: "400px",
  width: "100%",
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
                      $("html").animate(
                        {
                          scrollTop: $("#tour-contact-form").offset().top - 100,
                        },
                        1000
                      );
                    }}
                  >
                    Enquire now
                  </Button>
                </div>
              </div>
              <div className="panel-images">
                <SliderContext.Provider value={serviceItem.images}>
                  <Slider
                    id={serviceItem.id}
                    containerClass="image-slider"
                    panelClass="panel-images-slider"
                    type="tours"
                  >
                    <TourImages />
                  </Slider>
                </SliderContext.Provider>
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
