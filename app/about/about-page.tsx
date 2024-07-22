"use client";
import React, { useState, useEffect } from "react";
import $ from "jquery";
import { DocumentRenderer } from "@keystone-6/document-renderer";
import Image from "next/image";
import ImageLoader from "../../components/image-loader";
import Head from "next/head";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

const guideImageStyle = {
  objectFit: "cover",
  objectPosition: "left top",
  height: "520px",
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

export default function About(aData) {
  const data = aData.data.props.data;
  console.log("about", data);
  const featureImageStyle = {
    objectFit: "cover",
    height: "500px",
    width: "100%",
    overflow: "hidden",
  };

  const Affilates = () => {
    if (data.about?.affiliations?.length > 0) {
      return (
        <div className="affiliations-container">
          <h2 className="section-heading">Affiliations</h2>
          <div className="affiliations">
            {data.about?.affiliations.map((affiliate) => (
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

  return (
    <>
      <Head>
        <title>About - The Cape Town Local</title>
      </Head>
      <div id="about">
        <h2 className="main-heading">About us</h2>
        <div className="about-description">
          {data.about ? (
            <DocumentRenderer document={data.about?.content?.document} />
          ) : (
            ""
          )}
        </div>
        <div className="guides-container">
          <h2>Meet the team</h2>
          <div className="guides-description">
            {data.about ? (
              <DocumentRenderer document={data.about?.guidesInfo?.document} />
            ) : (
              ""
            )}
          </div>
          <div className="guides">
            {data.about
              ? data.about?.guides?.map((guide) => (
                  <div className="guide" key={guide.id}>
                    <Image
                      loader={ImageLoader}
                      alt={guide.altText}
                      src={guide.image?.publicUrl}
                      sizes="(max-width: 300px) 100vw,
                 (max-width: 200px) 50vw,
                 auto"
                      width={100}
                      height={100}
                      style={guideImageStyle}
                    />
                    <div className="guide-content">
                      <div className="guide-name">{guide.name}</div>
                      <div className="guide-title">{guide.title}</div>
                      <div className="guide-description">
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
