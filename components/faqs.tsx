import { DocumentRenderer } from "@keystone-6/document-renderer";
import React, { useEffect, useRef, useState } from "react";

export const Faqs = ({ ...props }) => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(0);
  const [hoverIndex, setHoverIndex] = useState<number | null>(0);
  const [containerW, setContainerW] = useState<number | undefined>(0);

  const faqContainer = useRef<HTMLDivElement>(null);

  const autoResize = () => {
    if (faqContainer.current) {
      setContainerW(
        faqContainer.current!.getBoundingClientRect().width -
          106 * (props.data.length - 1) -
          40
      );
    }
  };

  useEffect(() => {
    //setContainerW(faqContainer.current!.getBoundingClientRect().width);
    if (faqContainer.current) {
      setContainerW(
        faqContainer.current!.getBoundingClientRect().width -
          106 * (props.data.length - 1) -
          40
      );
    }

    window.addEventListener("resize", autoResize);

    return () => {
      window.removeEventListener("resize", autoResize);
    };
  }, []);

  return (
    <div className="flex w-full flex-col 2xl:flex-row h-[700px] 2xl:h-[500px] rounded-3xl">
      <div className="w-full 2xl:w-1/4 text-4xl 2xl:text-6xl font-semibold flex flex-wrap justify-center items-center text-black">
        <div className="tracking-tight w-full pb-8 flex flex-col justify-center items-center 2xl:items-start 2xl:justify-start">
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
        className="flex w-full 2xl:w-3/4 justify-end text-black tracking-tight h-[500px] 2xl:h-full pl-10"
      >
        {props.data.map((faq, index) => (
          <div
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
            className="flex w-28 h-full relative overflow-hidden transition-all ease-out duration-500 cursor-pointer first:rounded-l-3xl last:rounded-r-3xl"
          >
            <div
              style={{
                opacity:
                  (props.data.length - index) / props.data.length / 2 + 0.5,
              }}
              className="inset-0 m-auto bg-yellow absolute"
            ></div>

            <div className="absolute w-28 h-full overflow-hidden z-10 whitespace-nowrap">
              <div
                className="absolute w-96 -rotate-90 origin-[0%_0%] mt-96 top-20 left-6 transition-all ease-out duration-500 font-semibold text-2xl"
                style={{
                  opacity: currentIndex === index ? 0 : 1,
                  transform:
                    currentIndex === index
                      ? "translateX(-200px) rotate(-90deg)"
                      : "translateX(0px) rotate(-90deg)",
                }}
              >
                {faq.question}
              </div>
            </div>

            <div
              style={{
                left: currentIndex === index ? "60px" : "108px",
              }}
              className="absolute left-24 transition-all ease-out duration-500 w-full h-full"
            >
              <div
                style={{
                  width: containerW,
                }}
                className="absolute top-10 text-4xl 2xl:text-5xl font-semibold w-[800px]"
              >
                {faq.question}
              </div>

              <div
                style={{
                  width: containerW,
                }}
                className="absolute top-32 text-lg font-medium w-[600px] faq-answer overflow-scroll h-full max-h-[350px]"
              >
                <div className="h-full">
                  <DocumentRenderer document={faq.answer.document} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
