import { useSliderContext } from "../lib/contexts/slider-context";
import ImageLoader from "./image-loader";
import Image from "next/image";

export default function TourThumbnails({ thumbWidth, thumbHeight, index }) {
  const images = useSliderContext();
  console.log("thumb render");

  return (
    <div id={"spotlight-container" + index} className="relative">
      <div
        id={"spotlight" + index}
        className="opacity-50 bg-white z-50 absolute top-0 left-0 spotlight pointer-events-none"
        style={{
          width: thumbWidth,
          height: thumbHeight,
        }}
      ></div>
      <ul
        className="rounded-xl flex flex-col overflow-hidden relative z-10"
        style={{
          width: thumbWidth,
        }}
      >
        {images.map((image, index) => (
          <li key={image.id} className="thumb cursor-pointer">
            <Image
              loader={ImageLoader}
              alt={image.altText}
              src={image.image.publicUrl}
              sizes="(max-width: 300px) 100vw,
                 (max-width: 200px) 50vw,
                 auto"
              width={100}
              height={100}
              className="transition-all duration-150 saturate-[1.0] hover:saturate-[1.2]"
              style={{
                objectFit: "cover",
                objectPosition: "center top",
                height: thumbHeight,
                width: thumbWidth,
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
