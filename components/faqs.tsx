import { DocumentRenderer } from "@keystone-6/document-renderer";
import React, { useEffect, useRef, useState } from "react";

export const Faqs = ({ ...props }) => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(0);
  const [hoverIndex, setHoverIndex] = useState<number | null>(0);
  const [containerW, setContainerW] = useState<number | undefined>(0);
  const [faqOpacity, setFaqOpacity] = useState<number>(0);
  const [screenWidth, setScreenWidth] = useState<number>(0);
  const sectionRefs = useRef<
    Array<{ sectionRef: HTMLDivElement | null; id: string }>
  >([]);

  const faqContainer = useRef<HTMLDivElement>(null);
  const panelW = 106;

  const autoResize = () => {
    if (faqContainer.current) {
      setContainerW(
        faqContainer.current!.getBoundingClientRect().width -
          panelW * (props.data?.length - 1) -
          60
      );
      setFaqOpacity(1);
    }
  };

  useEffect(() => {
    if (faqContainer.current) {
      setContainerW(
        faqContainer.current!.getBoundingClientRect().width -
          panelW * (props.data?.length - 1) -
          60
      );

      setTimeout(() => {
        setFaqOpacity(1);
      }, 500);
    }

    window.addEventListener("resize", autoResize);

    return () => {
      window.removeEventListener("resize", autoResize);
    };
  });

  return (
    <div className="flex w-full">
      {props.screenWidth > 1024 ? (
        <div className="flex w-full flex-col 2xl:flex-row 2xl:h-[580px] rounded-3xl">
          <div className="w-full 2xl:w-1/4 text-4xl 2xl:text-6xl  pb-8 font-semibold flex flex-wrap justify-center items-center text-black">
            <div className="tracking-tight w-full flex flex-col justify-center items-center 2xl:items-start 2xl:justify-start">
              <p className="text-yellow text-sm">FAQS</p>
              <div>
                Frequently&nbsp;
                <br className="hidden 2xl:flex" />
                Asked&nbsp;
                <br className="hidden 2xl:flex" />
                Questions
              </div>
            </div>
          </div>
          <div
            ref={faqContainer}
            className="flex w-full 2xl:w-3/4 justify-end text-black tracking-tight h-[580px] 2xl:h-full 2xl:pl-10"
          >
            {props.data?.map((faq, index) => (
              <div
                key={faq.id}
                style={{
                  width: currentIndex === index ? "100%" : "106px",
                }}
                onClick={() => {
                  if (currentIndex === index) {
                    setCurrentIndex(0);
                  } else {
                    setCurrentIndex(index);
                  }
                }}
                className="flex w-28 h-full relative overflow-hidden transition-[width] ease-out duration-500 cursor-pointer first:rounded-l-3xl last:rounded-r-3xl"
              >
                <div
                  style={{
                    opacity:
                      (props.data?.length - index) / props.data?.length / 2 +
                      0.5,
                  }}
                  className="inset-0 m-auto bg-yellow absolute"
                ></div>

                <div className="absolute w-28 h-full overflow-hidden z-10 whitespace-nowrap">
                  <div
                    className="absolute w-96 -rotate-90 origin-[0%_0%] mt-[440px] top-20 left-6 transition-transform min-w-[500px] ease-out duration-1000 font-semibold text-3xl"
                    style={{
                      opacity: currentIndex === index ? 0 : 1,
                      transform:
                        currentIndex === index
                          ? "translateX(-100px) rotate(-90deg)"
                          : "translateX(0px) rotate(-90deg)",
                    }}
                  >
                    {faq.question}
                  </div>
                </div>
                <div
                  style={{
                    left: currentIndex === index ? "60px" : "108px",
                    width: containerW,
                    opacity: faqOpacity,
                  }}
                  className="absolute left-24 ease-out duration-500 w-full h-full transition-[width_opacity_left]"
                >
                  <div className="relative pt-10 text-5xl 2xl:text-6xl font-semibold w-full">
                    {faq.question}
                  </div>

                  <div className="relative pt-10 text-lg font-medium w-full faq-answer h-full">
                    <div className="h-full">
                      <DocumentRenderer document={faq.answer.document} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex w-full flex-col 2xl:flex-row rounded-3xl">
          <div className="w-full text-4xl 2xl:text-6xl font-semibold flex flex-wrap justify-center items-center text-black">
            <div className="tracking-tight w-full pb-8 flex flex-col justify-center items-center 2xl:items-start 2xl:justify-start">
              <p className="text-yellow text-sm">FAQS</p>
              <div className="text-center">Frequently Asked Questions</div>
            </div>
          </div>
          <div
            ref={faqContainer}
            className="flex flex-col w-full justify-end text-black tracking-tight 2xl:h-full"
          >
            {props.data?.map((faq, index) => (
              <div
                key={faq.id}
                onClick={() => {
                  if (currentIndex === index) {
                    setCurrentIndex(0);
                  } else {
                    setCurrentIndex(index);
                  }
                }}
                className="flex flex-col w-full relative overflow-hidden cursor-pointer first:rounded-t-3xl last:rounded-b-3xl"
              >
                <div
                  style={{
                    opacity:
                      (props.data?.length - index) / props.data?.length / 2 +
                      0.5,
                  }}
                  className="inset-0 m-auto bg-yellow absolute"
                ></div>

                <div className="flex justify-start pl-10 items-center h-20 text-2xl font-semibold z-10">
                  <div>{faq.question}</div>
                </div>
                <div
                  ref={(ref) => {
                    sectionRefs.current[index] = {
                      sectionRef: ref,
                      id: "sectionRef-" + index,
                    };
                  }}
                  style={{
                    opacity: faqOpacity,
                    maxHeight:
                      currentIndex === index
                        ? sectionRefs.current[index]?.sectionRef?.scrollHeight
                        : 0,
                  }}
                  className="relative px-12 text-4xl 2xl:text-5xl font-semibold w-full transition-[opacity_max-height] duration-500"
                >
                  <div className="h-full text-black ">
                    <div className="faq-answer pb-10 pt-4 text-lg">
                      <DocumentRenderer document={faq.answer.document} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
