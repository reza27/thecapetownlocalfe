"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Slider from "../components/slider";
import ImageLoader from "../components/image-loader";
import { Button } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Head from "next/head";

import { Metadata } from "next";
import { IHomeTours } from "../types/IHomeTour";
import Reviews from "../components/reviews";
import { SliderContext } from "../lib/contexts/slider-context";
import { reviews } from "./home-reviews";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home({ data }) {
  const [isMobi, setIsMobi] = useState(false);

  const featureImageStyle = {
    objectFit: "contain",
    objectPosition: "center bottom",
    height: "500px",
    width: "630px",
    overflow: "hidden",
  };

  const tourImageStyle = {
    objectFit: "cover",
    objectPosition: "center bottom",
    height: "300px",
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

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsMobi(true);
    }
  }, []);
  return (
    <>
      <Head>
        <title>Home - The Cape Town Local</title>
      </Head>
      <div id="home">
        <div className="header-home">
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
        </div>
        <div className="info">
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
        </div>
        <h2 className="toursHeading">Most popular tours</h2>
        <div className="tours">
          {data.props.data.home?.homeTours.map(
            (homeTour: IHomeTours, index: number) => (
              <div className="tour" key={homeTour.homeTour.id}>
                <Image
                  loader={ImageLoader}
                  src={getImageUrl(homeTour.homeTour.images)}
                  width={100}
                  height={100}
                  style={tourImageStyle}
                />
                <div className="tourContent">
                  <h2 className="drop-shadow-md">{homeTour.homeTour.title}</h2>
                  <Link
                    href={
                      "/tours?anchor=" +
                      homeTour.homeTour.anchor +
                      "&tab=" +
                      homeTour.homeTour.tab
                    }
                  >
                    <Button className="tour-button">
                      Discover {homeTour.homeTour.title}
                    </Button>
                  </Link>
                </div>
              </div>
            )
          )}
        </div>
        <div className="reviews">
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
          <div className="right">
            <SliderContext.Provider value={reviews}>
              <Slider
                id="reviews-slider"
                containerClass="review-slider"
                panelClass="panel-review-slider"
                type="reviews"
              >
                <Reviews />
              </Slider>
            </SliderContext.Provider>
          </div>
        </div>
      </div>
    </>
  );
}
