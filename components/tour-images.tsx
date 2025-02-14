import { useSliderContext } from "../lib/contexts/slider-context";
import ImageLoader from "./image-loader";
import Image from "next/image";

export default function TourImages({ isMobile, screenWidth }) {
  const images = useSliderContext();

  return (
    <ul
      className="rounded-3xl items flex section relative grow shrink-0 h-[320px] lg:h-[100vh]"
      style={{
        flexBasis: isMobile ? images.length * 100 + "%" : "auto",
        flexDirection: isMobile ? "row" : "column",
      }}
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
            className="transition-all duration-150 h-[320px] lg:h-[100vh]"
            style={{
              objectFit: "cover",
              objectPosition: isMobile ? "center top" : "center top",
              width: "100%",
            }}
          />
        </li>
      ))}
    </ul>
  );
}
