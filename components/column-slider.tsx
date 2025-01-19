import { useState } from "react";
import { useSliderContext } from "../lib/contexts/slider-context";

let lastScreenW = 0;
export default function ColumnSlider({ screenWidth = 400, children }) {
  //console.log("sliderObjects", children);
  const [currIndex, setCurrIndex] = useState<number>(0);

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
          className="w-3 h-3 rounded-full bg-gray-500 mr-1.5"
          style={
            currIndex === index
              ? { backgroundColor: "#FCB400" }
              : { backgroundColor: "grey" }
          }
          key={index}
          data-index={index}
          onClick={(e) => {
            setCurrIndex(+e.target.dataset.index);
          }}
        ></div>
      );
    });
  };

  return (
    <div className="overflow-hidden relative tr flex flex-col">
      <div
        className="flex w-full transition duration-150 ease-in-out"
        style={childrenStyle}
      >
        {children}
      </div>
      <div className="flex justify-center items-center mt-3 sm:mt-6">
        {getNav()}
      </div>
    </div>
  );
}
