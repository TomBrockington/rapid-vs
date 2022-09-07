import React, { useState } from "react";
import { titles } from "../vars/vars";
import "../styles/reviewsRatings.css";

function ReviewsRating() {
  const [reviewScores, setReviewScores] = useState([]);
  const [stars, setStars] = useState();
  const [averageScore, setAverageScore] = useState(5);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [hover, setHover] = useState(0);

  const textData = titles;

  return (
    <section className="rating__container">
      <div className="leaveRating__container">
        <h2>{textData.ratingTitle}</h2>
        <h3>Score: {hoverRating} Stars</h3>
        <div className="star-rating">
          {[...Array(5)].map((star, index) => {
            index += 1;
            return (
              <p
                type="button"
                key={index}
                className={index <= (hover || rating) ? "on" : "off"}
                onClick={() => setRating(index)}
                onDoubleClick={() => {
                  setRating(0);
                  setHover(0);
                }}
                onMouseEnter={() => {
                  setHover(index);
                  setHoverRating(index);
                }}
                onMouseLeave={() => setHover(rating)}
              >
                <span className="star">⭐</span>
              </p>
            );
          })}
        </div>
      </div>
      <div className="database__reviews">
        <h3>
          My Current Reviews
        </h3>
      </div>
    </section>
  );
}

export default ReviewsRating;
