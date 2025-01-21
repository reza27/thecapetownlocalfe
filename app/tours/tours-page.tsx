"use client";

import { Button } from "@material-tailwind/react";

import React, { useState, useEffect, useRef } from "react";
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
import { SliderContext } from "../../lib/contexts/slider-context";
import { getFormOptions } from "../../components/forms/getFormOptions";
import ImageScroller from "../../components/image-scroller";

export const metadata: Metadata = {
  title: "Tours",
};
export default function Tours({ data }) {
  let firstTab =
    data.props.data.activities[0]?.activityItemHeading[0].title.toLowerCase();
  const [tab, setTab] = useState(firstTab);
  const [open, setOpen] = useState(1);
  const [scrollYPos, setScrollYPos] = useState<number>(0);

  const contactRef = useRef<HTMLDivElement | null>(null);
  const imageScrollerRefs = useRef<
    Array<{ imageScrollerRef: HTMLDivElement | null; id: string }>
  >([]);

  const HEADER_OFFSET = 110;
  const anchorRefs = useRef<
    Array<{ anchorRef: HTMLDivElement | null; id: string }>
  >([]);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  function Icon({ id, open }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`${
          id === open ? "rotate-180" : ""
        } h-5 w-5 transition-transform`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    );
  }

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

  const selectTabAndScrollToAnchor = () => {
    const url = new URL(window.location.href);
    const tab1 = url.searchParams.get("tab")?.toLowerCase();
    const anchor = url.searchParams.get("anchor")?.toLowerCase();

    if (tab1) {
      setTab(tab1);
      if (anchor) {
        const element = anchorRefs.current.find((obj) => obj.id === anchor);
        const elementPosition = element?.anchorRef?.getBoundingClientRect().top;
        const offsetPosition = elementPosition
          ? elementPosition + window.scrollY - HEADER_OFFSET
          : 0;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  useEffect(() => {
    const DELAY: number = 300;
    setTimeout(selectTabAndScrollToAnchor, DELAY);

    if (typeof window === "undefined") {
      return;
    }

    function onScroll(e) {
      setScrollYPos((scrollYPos) => {
        let ypos = scrollYPos + e.deltaY > 0 ? scrollYPos + e.deltaY : 0;
        return ypos;
      });
    }

    window.addEventListener("mousewheel", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Head>
        <title>Tours - The Cape Town Local</title>
      </Head>
      <div id="tours">
        {data.props.data.activities.map((item) => (
          <div key={item.id}>
            {/* <div className="header">
              <h1>Tours</h1>
              <p></p>

            </div> */}
            {/* <Tabs item={item} /> */}
            <div className="relative pt-32 px-16">
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
                      <div className="flex mb-12" key={activityItem.id}>
                        <div className="w-1/2">
                          <div className="text-black"> {scrollYPos}</div>
                          <SliderContext.Provider value={activityItem.images}>
                            {/*  <Slider
                              id={activityItem.id}
                              containerClass="image-slider"
                              panelClass="panel-images-slider"
                              type="tours"
                            > */}
                            <ImageScroller
                              // ref={(ref) => {
                              //   console.log("imgRef", index);

                              //   return (imageScrollerRefs.current[index] = {
                              //     imageScrollerRef: ref,
                              //     id: "tour" + index,
                              //   });
                              // }}
                              scrollYPos={scrollYPos}
                            >
                              <TourImages />
                            </ImageScroller>
                            {/* </Slider>*/}
                          </SliderContext.Provider>
                        </div>
                        {/*<div key={activityItem.id} className="panel-inner">
                          <div
                            className="tab-panel"
                            id={activityItem.anchor.toLowerCase()}
                            ref={(ref) => {
                              anchorRefs.current[index] = {
                                anchorRef: ref,
                                id: activityItem.anchor.toLowerCase(),
                              };
                            }}
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
                            </div> */}
                        {/* <Button
                              className="enquire-button"
                              onClick={() => {
                                const elementPosition =
                                  contactRef.current?.getBoundingClientRect()
                                    .top;
                                const offsetPosition = elementPosition
                                  ? elementPosition +
                                    window.scrollY -
                                    HEADER_OFFSET
                                  : 0;

                                window.scrollTo({
                                  top: offsetPosition,
                                  behavior: "smooth",
                                });
                              }}
                            >
                              Enquire now
                            </Button>
                          </div>
                        </div> */}
                      </div>
                    )
                  )}
                </div>
              ))}

              <div
                ref={contactRef}
                id="tour-contact-form"
                className="tour-contact-form"
              >
                <ContactForm selectOptions={getFormOptions(item)} />
              </div>
              {item.faq.length > 0 ? (
                <div className="faqs">
                  <h2>FAQs</h2>
                  <div className="faqs-accordion">
                    {item.faq.map((faq, i) => (
                      <Accordion
                        open={open === i + 1}
                        key={faq.id}
                        icon={<Icon id={1} open={open} />}
                      >
                        <AccordionHeader
                          key={faq.question}
                          onClick={() => handleOpen(i + 1)}
                        >
                          {faq.question}
                        </AccordionHeader>
                        <AccordionBody key={faq.answer}>
                          <DocumentRenderer document={faq.answer.document} />
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
