import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSliderContext } from "../lib/contexts/slider-context";
import { faArrowRight, faStar } from "@fortawesome/free-solid-svg-icons";
import { IGoogleReview } from "../types/IGoogleReview";
import Link from "next/link";

export default function ReviewsV2({ screenWidth = 1200 }) {
  const reviews = useSliderContext();

  const minBlockW = 300;
  const maxBlocks = 3;
  const minBlocks = 1;
  const numBlocks = Math.floor(
    Math.min(Math.max(screenWidth / minBlockW, minBlocks), maxBlocks)
  );

  console.log("screenWidth", screenWidth, numBlocks);

  //const reviewContainerCss = `flex w-1/${numBlocks}`;
  const reviewContainerCss = `w-full`;
  const reviewStyle = {
    width: `${100 / numBlocks}%`,
  };

  let getStars = (numStars) => {
    let stars: any[] = [];

    for (let i = 0; i < numStars; i++) {
      stars.push(
        <div className="star" key={i}>
          <FontAwesomeIcon icon={faStar} />
        </div>
      );
    }
    return stars;
  };

  return (
    <>
      {reviews &&
        reviews.map((review: IGoogleReview) => (
          <div
            key={review.publishTime.toString()}
            className="flex-[1_0_33.33%] p-6 h-[450px]"
          >
            <div className="bg-white rounded-3xl p-6">
              <div className="flex items-center mb-2">
                <div className="overflow-hidden rounded w-7 h-auto ">
                  <img src={review.authorAttribution.photoUri.toString()}></img>
                </div>
                <div className="font-medium pl-4 text-black">
                  {review.authorAttribution.displayName}
                </div>
              </div>

              <div className="flex">{getStars(review.rating)}</div>
              <p>{review.text.text}</p>
              <Link
                className="review-link"
                href={review.authorAttribution.uri.toString()}
                target="blank"
              >
                See full Google review <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </div>
          </div>
        ))}
    </>
  );
}
