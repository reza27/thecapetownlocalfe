import ContactForm from '../components/contact-form';
import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import { DocumentRenderer } from '@keystone-6/document-renderer';
import { gql } from "@apollo/client";
import client from "../helpers/apollo-client";
import { GetStaticPathsResult, GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import ImageLoader from '../components/image-loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMountain} from '@fortawesome/free-solid-svg-icons'

// type About = {
//   id: String,
//   title: String,
//   featureImage: String,
//   content: JSON,
//   guides: [Guide],
//   guidesCount: Int
// };

const guideImageStyle = {
  objectFit: 'cover',
  height: '400px',
  width: '100%',
  //padding:'15px',
  overflow: 'hidden'
};

const affiliateImageStyle = {
  objectFit: 'contain',
  height: '120px',
  width: '120px',
  padding:'5px',
  overflow: 'hidden'
};

export default function About({ data }: {data}) {

  const featureImageStyle = {
    objectFit: 'cover',
    height: '500px',
    width: '100%',
    overflow: 'hidden'
  };

  useEffect(() => {
    const handleScroll = event => {
      //console.log('window.scrollY', window.scrollY);
      //if (window.scrollY > 0) {
        $('#navbar').addClass('scrolled')
      // }
      // else {
      //   $('#navbar').removeClass('scrolled')
      // }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },[])

  // <div className="header">
  //   <h1 className="drop-shadow-md">{data.about.title}</h1>
  //
  // <Image
  //   loader={ImageLoader}
  //   src={data.about.featureImage.url}
  //    width={100}
  //    height={100}
  //    style={featureImageStyle}/>
  // </div>

  return (
    <div id="about">
      <h2 className="main-heading">About us</h2>
      <div className="about-description"><DocumentRenderer document={data.about?.content.document}/></div>
      <div className="guides-container">
        <h2>Meet the team</h2>
        <div className="guides">
        {data.about?.guides?.map((guide) => (
          <div className="guide" key={guide.id}>
              <Image
                loader={ImageLoader}
                alt={guide.image?.altText}
                src={guide.image?.url}
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
                <div className="guide-description">{guide.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="affiliations-container">
      <h2 className="section-heading">Affiliations</h2>
      <div className="affiliations">


        </div>
      </div>
    </div>)
}

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
    query GetAbout {
       about {
        title
        featureImage {
            url
          }
        content {
          document
        }
        guides {
          name
          title
          image {
            url
          }
          description
        }
        affiliations {
          image {
            url
          }
        }
      }
    }
    `
  });
  console.log('data about>>>', data)
  return {
    props: {
      data: data,
    },
  };
}

// {data.about?.affiliations.map((affiliate) => (
//   <div className="affiliate" key={affiliate.id}>
//       <Image
//         loader={ImageLoader}
//         alt={affiliate.image?.altText}
//         src={affiliate.image?.url}
//         sizes="(max-width: 300px) 100vw,
//          (max-width: 200px) 50vw,
//          auto"
//          width={100}
//          height={100}
//          style={affiliateImageStyle}
//       />
//     </div>
//   ))};
