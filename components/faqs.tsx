import { DocumentRenderer } from "@keystone-6/document-renderer";
import React, { useState } from "react";

export const Faqs = ({ ...props }) => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(0);
  const [hoverIndex, setHoverIndex] = useState<number | null>(0);

  return (
    <div className="flex w-full h-[500px] rounded-3xl overflow-hidden">
      <div className="w-1/4 text-6xl font-semibold flex justify-center items-center text-black">
        <div className="tracking-tight">
          <p className="text-yellow text-sm">FAQS</p>
          Frequently
          <br />
          Asked
          <br />
          Questions
        </div>
      </div>
      <div className="flex w-3/4 justify-end text-black tracking-tight">
        {props.data.map((faq, index) => (
          <div
            style={{
              width: currentIndex === index ? "100%" : "106px",
            }}
            onClick={() => {
              if (currentIndex === index) {
                setCurrentIndex(null);
              } else {
                setCurrentIndex(index);
              }
            }}
            className="flex w-28 h-full relative overflow-hidden transition-all duration-1000 cursor-pointer first:rounded-l-3xl"
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
                className=" absolute w-96 -rotate-90 origin-[0%_0%] mt-96 top-20 left-6 transition-all duration-500 font-semibold text-2xl"
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
              className="absolute left-24 transition-all duration-2000"
            >
              <div className="absolute top-10 whitespace-nowrap text-5xl font-semibold">
                {faq.question}
              </div>

              <div className="absolute top-28 whitespace-nowrap text-md font-medium">
                <DocumentRenderer document={faq.answer.document} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
