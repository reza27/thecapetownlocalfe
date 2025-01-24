import { useSliderContext } from "../lib/contexts/slider-context";
import ImageLoader from "./image-loader";
import Image from "next/image";

export default function TourImages() {
  const images = useSliderContext();

  return (
    <ul
      className="rounded-3xl items flex flex-col section"
      style={{
        height: "calc(100vh - 152px)",
      }}
    >
      {images.map((image, index) => (
        <li key={image.id} className="item panel">
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
              height: "calc(100vh - 152px)",
              width: "100%",
            }}
          />
        </li>
      ))}
    </ul>
  );
}
