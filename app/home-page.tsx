"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Slider from "../components/slider";
import ImageLoader from "../components/image-loader";
import { button, Button } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Head from "next/head";

import { Metadata } from "next";
import { IHomeTours } from "../types/IHomeTour";
import Reviews from "../components/reviews";
import { SliderContext } from "../lib/contexts/slider-context";
import { defaultReviews } from "./home-reviews";

import { useAppDispatch, useAppSelector } from "../lib/hooks";
import { useGetReviewsQuery } from "../api/services/RTKService";
import {
  IGoogleReviewObject,
  IGoogleReviewError,
} from "../types/IGoogleReview";
import { TCPTLButton } from "../components/tcptl-button";
import { url } from "inspector";
import ContactForm from "../components/contact-form";
import { getFormOptions } from "../components/forms/getFormOptions";
import ReviewsV2 from "../components/reviews-v2";
import ColumnSlider from "../components/column-slider";
import outlined from "@material-tailwind/react/theme/components/timeline/timelineIconColors/outlined";
import { FancyButton } from "../components/fancy-button";
import { Faqs } from "../components/faqs";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home({ homeData }) {
  const [isMobi, setIsMobi] = useState<boolean>(false);
  const [screenWidth, setScreenWidth] = useState<number>(400);

  const dispatch = useAppDispatch();
  const { data, error, isLoading } = useGetReviewsQuery();

  const featureImageStyle = {
    objectFit: "contain",
    objectPosition: "center bottom",
    height: "500px",
    width: "630px",
    overflow: "hidden",
  };

  const tourImageStyle = {
    objectFit: "cover",
    objectPosition: "center top",
    height: "380px",
    width: "100vw",
    overflow: "hidden",
  };

  const reviewsStyle = {
    width: "100%",
    height: "100%",
    overflow: "auto",
  };

  const getImageUrl = (images) => {
    return images[0]?.image?.publicUrl ? images[0].image?.publicUrl : "";
  };

  const getReviewsOrError = (obj) => {
    if ("reviews" in obj) {
      return obj.reviews;
    }
    return false;
  };

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (window.innerWidth <= 768) {
      setIsMobi(true);
    }

    setScreenWidth(window.innerWidth);

    function autoResize() {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener("resize", autoResize);

    return () => window.removeEventListener("resize", autoResize);
  }, []);
  return (
    <>
      <div className="w-full relative bg-white flex pt-28 md:pt-32">
        <div className="w-full flex relative h-[650px] overflow-hidden rounded-3xl">
          <h1 className="absolute w-full md:w-auto bottom-40 px-3 md:px-0 text-center md:text-left left-0 md:left-12 z-10 text-3xl lg:text-7xl font-semibold text-white transition-all duration-300 tracking-tighter">
            Discover
            <br />
            <span className="text-yellow">Breathtaking</span> landscapes
            <br /> on our guided hikes.
          </h1>
          <h2 className="font-normal absolute bottom-28 w-full md:w-auto text-center md:text-left left-0 md:left-12 z-10 text-lg md:text-xl text-white transition-all duration-300">
            We live your experience.
          </h2>
          {/* <TCPTLButton
            description={{
              isOutlined: true,
            }}
            className="absolute bottom-12 left-6 md:left-12 z-10"
            url="/tours"
          >
            VIEW TOURS
          </TCPTLButton> */}
          <div className="w-full flex absolute bottom-12 justify-center items-center h-10">
            <FancyButton
              isOutlined={true}
              href={"/tours"}
              className="absolute block md:left-12 z-10"
            >
              VIEW TOURS
            </FancyButton>
          </div>

          <Image
            loader={ImageLoader}
            src="/home_header_img.png"
            alt="The Cape Town Local - Mountain"
            // sizes="100vw"
            fill
            //sizes="(min-width: 808px) 50vw, 100vw"
            style={{
              objectFit: "cover", // cover, contain, none
              objectPosition: "100% 0%",
            }}
          />
        </div>
      </div>
      <div className="my-12">
        <div className="mb-8 mt-6">
          <p className="text-yellow pb-0 mb-0 text-xs text-center w-full font-medium">
            MOST POPULAR
          </p>
          <h2 className="text-center text-3xl  leading-tight tracking-tighter">
            Most popular tours
          </h2>
        </div>
        <div className="flex md:flex-row flex-col">
          {homeData.props.data.home?.homeTours.map(
            (homeTour: IHomeTours, index: number) => (
              <div
                className="relative rounded-3xl overflow-hidden md:first:mr-4 mt-4 md:mt-0"
                key={homeTour.homeTour.id}
              >
                <Image
                  loader={ImageLoader}
                  src={getImageUrl(homeTour.homeTour.images)}
                  width={100}
                  height={100}
                  style={tourImageStyle}
                />
                <div className="flex justify-end pb-10 md:pl-10 items-center md:items-start flex-col absolute left-0 right-0 top-0 bottom-0 m-auto">
                  <h2 className="text-white text-center md:text-left drop-shadow-md text-3xl md:text-[32px] leading-none px-2 pb-2">
                    {homeTour.homeTour.shortTitle}
                  </h2>

                  <FancyButton
                    isOutlined={false}
                    href={
                      "/tours?section=" +
                      homeTour.homeTour.anchor +
                      "&tab=" +
                      homeTour.homeTour.tab
                    }
                    className="z-10 uppercase min-w-20"
                  >
                    Discover {homeTour.homeTour.shortTitle}
                  </FancyButton>
                  {/* </Link> */}
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <div className="flex bg-light-grey my-12 rounded-3xl px-5 py-6  md:p-12 flex-col">
        <p className="text-yellow text-xs text-center w-full font-medium">
          CLIENT REVIEWS
        </p>
        <h3 className="w-full text-3xl sm:text-4xl text-center pt-3 pb-6 tracking-tighter">
          Don't take our word for it, take theirs!
        </h3>
        {/* <SliderContext.Provider value={defaultReviews || []}>
          <ColumnSlider screenWidth={screenWidth}>
            <ReviewsV2 screenWidth={screenWidth} />
          </ColumnSlider>
        </SliderContext.Provider> */}
        {error ? (
          <SliderContext.Provider value={defaultReviews || []}>
            <ColumnSlider screenWidth={screenWidth}>
              <ReviewsV2 screenWidth={screenWidth} />
            </ColumnSlider>
          </SliderContext.Provider>
        ) : isLoading ? (
          <div className="w-full h-full flex justify-center items-center">
            <img src="/spinner.svg" className="w-10 h-auto" />
          </div>
        ) : data ? (
          <SliderContext.Provider
            value={getReviewsOrError(data) || defaultReviews}
          >
            <ColumnSlider screenWidth={screenWidth}>
              <ReviewsV2 screenWidth={screenWidth} />
            </ColumnSlider>
          </SliderContext.Provider>
        ) : null}
      </div>
      <div className="flex justify-end">
        <Faqs data={homeData.props.data.home?.faq} screenWidth={screenWidth} />
      </div>
      <div className="my-12 flex">
        <ContactForm
          selectOptions={getFormOptions(homeData.props.data.activities[0])}
        />
      </div>
    </>
  );
}
