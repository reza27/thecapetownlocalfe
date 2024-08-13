import { useSliderContext } from "../lib/contexts/slider-context";

export default function Reviews() {
  const images = useSliderContext();

  return (
    <>
      {images.map((image, index) => (
        <div
          key={image.id + "-" + index}
          className="panel-image"
          style={{
            backgroundImage: "url(" + image?.image?.publicUrl + ")",
            backgroundPosition: "center",
          }}
        ></div>
      ))}
    </>
  );
}
