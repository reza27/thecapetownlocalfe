import { useSliderContext } from "../lib/contexts/slider-context";
import { IGoogleReview } from "../types/IGoogleReview";

export default function ColumnSlider({ screenWidth = 1200, children }) {
  //console.log("sliderObjects", children);

  const items = useSliderContext();

  const minBlockW: number = 300;
  const maxBlocks: number = 3;
  const minBlocks: number = 1;
  const numColumnBlocks: number = Math.floor(
    Math.min(Math.max(screenWidth / minBlockW, minBlocks), maxBlocks)
  );

  const sliderW: number =
    Math.max(Math.ceil(items.length / numColumnBlocks), 1) * 100;
  const sliderStyles = { width: `${sliderW}%` };

  console.log(
    "sliderW",
    // Math.ceil(items.length / numColumnBlocks),
    //numColumnBlocks,
    screenWidth,
    minBlockW,
    screenWidth / minBlockW
  );

  return (
    <div className="overflow-hidden relative">
      <div className="flex w-full">{children}</div>
    </div>
  );
}
