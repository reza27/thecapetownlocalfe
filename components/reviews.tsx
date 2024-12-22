import { IReview } from "../types/IReview";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faStar } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useSliderContext } from "../lib/contexts/slider-context";
import { IGoogleReview } from "../types/IGoogleReview";

export default function Reviews() {
  const reviews = useSliderContext();

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
          <div key={review.publishTime.toString()} className="review">
            <div className="inner-review">
              <div className="flex items-center mb-2">
                <div className="overflow-hidden rounded w-7 h-auto ">
                  <img src={review.authorAttribution.photoUri.toString()}></img>
                </div>
                <div className="font-medium pl-4 text-black">
                  {review.authorAttribution.displayName}
                </div>
              </div>

              <div className="stars">{getStars(review.rating)}</div>
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
