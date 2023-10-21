import { gql } from "@apollo/client";
import client from "../helpers/apollo-client";
import Link from "next/link";
import ImageSlider from "../components/image-slider";
import { GetStaticPathsResult, GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import ImageLoader from '../components/image-loader';
import { Button } from "@material-tailwind/react";
import $ from 'jquery';
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import React, { useState, useEffect } from 'react';
import { DocumentRenderer } from '@keystone-6/document-renderer';
import ContactForm from '../components/contact-form';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMountainSun, faMountainCity, faClock, faTag, faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons'

type Activity = {
  id: string;
  title: string;
  activityItemHeading: ActivityItemHeading
};

export default function Tours({ data }: {data:Activity}) {

  const featureImageStyle = {
    objectFit: 'cover',
    height: '500px',
    width: '100%',
    overflow: 'hidden'
  };

  const panelImageStyle = {
    objectFit: 'cover',
    height: '300px',
    width: '100%'
  //  overflow: 'hidden'
  };

  let firstTab = data.activities[0]?.activityItemHeading[0].title.toLowerCase();
  const [tab, setTab] = useState(firstTab);
  const [open, setOpen] = useState(1);
  const [formOpen, setFormOpen] = useState(false);

  const handleOpen = (value) => {

    setOpen(open === value ? 0 : value);
  };

  const handleFormOpen = (value) => {
    setFormOpen(formOpen === value ? 0 : value);
  };

  const getFormOptions =  (activity) => {
    let ItemsArr = [];
    let activityItemHeadings = activity.activityItemHeading;
    for (var i = 0; i < activityItemHeadings.length; i++) {
      for (var j = 0; j < activityItemHeadings[i].activityItems.length; j++) {
        ItemsArr.push(activityItemHeadings[i].activityItems[j])
      }
    }
    return ItemsArr;
  };


  useEffect(() => {
    //getFormOptions(data.activities[0].activityItemHeading)
    // const handleScroll = event => {
    //   //console.log('window.scrollY', window.scrollY);
    //   if (window.scrollY > 0) {
         $('#navbar').addClass('scrolled')
    //   }
    //   else {
    //     $('#navbar').removeClass('scrolled')
    //   }
    // };
    //
    // window.addEventListener('scroll', handleScroll);
    //
    // return () => {
    //   window.removeEventListener('scroll', handleScroll);
    // };
    // $(document.body).animate({
    //   'scrollTop':   $('#anchorName2').offset().top
    // }, 2000);

    function selectTab () {

    var url = new URL(window.location.href);
    var tab1 = url.searchParams.get("tab")?.toLowerCase();
    var anchor = url.searchParams.get("anchor")?.toLowerCase();

    if (tab1) {
             console.log('tab', tab)

      setTab(tab1);
      setTimeout(() => {
        $('html').animate({
         scrollTop: $('#'+anchor).offset().top-100
       }, 1000);
     }, 300);


      //var listItems =   $('.ul-tabs li');

      // listItems.each(function(idx, li) {
      //     var $tab = $(li);
      //
      //     //$tab.removeClass('selected')
      //     if ($tab.attr('id') === tab)
      //     {
      //       $tab.addClass('selected');
      //       console.log('tab',$tab.attr('id'), tab)
      //
      //     }
      //
      //     // and the rest of your code
      // });
    }

  }
  setTimeout(selectTab, 300);


  },[])
//<li>Choose Tour</li>
  return (
      <div id="tours">

        {data.activities.map((item) => (
          <div key={item.id} >
          <div className="header">
           <h1>Tours</h1>
           <p></p>

          </div>
          <div className="tabs">
            <ul className="ul-tabs">

            {item.activityItemHeading.map((activityItemHeading,index) => (
                <li key={activityItemHeading.id}
                className={(tab == activityItemHeading.title.toLowerCase()? 'selected': '')}
                onClick={() => setTab(activityItemHeading.title.toLowerCase())} >
                      <h2><span>{activityItemHeading.title}</span></h2>
                </li>
              ))}
            </ul>
          </div>
          <div className="tab-panels">

              {item.activityItemHeading.map((activityItemHeading) => (
                  <div key={activityItemHeading.id} className={(tab == activityItemHeading.title.toLowerCase()? 'selected': '')+ ' panel w-full'} data-index={activityItemHeading.id}>

                      {activityItemHeading.activityItems.map((activityItem, index) => (
                        <div className="panel-outer" key={activityItem.id}>
                            <div key={activityItem.id} className="panel-inner">
                              <div className="tab-panel" id={activityItem.anchor.toLowerCase()}>
                                <h2>{activityItem.title}</h2>
                                <div className="doc">
                                  <DocumentRenderer document={activityItem.content.document} />
                                </div>
                                <div className="price">
                                  <span className="price-black"><FontAwesomeIcon icon={faTag} /> </span>{activityItem.price}
                                </div>
                                <div className="duration">
                                  <span><FontAwesomeIcon icon={faClock} /></span>{activityItem.duration}
                                </div>
                                <Button className="enquire-button" onClick={() => {
                                //  document.getElementById('tour-contact-form').scrollIntoView();
                                  $('html').animate({
                                   scrollTop: $('#tour-contact-form').offset().top-100
                               }, 1000);
                                  //var top = document.getElementById('tour-contact-form').offsetTop + $('#tour-contact-form').height() - 150; //Getting Y of target element
                                  //window.scrollTo(0, top);
                                }}>Enquire now</Button>
                              </div>
                            </div>
                            <div className="panel-images">
                              <ImageSlider images={activityItem.images} id={activityItem.id}/>
                            </div>

                        </div>
                        ))}

                  </div>
                ))}

                <div id="tour-contact-form" className="tour-contact-form">
                  <ContactForm selectOptions={getFormOptions(item)}/>
                </div>
                <div className="faqs">
                  <h2>FAQs</h2>
                  <div className="faqs-accordion">
                  {item.faq.map((faq, i) => (
                    <Accordion  open={open === i+1} key={faq.id}>
                        <AccordionHeader onClick={() => handleOpen(i+1)}>
                          {faq.question}
                        </AccordionHeader>
                        <AccordionBody>
                          {faq.answer}
                        </AccordionBody>
                      </Accordion>
                  ))}
                  </div>
                </div>
            </div>
          </div>
        ))}
      </div>
  );
}

export async function getServerSideProps() {
  //(where: {tag:{name:{equals:"Tours"}}})
  const { data } = await client.query({
     ​fetchPolicy​: ​"no-cache"​,
    query: gql`
    query GetActivities {
        activities  {
          id
          title
          faq {
            question
            answer
          }
          activityItemHeading  {
            id
            title
            activityItemsCount
            activityItems {
              id
              title
              anchor
              tab
              content {
                document
              }
              price
              duration
              images {
                altText
                id
                name
                image {
                  url
                }
              }
            }
          }
        }
      }
    `,
  });
  console.log('data>>>', data)
  return {
    props: {
      data: data,
    },
  };
}
// <div className="left-button slider-button" ><FontAwesomeIcon icon={faArrowLeft} /></div>
// <div className="right-button slider-button"><FontAwesomeIcon icon={faArrowRight} /></div>
// <div className="panel-images-slider">
//
// {activityItem.images.map((image) =>(
//   <div className="panel-image" style={{backgroundImage:'url(' + image.image.url+')'}}></div>
// ))}
//</div>

// <Image
//   loader={ImageLoader}
//   alt={image.altText}
//   src={image.image.url}
//
//    width={10}
//    height={100}
// />

// <div className={formOpen? "contact-form-container": "contact-form-container hide"} >
//   <div className="close" onClick={() => handleFormOpen(false)}>CLOSE X</div>
//   <ContactForm />
// </div>
// <div className="book">
//   <div className="book-button drop-shadow-lg" onClick={() => handleFormOpen(true)}>
//    <FontAwesomeIcon icon={faCalendar} /><span>Book now</span>
//   </div>
// </div>
