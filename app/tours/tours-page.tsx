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
import { useAppDispatch } from "../../lib/hooks";
import { setDisablePageScroll } from "../../lib/features/tours/toursSlice";
import { gsap, ScrollTrigger, ScrollToPlugin } from "gsap/all"; // <-- import GSAP
import { useGSAP } from "@gsap/react"; // <-- import the hook from our React package
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export const metadata: Metadata = {
  title: "Tours",
};
export default function Tours({ data }) {
  const dispatch = useAppDispatch();

  let firstTab =
    data.props.data.activities[0]?.activityItemHeading[0].title.toLowerCase();
  const [tab, setTab] = useState(firstTab);
  const [open, setOpen] = useState(1);
  const [scrollYPos, setScrollYPos] = useState<Array<number>>([0, 0]);
  const [scrollPageYPos, setScrollPageYPos] = useState<number>(0);

  const currentScrollIndex = useRef<number>(0);
  const canPageScroll = useRef<boolean>(false);
  const pageWrapper = useRef<HTMLDivElement>(null);

  const [imageScrollerHeight, setImageScrollerHeight] = useState<
    number | undefined
  >(0);

  const contactRef = useRef<HTMLDivElement | null>(null);
  const imageScrollerRefs = useRef<
    Array<{ imageScrollerRef: HTMLDivElement | null; id: string }>
  >([]);
  const anchorRefs = useRef<
    Array<{ anchorRef: HTMLDivElement | null; id: string }>
  >([]);

  const HEADER_OFFSET = 110;

  const getActivityItems = () => {
    return data.props.data.activities.flatMap((item) => {
      return item.activityItemHeading.flatMap((activityItemHeading) => {
        return activityItemHeading.activityItems.flatMap((activityItem) => {
          return activityItem;
        });
      });
    });
  };
  const getWindowW = () => {
    if (typeof window === "undefined") {
      return 0;
    }
    return window.innerWidth < 768;
  };

  useGSAP(
    () => {
      console.clear();

      gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

      const container = document.querySelector(".container");
      const sections = gsap.utils.toArray(".section");
      const tl = gsap.timeline({
        defaults: {
          ease: "none",
        },
        scrollTrigger: {
          trigger: ".wrapper",
          start: "140 140",
          end: "+=8000",
          pin: true,
          scrub: true,
          //markers: true,
          // pinSpacer: ".spacer",
        },
      });

      sections.forEach((section: any, i) => {
        const panels = gsap.utils.toArray(".panel", section);
        tl.to(
          section,
          {
            y: section.clientHeight - section.scrollHeight + 20,
            duration: panels.length * 0.5,
          },
          "section-" + i
        );
        if (sections[i + 1]) {
          tl.to(".content", {
            yPercent: -100 * (i + 1),
          });
        }
      });

      // const buttons = gsap.utils.toArray(".section-btn");
      // buttons.forEach((btn, i) => {
      //   btn.addEventListener("click", () => {
      //     gsap.to(window, {
      //       scrollTo: {
      //         y: tl.scrollTrigger.labelToScroll("section-" + i)
      //       },
      //       ease: "power1.inOut"
      //     });
      //   });
      // });

      // const overflowBtn = document.getElementById("btn-overflow");
      // overflowBtn.addEventListener("click", () =>
      //   container.classNameList.toggle("no-overflow")
      // );
    },
    { scope: pageWrapper }
  );

  useEffect(() => {
    const DELAY: number = 300;
    //dispatch(setDisablePageScroll(true));

    //currentScrollIndex.current = 0;

    //document.body.style.overflow = "hidden";

    if (typeof window === "undefined") {
      return;
    }

    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-wrapper px-4 md:px-16" ref={pageWrapper}>
      {/*      
      <section className="section">
        <div className="container ">
          
        </div>
      </section>  */}

      <div className="wrapper flex justify-center items-center">
        <div className="container no-overflow">
          <div className="content">
            <div className="w-full flex">
              <section className="h-full">
                {data.props.data.activities.map((item) => (
                  <div className="relative">
                    {item.activityItemHeading.map(
                      (activityItemHeading, index) => (
                        <div
                          key={activityItemHeading.id}
                          data-index={activityItemHeading.id}
                        >
                          {activityItemHeading.activityItems.map(
                            (activityItem, index) => (
                              <div
                                className="flex flex-col"
                                key={activityItem.id}
                              >
                                <div
                                  className="flex flex-col md:flex-row"
                                  style={{
                                    flexDirection: getWindowW()
                                      ? "column"
                                      : index % 2 === 0
                                      ? "row"
                                      : "row-reverse",
                                  }}
                                >
                                  <div className="w-full md:w-1/2 text-black p-10">
                                    <h2>{activityItem.title}</h2>
                                    <div className="doc">
                                      <DocumentRenderer
                                        document={activityItem.content.document}
                                      />
                                    </div>
                                    <div className="price">
                                      <span className="price-black">
                                        <FontAwesomeIcon icon={faTag} />
                                      </span>
                                      {activityItem.price}
                                    </div>
                                    <div>{activityItem.duration}</div>
                                  </div>
                                  <div
                                    className="w-full md:w-1/2 overflow-hidden rounded-3xl"
                                    id={activityItem.id}
                                    ref={(ref) => {
                                      imageScrollerRefs.current[index] = {
                                        imageScrollerRef: ref,
                                        id: "tour" + index,
                                      };
                                    }}
                                  >
                                    <SliderContext.Provider
                                      value={activityItem.images}
                                    >
                                      <TourImages />
                                    </SliderContext.Provider>
                                  </div>
                                </div>
                                {/* <div className="spacer h-20"></div> */}
                              </div>
                            )
                          )}
                        </div>
                      )
                    )}
                    <div className="w-full flex mt-10">
                      <section className="section">
                        <div
                          ref={contactRef}
                          id="tour-contact-form"
                          className="tour-contact-form"
                        >
                          <ContactForm selectOptions={getFormOptions(item)} />
                        </div>
                      </section>
                    </div>
                  </div>
                ))}
                {/* <div className="panel bg-green-300 center">
                  <h3>
                    Section 1<br />
                    Panel 1
                  </h3>
                </div>
                <div className="panel bg-green-300 center">
                  <h3>
                    Section 1<br />
                    Panel 2
                  </h3>
                </div>
                <div className="panel bg-green-300 center">
                  <h3>
                    Section 1<br />
                    Panel 3
                  </h3>
                </div> */}
                {/* </section>
              <div className="text-black w-1/2">text</div>
            </div>
            <div className="w-full flex mt-[112px] h-[600px]">
              <section className="section w-1/2 h-full">
                <div className="panel bg-blue-gray-300 center">
                  <h3>
                    Section 2<br />
                    Panel 1
                  </h3>
                </div>
                <div className="panel bg-blue-gray-300 center">
                  <h3>
                    Section 2<br />
                    Panel 2
                  </h3>
                </div>
                <div className="panel bg-blue-gray-300 center">
                  <h3>
                    Section 2<br />
                    Panel 3
                  </h3>
                </div>
              </section>
              <div className="text-black w-1/2">text</div>
            </div>*/}
              </section>
            </div>
          </div>
        </div>

        {/* <div className="buttons center">
          <button className="section-btn">Section 1</button>
          <button className="section-btn">Section 2</button>
          <button className="section-btn">Section 3</button>
          <button id="btn-overflow">Toggle Overflow</button>
        </div> */}
      </div>
    </div>
  );
}
