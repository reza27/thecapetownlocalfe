import { useSliderContext } from "../lib/contexts/slider-context";
import ImageLoader from "./image-loader";
import Image from "next/image";

export default function TourThumbnails({ width, height, index }) {
  const images = useSliderContext();

  return (
    <div id={"spotlight-container" + index} className="relative">
      <div
        id={"spotlight" + index}
        className="opacity-60 bg-white z-50 absolute top-0 left-0 spotlight"
        style={{
          width: width + "px",
          height: height / images.length + "px",
        }}
      ></div>
      <ul
        className="rounded-xl flex flex-col overflow-hidden relative z-10"
        style={{
          width: width + "px",
          height: height + "px",
        }}
      >
        {images.map((image, index) => (
          <li key={image.id} className="">
            <Image
              loader={ImageLoader}
              alt={image.altText}
              src={image.image.publicUrl}
              sizes="(max-width: 300px) 100vw,
                 (max-width: 200px) 50vw,
                 auto"
              width={100}
              height={100}
              className="transition-all duration-150"
              style={{
                objectFit: "cover",
                objectPosition: "center top",
                height: height / images.length + "px",
                width: "100%",
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
