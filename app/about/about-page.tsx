"use client";
import React, { useEffect } from "react";
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

export default function About({ data }) {
  const featureImageStyle = {
    objectFit: "cover",
    height: "500px",
    width: "100%",
    overflow: "hidden",
  };

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
      <div
        id="about"
        className="px-6 md:px-16 bg-white flex mt-28 md:mt-32 flex-col"
      >
        <h1 className="text-center py-9">
          <span className="text-yellow ">'Local is lekker'</span>. That
          statement is perfectly fitting to Cape Town.
        </h1>
        <div className="text-sm text-center pt-14 px-4 md:px-20">
          {data.props.data.about ? (
            <DocumentRenderer
              document={data.props.data.about?.content?.document}
            />
          ) : (
            ""
          )}
        </div>
        <div className="guides-container">
          <h1 className="text-center pt-24">Meet the team</h1>
          <div className="guides-description">
            {data.props.data.about ? (
              <DocumentRenderer
                document={data.props.data.about?.guidesInfo?.document}
              />
            ) : (
              ""
            )}
          </div>
          <div className="guides">
            {data.props.data.about
              ? data.props.data.about?.guides?.map((guide) => (
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
