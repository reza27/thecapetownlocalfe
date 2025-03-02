import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSliderContext } from "../lib/contexts/slider-context";
import { faArrowRight, faStar } from "@fortawesome/free-solid-svg-icons";
import { IGoogleReview } from "../types/IGoogleReview";
import Link from "next/link";
import Image from "next/image";

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

  const reviewContainerCss = `basis-${basis} px-1 md:px-6 pt-8 pb-6 grow shrink-0`;

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
            <div className="flex w-full justify-center min-h-6 items-center relative">
              <div className="overflow-hidden rounded w-20 h-20 flex absolute -top-4">
                <Link
                  className="w-full"
                  href={review.authorAttribution.uri.toString()}
                  target="blank"
                >
                  <Image
                    src={review.authorAttribution.photoUri.toString()}
                    width={77}
                    height={77}
                    alt={review.authorAttribution.displayName}
                  />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 h-full">
              <div className="font-medium w-full text-gray-900 text-lg text-center pt-6">
                {review.authorAttribution.displayName}
              </div>
              {/* <div className="flex justify-between my-2">
                <div className="items-center hidden md:flex">
                  <div className="font-medium text-black text-xs sm:text-sm">
                    {review.relativePublishTimeDescription}
                  </div>
                </div> */}

              <div className="flex w-full justify-center md:w-auto pt-2">
                {getStars(review.rating)}
                {/* </div> */}
              </div>
              <div className="w-full max-h-48 pt-4 overflow-y-auto">
                <p className="text-[13px] text-center text-gray-800 leading-relaxed">
                  {review.text.text}
                </p>
                {/* <div className="items-center justify-end pt-5 hidden md:flex">
                  <div className="font-medium text-black text-sm sm:text-base pr-4">
                    {review.authorAttribution.displayName}
                  </div>
                  <div className="overflow-hidden rounded w-8 sm:w-10 h-auto">
                    <Link
                      href={review.authorAttribution.uri.toString()}
                      target="blank"
                    >
                      <Image
                        src={review.authorAttribution.photoUri.toString()}
                        width={50}
                        height={50}
                        alt={review.authorAttribution.displayName}
                      />
                    </Link>
                  </div>
                </div> */}
              </div>
              <div className="items-center justify-center flex pt-5">
                <div className="font-medium text-gray-800 text-sm">
                  {review.relativePublishTimeDescription}
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}
