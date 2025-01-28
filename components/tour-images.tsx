import { useSliderContext } from "../lib/contexts/slider-context";
import ImageLoader from "./image-loader";
import Image from "next/image";

export default function TourImages({ height, ref, isMobile, screenWidth }) {
  const images = useSliderContext();

  return (
    <ul
      className="rounded-3xl items flex section relative grow shrink-0"
      style={{
        height: height,
        flexBasis: isMobile ? images.length * 100 + "%" : "auto",
        flexDirection: isMobile ? "row" : "column",
      }}
      ref={ref}
    >
      {images.map((image, index) => (
        <li key={image.id} className="panel">
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
              objectPosition: isMobile ? "center top" : "center top",
              height: height,
              width: "100%",
            }}
          />
        </li>
      ))}
    </ul>
  );
}
