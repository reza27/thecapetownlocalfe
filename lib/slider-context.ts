import { createContext, useContext } from "react";
export const SliderContext = createContext<Array<any> | undefined>(undefined);

export function useSliderContext() {
  const sliderObjects = useContext(SliderContext);
  if (sliderObjects === undefined) {
    throw new Error("Slider objects cannot be empty");
  }

  return sliderObjects;
}
