import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSpot } from "../../store/spots";
import { useParams } from "react-router-dom";

export default function SpotDetails() {
  const { spotId } = useParams();
  const dispatch = useDispatch();
  const singleSpot = useSelector((state) => state.spots.singleSpot);

  console.log(singleSpot);
  useEffect(() => {
    dispatch(getSpot(spotId));
  }, [dispatch, spotId]);


  if (!singleSpot.id) return null;

  return (
    <div className="single-spot-container">
      <div className="spot-name-and-location">
        <h1>{singleSpot.name}</h1>
        <p>
          {singleSpot.city}, {singleSpot.state}, {singleSpot.country}
        </p>
      </div>
      <div className="spot-images">
        <div className="main-image"></div>
        <div className="images"></div>
      </div>
      <div className="hosted-by-description-reserve">
        <div className="hosted-by">
          Hosted by {singleSpot.Owner.firstName} {singleSpot.Owner.lastName}
        </div>
        <div className="description">{singleSpot.description}</div>
        <div className="reserve-box">
          <div className="price-per-night">{singleSpot.price} night</div>
          <div className="star-rating-num-reviews">
            {singleSpot.avgStarRating} . {singleSpot.numReviews} reviews
          </div>
        </div>
      </div>
      <div className="reviews">
        <div className="star-rating-num-reviews-over-reviews">{singleSpot.avgStarRating} . {singleSpot.numReviews} reviews</div>
        <div className="reviews-container">
          NEED TO ADD REVIEWS HERE LATER
        </div>
      </div>
    </div>
  );
}
