import { useState } from "react";
import React from "react";

const StarRating = ({ onChange }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => {
          const currentRating = index + 1;
          return (
            <radio
              type="button"
              kay={index}
              className={
                currentRating <= (hover || currentRating) ? "on" : "off"
              }
              onClick={() => {
                setRating(currentRating);
                onChange(currentRating);
              }}
              onMouseEnter={() => setHover(currentRating)}
              onMouseLeave={() => setHover(rating)}
            >
              {currentRating <= (hover || rating) ? (
                <i className="fa-solid fa-star" />
              ) : (
                <i className="fa-regular fa-star" />
              )}
            </radio>
          );
        })}
    </div>
  );
};


export default StarRating
