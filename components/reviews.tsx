import { IReview } from "../types/IReview";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faStar } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useSliderContext } from "../lib/contexts/slider-context";

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
      {reviews.map((review: IReview) => (
        <div key={review.name} className="review">
          <div className="inner-review">
            <h3>{review.name}</h3>
            <div className="stars">{getStars(review.stars)}</div>
            <p>{review.review}</p>
            <Link className="review-link" href={review.url} target="blank">
              See full Google review <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
