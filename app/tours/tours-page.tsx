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
import { TCPTLButton } from "../../components/tcptl-button";
import parse from "html-react-parser";
import TourThumbnails from "../../components/tour-thumbnails";
import ColumnSlider from "../../components/column-slider";
import { snap } from "gsap";
import SliderV2 from "../../components/sliderv2";

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
  const [isMobile, setIsMobile] = useState(false);
  const [screenWidth, setScreenWidth] = useState<number>(400);

  const pageWrapper = useRef<HTMLDivElement>(null);

  const [imageScrollerHeight, setImageScrollerHeight] = useState<
    number | undefined
  >(0);

  const contactRef = useRef<HTMLDivElement | null>(null);
  const imageScrollerRefs = useRef<
    Array<{ imageScrollerRef: HTMLDivElement | null; id: string }>
  >([]);
  const sectionRefs = useRef<
    Array<{ sectionRef: HTMLDivElement | null; id: string }>
  >([]);
  const anchorRefs = useRef<
    Array<{ anchorRef: HTMLDivElement | null; id: string }>
  >([]);

  const HEADER_OFFSET = 110;
  const THUMB_SECTION_HEIGHT = 350;

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
      gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

      let tl;

      const initTimeline = () => {
        const buttons: Array<any> = gsap.utils.toArray(".book-btn");

        const container = document.querySelector(".container");
        const sections = gsap.utils.toArray(".section");

        gsap.set(".wrapper", { marginBottom: "-156px" });

        tl = gsap.timeline({
          defaults: {
            ease: "none",
          },

          scrollTrigger: {
            trigger: ".wrapper",
            start: "140 140",
            end: "+=6000",
            pin: true,
            scrub: true,
            invalidateOnRefresh: true,
            onUpdate: () => {
              console.log("scrub complete", tl.currentLabel());
            },

            // snap: {
            //   snapTo: 1 / (sections.length - 1),
            //   duration: 2,
            //   delay: 0.1,
            //   ease: "power1.inOut",
            // },
            //markers: true,
          },
        });

        // buttons.forEach((btn: any, i) => {
        //   btn.addEventListener("click", (e: Event) => {
        //     e.preventDefault();
        //     gsap.to(window, {
        //       duration: 2,

        //       scrollTo: {
        //         y: tl.scrollTrigger?.labelToScroll("section-2"),
        //       },
        //       ease: "power1.inOut",
        //     });
        //   });
        // });
        console.log("sections", sections);
        sections.forEach((section: any, i) => {
          const panels = gsap.utils.toArray(".panel", section);
          console.log("section client height", section.clientHeight);
          console.log("section scroll height", section.scrollHeight);

          console.log("panel", panels);
          // panels.forEach((panel) => tl.addLabel("panel" + 1));

          tl.to(
            section,

            {
              y: section.clientHeight - section.scrollHeight,
              duration: panels.length * 0.5,
            },
            "section-" + i
          );

          if (sections[i + 1]) {
            const spotlight = document.querySelector("#spotlight" + i);
            const spotlightC = document.querySelector(
              "#spotlight-container" + i
            );

            tl.to(
              spotlight,
              {
                y: THUMB_SECTION_HEIGHT - THUMB_SECTION_HEIGHT / panels.length,
                duration: panels.length * 0.5,
                // onUpdate: (obj) => {
                //   console.log("complete!");
                //   console.log(
                //     spotlight?.getBoundingClientRect().y! -
                //       spotlightC?.getBoundingClientRect().y!
                //   );
                // },
              },
              "section-" + i
            );

            tl.to(".content", {
              yPercent: -100 * (i + 1),
            });
          }
        });
      };

      //initTimeline();

      let mm = gsap.matchMedia();

      mm.add(
        {
          isMobile: "(max-width:1024px)",
          isDesktop: "(min-width:1025px)",
        },
        (context) => {
          let { isMobile, isDesktop } = context.conditions;
          if (isMobile) {
            setIsMobile(true);
            gsap.set(".wrapper", { marginBottom: "0px" });
          }

          if (isDesktop) {
            setIsMobile(false);
            gsap.set(".wrapper", { marginBottom: "-156px" });

            initTimeline();

            // }, 1000);
            console.log("desktop", tl);
          }
        }
      );

      const scrollToForm = (e) => {
        e.preventDefault();
        if (isMobile) {
          gsap.to(window, {
            duration: 2,

            scrollTo: {
              y: "#tour-contact-form",
              offsetY: 100,
            },
            ease: "power1.inOut",
          });
        } else {
          gsap.to(window, {
            duration: 2,

            scrollTo: {
              y: tl.scrollTrigger?.labelToScroll("section-2"),
            },
            ease: "power1.inOut",
          });
        }
      };

      const buttons = gsap.utils.toArray(".book-btn");
      buttons.forEach((btn: any, i) => {
        btn.addEventListener("click", scrollToForm); // (e: Event) => {
        // e.preventDefault();
        // gsap.to(window, {
        //   duration: 2,

        //   scrollTo: {
        //     y: tl.scrollTrigger?.labelToScroll("section-2"),
        //   },
        //   ease: "power1.inOut",
        // });
        // });
      });

      // sections.forEach((section: any, i) => {
      //   const panels = gsap.utils.toArray(".panel", section);

      //   tl.to(
      //     section,
      //     {
      //       y: section.clientHeight - section.scrollHeight,
      //       duration: panels.length * 0.5,
      //     },
      //     "section-" + i
      //   );

      //   if (sections[i + 1]) {
      //     const spotlight = document.querySelector("#spotlight" + i);
      //     tl.to(
      //       spotlight,
      //       {
      //         y: THUMB_SECTION_HEIGHT - THUMB_SECTION_HEIGHT / panels.length,
      //         duration: panels.length * 0.5,
      //       },
      //       "section-" + i
      //     );

      //     tl.to(".content", {
      //       yPercent: -100 * (i + 1),
      //     });
      //   }
      // });
      return () => {
        buttons.forEach((btn: any, i) => {
          btn.addEventListener("click", scrollToForm); // (e: Event) => {
        });
      };
    },
    { dependencies: [isMobile], revertOnUpdate: true, scope: pageWrapper }
  );

  // const activityStyleOuterCss = (index) => {

  // isMobile ? "w-full xl:w-1/2 text-black pt-10 flex px-6 2xl:px-0 flex-col"  : index % 2 === 0 ? "w-full xl:w-1/2 text-black pt-10 flex px-6 2xl:px-0" :

  // }

  useEffect(() => {
    const DELAY: number = 300;

    if (typeof window === "undefined") {
      return;
    }

    window.scrollTo(0, 0);

    setScreenWidth(window.innerWidth);

    function autoResize() {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener("resize", autoResize);

    return () => window.removeEventListener("resize", autoResize);
  }, []);

  return (
    <div className="page-wrapper" ref={pageWrapper}>
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
                                  className="flex flex-col xl:flex-row lg:pb-12 column"
                                  style={{
                                    flexDirection: isMobile
                                      ? "column"
                                      : index % 2 === 0
                                      ? "row-reverse"
                                      : "row",
                                  }}
                                >
                                  <div
                                    className="w-full xl:w-1/2 text-black pt-10 flex px-0 lg:px-6 2xl:px-0 flex-col"
                                    style={{
                                      flexDirection: isMobile
                                        ? "column"
                                        : index % 2 === 0
                                        ? "row-reverse"
                                        : "row",
                                    }}
                                  >
                                    <div className="flex flex-col">
                                      <h2 className="text-4xl xl:text-6xl tracking-tighter">
                                        {parse(activityItem.title)}
                                      </h2>

                                      <div className="rounded-3xl h-20 xl:h-24 flex justify-center items-center font-semibold overflow-hidden mt-8 w-3/4 xl:w-[340px] max-w-[260px] xl:max-w-[420px]">
                                        <div className="bg-blue text-powder-blue w-1/2 h-full flex flex-col justify-center items-start pl-5">
                                          <span className="text-2xl xl:text-4xl text-left font-semibold tracking-tighter ">
                                            {activityItem.price}
                                          </span>
                                          <span className="text-xs xl:text-sm tracking-tighter">
                                            Tour Cost
                                          </span>
                                        </div>
                                        <div className="w-1/2 bg-gray-100 h-full flex flex-col justify-center items-start pl-5">
                                          <span className="text-2xl xl:text-4xl text-blue text-left tracking-tight font-semibold">
                                            {activityItem.duration}
                                          </span>
                                          <span className="text-xs xl:text-sm text-black tracking-tight">
                                            Tour Time
                                          </span>
                                        </div>
                                      </div>
                                      <div className="doc mt-8">
                                        <DocumentRenderer
                                          document={
                                            activityItem.content.document
                                          }
                                        />
                                      </div>

                                      <TCPTLButton
                                        fontSize={14}
                                        xPadding={38}
                                        yPadding={16}
                                        description={{
                                          isOutlined: false,
                                        }}
                                        className="z-10 text-2xl flex pt-7 book-btn mb-7 xl:mb-0"
                                        url=""
                                      >
                                        BOOK TOUR
                                      </TCPTLButton>
                                    </div>
                                    <div className="hidden px-6 justify-center items-center 2xl:flex">
                                      <SliderContext.Provider
                                        value={activityItem.images}
                                      >
                                        <TourThumbnails
                                          width={95}
                                          height={350}
                                          index={index}
                                        />
                                      </SliderContext.Provider>
                                    </div>
                                  </div>

                                  <div
                                    className="w-full xl:w-1/2 overflow-hidden rounded-3xl"
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
                                      {isMobile ? (
                                        <SliderV2 screenWidth={screenWidth}>
                                          <TourImages
                                            isMobile={isMobile}
                                            screenWidth={screenWidth}
                                            height={
                                              isMobile
                                                ? "320px"
                                                : "calc(100vh - 200px)"
                                            }
                                            ref={(ref) => {
                                              sectionRefs.current[index] = {
                                                sectionRef: ref,
                                                id: "sectionRef-" + index,
                                              };
                                            }}
                                          />
                                        </SliderV2>
                                      ) : (
                                        <TourImages
                                          isMobile={isMobile}
                                          screenWidth={screenWidth}
                                          height={
                                            isMobile
                                              ? "320px"
                                              : "calc(100vh - 200px)"
                                          }
                                          ref={(ref) => {
                                            sectionRefs.current[index] = {
                                              sectionRef: ref,
                                              id: "sectionRef-" + index,
                                            };
                                          }}
                                        />
                                      )}
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
                    <div className="w-full flex mt-10 mb-10 xl:mb-0">
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
