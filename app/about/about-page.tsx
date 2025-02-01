"use client";
import React, { useEffect, useState } from "react";
import { DocumentRenderer } from "@keystone-6/document-renderer";
import Image from "next/image";
import ImageLoader from "../../components/image-loader";
import Head from "next/head";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

const affiliateImageStyle = {
  objectFit: "contain",
  height: "120px",
  width: "120px",
  padding: "5px",
  overflow: "hidden",
};

const getRotation = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

export default function About({ data }) {
  const defaultGuideIndex = 0;
  const breakPointLg = 959;
  const breakPointXl = 1280;
  const [guideHoverIndex, setGuideHoverIndex] = useState<number | null>(
    defaultGuideIndex
  );

  const guideStyle = (index: number) => {
    return {
      flexBasis: Math.floor(100 / data.props.data.about.guides.length),
      flexShrink: 0,
      flexGrow: 1,
      opacity: guideHoverIndex === index ? 1 : 0.6,
      transform:
        guideHoverIndex === index
          ? "scale(1.15,1.15)" + "rotate(" + getRotation(0, -5) + "deg)"
          : "scale(1,1) rotate(0deg)",
      zIndex: guideHoverIndex === index ? 10 : 1,
    };
  };

  const getGuideImageHeight = (): string => {
    if (screenWidth < breakPointXl && screenWidth > breakPointLg) {
      return "300px";
    }
    return "450px";
  };

  const [screenWidth, setScreenWidth] = useState<number>(400);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    setScreenWidth(window.innerWidth);

    function autoResize() {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener("resize", autoResize);

    return () => window.removeEventListener("resize", autoResize);
  }, []);

  const Affilates = () => {
    if (data.props.data.about?.affiliations?.length > 0) {
      return (
        <div className="affiliations-container">
          <h2 className="section-heading">Affiliations</h2>
          <div className="affiliations">
            {data.props.data.about?.affiliations.map((affiliate) => (
              <div className="affiliate" key={affiliate.id}>
                <Image
                  loader={ImageLoader}
                  alt={affiliate.image?.altText}
                  src={affiliate.image?.publicUrl}
                  sizes="(max-width: 300px) 100vw,
               (max-width: 200px) 50vw,
               auto"
                  width={100}
                  height={100}
                  style={affiliateImageStyle}
                />
              </div>
            ))}
          </div>
        </div>
      );
    }
  };

  return (
    <>
      <Head>
        <title>About - The Cape Town Local</title>
      </Head>
      <div id="about" className="bg-white flex mt-28 md:mt-32 flex-col">
        <h1 className="text-center py-9 tracking-tighter">
          <span className="text-yellow">'Local is lekker'</span>. That statement{" "}
          <br /> is perfectly fitting to Cape Town.
        </h1>
        <div className="flex justify-center items-center">
          <div className="text-sm text-center px-4 max-w-[800px] text-light-grey-2">
            {data.props.data.about ? (
              <DocumentRenderer
                document={data.props.data.about?.content?.document}
              />
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="">
          <p className="text-xs text-yellow pt-12 lg:pt-24 text-center font-semibold">
            MEET THE TEAM
          </p>
          <h1 className="text-center tracking-tighter">Meet the team</h1>
          {/* <div className="guides-description">
            {data.props.data.about ? (
              <DocumentRenderer
                document={data.props.data.about?.guidesInfo?.document}
              />
            ) : (
              ""
            )}
          </div> */}
          <div className="flex flex-wrap relative mt-12">
            <div className="absolute h-1/5 w-full bg-linear-to-r from-cyan-500 to-blue-500"></div>
            {data.props.data.about
              ? data.props.data.about?.guides?.map((guide, index) => (
                  <div
                    className="lg:max-w-80 overflow-hidden w-full md:w-1/2 lg:px-0  sm:px-6 rounded-none lg:rounded-3xl transition-all duration-150 cursor-pointer"
                    key={guide.id}
                    style={screenWidth > breakPointLg ? guideStyle(index) : {}}
                  >
                    <Image
                      loader={ImageLoader}
                      alt={guide.altText}
                      src={guide.image?.publicUrl}
                      sizes="(max-width: 300px) 100vw,
                 (max-width: 200px) 50vw,
                 auto"
                      width={100}
                      height={100}
                      className="transition-all duration-150 rounded-3xl lg:rounded-none"
                      style={{
                        objectFit: "cover",
                        objectPosition: "center top",
                        height: getGuideImageHeight(),
                        width: "100%",
                        overflow: "hidden",
                      }}
                      onMouseEnter={() => setGuideHoverIndex(index)}
                      onMouseLeave={() => setGuideHoverIndex(defaultGuideIndex)}
                    />
                    <div
                      className="relative w-full transition-all duration-150 mt-4 mb-14"
                      style={{
                        display: screenWidth > breakPointLg ? "none" : "flex",
                      }}
                    >
                      <div className="flex flex-col text-left w-full">
                        <div className="text-blue font-semibold text-left text-2xl tracking-tight">
                          {guide.name}
                        </div>
                        <div className="text-black lg:pt-1 text-left font-semibold text-lg tracking-tight">
                          {guide.title}
                        </div>
                        <div className="text-dark-grey text-sm pt-3 text-left max-w-[600px]">
                          {guide.description}
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              : ""}
          </div>
          <div
            className="h-60 mt-20"
            style={{
              display: screenWidth > breakPointLg ? "block" : "none",
            }}
          >
            {data.props.data.about
              ? data.props.data.about?.guides?.map((guide, index) => (
                  <div
                    className="relative w-full transition-all duration-150"
                    style={{
                      opacity: guideHoverIndex === index ? 1 : 0,
                    }}
                  >
                    <div className="flex flex-col text-center absolute w-full justify-center items-center">
                      <div className="text-blue font-semibold text-center text-2xl">
                        {guide.name}
                      </div>
                      <div className="text-black pt-1 text-center font-semibold text-lg">
                        {guide.title}
                      </div>
                      <div className="text-dark-grey text-sm pt-4 text-center max-w-[600px]">
                        {guide.description}
                      </div>
                    </div>
                  </div>
                ))
              : ""}
          </div>
        </div>
        <Affilates />
      </div>
    </>
  );
}
