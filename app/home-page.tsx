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
  //const { data, error, isLoading } = useGetReviewsQuery();

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
      <Head>
        <title>Home - The Cape Town Local</title>
      </Head>
      <div className="w-full relative bg-white flex pt-28 md:pt-32">
        <div className="w-full flex relative h-[650px] overflow-hidden rounded-3xl">
          <div className="absolute bottom-40 text-center md:text-left left-0 md:left-12 z-10 text-3xl lg:text-7xl font-semibold text-white transition-all duration-300 tracking-tighter">
            Discover
            <br />
            <span className="text-yellow">Breathtaking</span> landscapes
            <br /> on our guided hikes.
          </div>
          <div className="absolute bottom-28 w-full md:w-auto text-center md:text-left left-0 md:left-12 z-10 text-lg md:text-xl text-white transition-all duration-300">
            We live your experience.
          </div>
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
        {/* <div className="header-home">
          <div className="left">
            <h1 className="home-title">
              Discover <br />
              breathtaking landscapes <br />
              on our guided hikes.
            </h1>
            <p>We live your experience.</p>
            <a href="/tours">
              <Button className="header-button">View Tours</Button>
            </a>
          </div>
          <div className="right">
            <Image
              loader={ImageLoader}
              src="/cptlocalheader.png"
              width={100}
              height={100}
              style={featureImageStyle}
            />
          </div> 
        </div>*/}
        {/* <div className="info">
          <p>
            20{" "}
            <span>
              years
              <br />
              experience
            </span>
          </p>
          <span className="separator"></span>
          <p>
            1000+ <span>trips</span>
          </p>
          <span className="separator"></span>
          <p>
            3{" "}
            <span>
              tour
              <br />
              experiences
            </span>
          </p>
          <span className="separator"></span>
          <p>
            5.0
            <span>
              overall <br />
              rating
            </span>
          </p>
        </div> */}

        {/* <div className="reviews">
          <div className="left">
            <h2>Reviews</h2>
            <h3>
              Average rating{" "}
              <span>
                <FontAwesomeIcon icon={faStar} />{" "}
              </span>{" "}
              5.0
            </h3>
            <p>
              At The Cape Town Local we strive to make your tour as memorable
              and comfortable as possible. See what others are saying about us.
            </p>
            <a
              target="blank"
              href={
                isMobi
                  ? "https://www.google.com/search?q=the+cape+town+local&oq=the+cape+tow&aqs=chrome.0.69i59j0i512j69i57j0i512j46i175i199i512l2j0i512l2j46i175i199i512l2.2663j1j9&client=ms-android-samsung-ss&sourceid=chrome-mobile&ie=UTF8#lkt=LocalPoiReviews&lpg=cid:CgIgAQ%3D%3D&trex=m_t:lcl_akp,rc_f:rln,rc_ludocids:6889105117186990927,ru_gwp:0%252C7,ru_lqi:ChN0aGUgY2FwZSB0b3duIGxvY2FsSICZ_qDIsoCACFolEAAQARACEAMYABgBGAIYAyITdGhlIGNhcGUgdG93biBsb2NhbHoJQ2FwZSBUb3dukgENdG91cl9vcGVyYXRvcpoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VSSGFXSnFTa05SRUFFqgEbEAEqFyITdGhlIGNhcGUgdG93biBsb2NhbCgA,ru_phdesc:miSBjOtOkDM,trex_id:BGUPIc"
                  : "https://www.google.com/search?q=The%20Cape%20Town%20Local&stick=H4sIAAAAAAAAAONgU1I1qDBMSU42MU4ySE5KSklOsTS3MqgwTbNMMjCxTEw0MjFMNDZJW8QqHJKRquCcWJCqEJJfnqfgk5-cmAMAKAYJzj8AAAA&mat=CU21M6PrLZga&ved=2ahUKEwi8k4yj6YX8AhU6QUEAHcZYAc4QrMcEegQIVRAG#lrd=0x1dcc43b0cbbdcd97:0x5f9b049aa241a34f,1,,,"
              }
            >
              <Button className="reviews-button">
                See All reviews on Google
              </Button>
            </a>
          </div>
          <div className="right"> */}
        {/* {" "}
            {error ? (
              <SliderContext.Provider value={defaultReviews || []}>
                <Slider
                  id="reviews-slider"
                  containerClass="review-slider"
                  panelClass="panel-review-slider"
                  type="reviews"
                >
                  <Reviews />
                </Slider>
              </SliderContext.Provider>
            ) : isLoading ? (
              <div className="w-full h-full flex justify-center items-center">
                <img src="/spinner.svg" className="w-10 h-auto" />
              </div>
            ) : data ? (
              <SliderContext.Provider
                value={getReviewsOrError(data) || defaultReviews}
              >
                <Slider
                  id="reviews-slider"
                  containerClass="review-slider"
                  panelClass="panel-review-slider"
                  type="reviews"
                >
                  <Reviews />
                </Slider>
              </SliderContext.Provider>
            ) : null} */}
        {/* </div> */}
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
                  <h2 className="text-white text-center drop-shadow-md">
                    {homeTour.homeTour.shortTitle}
                  </h2>
                  {/* <Link
                    href={
                      "/tours?anchor=" +
                      homeTour.homeTour.anchor +
                      "&tab=" +
                      homeTour.homeTour.tab
                    }
                  > */}
                  {/* <TCPTLButton
                    className="tour-button"
                    description={{ isOutlined: false }}
                    url={
                      "/tours?section=" +
                      homeTour.homeTour.anchor +
                      "&tab=" +
                      homeTour.homeTour.tab
                    }
                  >
                    Discover {homeTour.homeTour.shortTitle}
                  </TCPTLButton> */}
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
        <SliderContext.Provider value={defaultReviews || []}>
          <ColumnSlider screenWidth={screenWidth}>
            <ReviewsV2 screenWidth={screenWidth} />
          </ColumnSlider>
        </SliderContext.Provider>
      </div>
      <div className="flex justify-end">
        <Faqs data={homeData.props.data.home?.faq} screenWidth={screenWidth} />
      </div>
      <div className="my-12 flex">
        <ContactForm
          selectOptions={getFormOptions(homeData.props.data.activities)}
        />
      </div>
    </>
  );
}
