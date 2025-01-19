import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSliderContext } from "../lib/contexts/slider-context";
import { faArrowRight, faStar } from "@fortawesome/free-solid-svg-icons";
import { IGoogleReview } from "../types/IGoogleReview";
import Link from "next/link";

export default function ReviewsV2({ screenWidth }) {
  const reviews = useSliderContext();

  const minBlockW = 500;
  const maxBlocks = 3;
  const minBlocks = 1;
  const numBlocks = Math.floor(
    Math.min(Math.max(screenWidth / minBlockW, minBlocks), maxBlocks)
  );

  let basis: string = "full";

  switch (+(100 / numBlocks).toFixed(0)) {
    case 100:
      basis = "full";
      break;
    case 50:
      basis = "half";
      break;
    case 33:
      basis = "third";
      break;
    default:
      "full";
  }

  const reviewContainerCss = `basis-${basis} md:px-6 py-6 h-[380px] grow shrink-0`;

  let getStars = (numStars) => {
    let stars: any[] = [];

    for (let i = 0; i < numStars; i++) {
      stars.push(
        <div className="text-yellow" key={i}>
          <FontAwesomeIcon icon={faStar} />
        </div>
      );
    }
    return stars;
  };

  return (
    <>
      {screenWidth &&
        reviews.map((review: IGoogleReview) => (
          <div
            key={review.publishTime.toString()}
            className={reviewContainerCss}
          >
            <div className="bg-white rounded-3xl p-6 overflow-scroll h-full">
              <div className="flex justify-between my-4">
                <div className="flex items-center">
                  <div className="font-medium text-black text-xs sm:text-sm">
                    {review.relativePublishTimeDescription}
                  </div>
                </div>

                <div className="flex">{getStars(review.rating)}</div>
              </div>
              <p className="text-sm leading-relaxed">{review.text.text}</p>
              <div className="flex items-center justify-end pt-5">
                <div className="font-medium text-black text-sm sm:text-base pr-4">
                  {review.authorAttribution.displayName}
                </div>
                <div className="overflow-hidden rounded w-8 sm:w-10 h-auto">
                  <Link
                    href={review.authorAttribution.uri.toString()}
                    target="blank"
                  >
                    <img
                      src={review.authorAttribution.photoUri.toString()}
                    ></img>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}
