"use client";

import { Button } from "@material-tailwind/react";
import $ from "jquery";

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
import { faClock, faTag } from "@fortawesome/free-solid-svg-icons";

import Head from "next/head";
import dynamic from "next/dynamic";

import { Metadata } from "next";
import Slider from "../../components/slider";
import TourImages from "../../components/tour-images";
import { SliderContext } from "../../lib/slider-context";

export const metadata: Metadata = {
  title: "Tours",
};
export default function Tours(aData) {
  const data = aData.data.props.data;

  const featureImageStyle = {
    objectFit: "cover",
    height: "500px",
    width: "100%",
    overflow: "hidden",
  };

  const panelImageStyle = {
    objectFit: "cover",
    height: "300px",
    width: "100%",
  };

  let firstTab = data.activities[0]?.activityItemHeading[0].title.toLowerCase();
  const [tab, setTab] = useState(firstTab);
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const Tabs = (aItem) => {
    const item = aItem.item;
    if (item.activityItemHeading?.length > 1) {
      return (
        <div className="tabs">
          <ul className="ul-tabs">
            {item.activityItemHeading.map((activityItemHeading, index) => (
              <li
                key={activityItemHeading.id}
                className={
                  tab == activityItemHeading.title.toLowerCase()
                    ? "selected"
                    : ""
                }
                onClick={() => setTab(activityItemHeading.title.toLowerCase())}
              >
                <h2>
                  <span>{activityItemHeading.title}</span>
                </h2>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  };

  const getFormOptions = (activity) => {
    let ItemsArr: any = [];
    let activityItemHeadings = activity.activityItemHeading;
    for (var i = 0; i < activityItemHeadings.length; i++) {
      for (var j = 0; j < activityItemHeadings[i].activityItems.length; j++) {
        ItemsArr.push(activityItemHeadings[i].activityItems[j]);
      }
    }
    return ItemsArr;
  };

  useEffect(() => {
    function selectTab() {
      var url = new URL(window.location.href);
      var tab1 = url.searchParams.get("tab")?.toLowerCase();
      var anchor = url.searchParams.get("anchor")?.toLowerCase();

      if (tab1) {
        setTab(tab1);
        setTimeout(() => {
          $("html").animate(
            {
              scrollTop: $("#" + anchor).offset().top - 100,
            },
            1000
          );
        }, 300);
      }
    }
    setTimeout(selectTab, 300);
  }, []);
  return (
    <>
      <Head>
        <title>Tours - The Cape Town Local</title>
      </Head>
      <div id="tours">
        {data.activities.map((item) => (
          <div key={item.id}>
            <div className="header">
              <h1>Tours</h1>
              <p></p>
            </div>
            <Tabs item={item} />
            <div className="tab-panels">
              {item.activityItemHeading.map((activityItemHeading) => (
                <div
                  key={activityItemHeading.id}
                  className={
                    (tab == activityItemHeading.title.toLowerCase()
                      ? "selected"
                      : "") + " panel w-full"
                  }
                  data-index={activityItemHeading.id}
                >
                  {activityItemHeading.activityItems.map(
                    (activityItem, index) => (
                      <div className="panel-outer" key={activityItem.id}>
                        <div key={activityItem.id} className="panel-inner">
                          <div
                            className="tab-panel"
                            id={activityItem.anchor.toLowerCase()}
                          >
                            <h2>{activityItem.title}</h2>
                            <div className="doc">
                              <DocumentRenderer
                                document={activityItem.content.document}
                              />
                            </div>
                            <div className="price">
                              <span className="price-black">
                                <FontAwesomeIcon icon={faTag} />{" "}
                              </span>
                              {activityItem.price}
                            </div>
                            <div className="duration">
                              <span>
                                <FontAwesomeIcon icon={faClock} />
                              </span>
                              {activityItem.duration}
                            </div>
                            <Button
                              className="enquire-button"
                              onClick={() => {
                                $("html").animate(
                                  {
                                    scrollTop:
                                      $("#tour-contact-form").offset().top -
                                      100,
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
                          <SliderContext.Provider value={activityItem.images}>
                            <Slider
                              id={activityItem.id}
                              containerClass="image-slider"
                              panelClass="panel-images-slider"
                              type="tours"
                            >
                              <TourImages />
                            </Slider>
                          </SliderContext.Provider>
                        </div>
                      </div>
                    )
                  )}
                </div>
              ))}

              <div id="tour-contact-form" className="tour-contact-form">
                <ContactForm selectOptions={getFormOptions(item)} />
              </div>
              {item.faq.length > 0 ? (
                <div className="faqs">
                  <h2>FAQs</h2>
                  <div className="faqs-accordion">
                    {item.faq.map((faq, i) => (
                      <Accordion open={open === i + 1} key={faq.id}>
                        <AccordionHeader
                          key={faq.question}
                          onClick={() => handleOpen(i + 1)}
                        >
                          {faq.question}
                        </AccordionHeader>
                        <AccordionBody key={faq.answer}>
                          {faq.answer}
                        </AccordionBody>
                      </Accordion>
                    ))}
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
