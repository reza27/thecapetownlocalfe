import { useState } from "react";
import { useSliderContext } from "../lib/contexts/slider-context";

let lastScreenW = 0;
export default function ColumnSlider({ screenWidth, children }) {
  const [currIndex, setCurrIndex] = useState<number>(0);
  const [dotHoverIndex, setDotHoverIndex] = useState<number | null>(null);

  const items = useSliderContext();

  const minBlockW = 500;
  const maxBlocks = 3;
  const minBlocks = 1;
  const numBlocks = Math.floor(
    Math.min(Math.max(screenWidth / minBlockW, minBlocks), maxBlocks)
  );

  const numNavDotsArr: Array<number> = new Array(
    Math.ceil(items.length / numBlocks)
  );

  let childrenStyle = {
    transform: `translateX(${-currIndex * 100}%)`,
  };

  if (lastScreenW !== screenWidth) {
    setCurrIndex(0);
  }

  lastScreenW = screenWidth;

  const getNav = () => {
    return [...numNavDotsArr].map((dotItem, index) => {
      return (
        <div
          className="w-3 h-3 rounded-full bg-gray-500 mr-1.5 cursor-pointer transition duration-300"
          style={
            currIndex === index
              ? { backgroundColor: "#FCB400" }
              : {
                  backgroundColor: dotHoverIndex === index ? "#FCB400" : "grey",
                  opacity: dotHoverIndex === index ? 0.8 : 1,
                }
          }
          key={index}
          data-index={index}
          onMouseEnter={() => setDotHoverIndex(index)}
          onMouseLeave={() => setDotHoverIndex(null)}
          onClick={(e) => {
            setCurrIndex(+e.target.dataset.index);
          }}
        ></div>
      );
    });
  };

  return (
    <div className=" relative tr flex flex-col pb-14">
      <div className="overflow-hidden rounded-3xl flex">
        <div
          className="flex w-full transition duration-250 ease-out"
          style={childrenStyle}
        >
          {children}
        </div>
      </div>

      <div className="flex justify-center items-center my-3 sm:mt-6 absolute inset-x-0 bottom-0 m-auto">
        {getNav()}
      </div>
    </div>
  );
}
