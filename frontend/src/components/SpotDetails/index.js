import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSpot } from "../../store/spots";
import { useParams } from "react-router-dom";
import SpotReviews from "../SpotReviews";
import StarRatingAndReviewRender from "./StarRatingAndReviewsRender";
import "./SpotDetails.css";

export default function SpotDetails() {
  const { spotId } = useParams();
  const dispatch = useDispatch();
  const singleSpot = useSelector((state) => state.spots.singleSpot);

  useEffect(() => {
    dispatch(getSpot(spotId));
  }, [dispatch, spotId]);

  if (!singleSpot.id) return null;

  //dealing with spot images
  let spotImages = [];
  singleSpot.SpotImages.forEach((image) => {
    spotImages.push(image);
  });

  for (let i = 0; i <= 4; i++) {
    spotImages.push({
      url: "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg",
    });
  }

  let averageStartRating;
  if (typeof singleSpot.avgStarRating === "undefined") {
    averageStartRating = null;
  } else if (typeof singleSpot.avgStarRating === "string") {
    averageStartRating = "New";
  } else {
    averageStartRating = singleSpot.avgStarRating.toFixed(2);
  }

  let spotNumReviews = singleSpot.numReviews

  //dealing with reviews rendering
  let starRatingRender;
  let numberReviewsRender
  if (singleSpot.numReviews === 0) {
    starRatingRender = `New`;
    numberReviewsRender = null
  } else if(singleSpot.numReviews === 1){
    starRatingRender = averageStartRating;
    numberReviewsRender = '1 Review'
  } else {
    starRatingRender = averageStartRating;
    numberReviewsRender = `${singleSpot.numReviews} Reviews`
  }



  //need to add <span>&#183;</span> ${singleSpot.numReviews} reviews`

  return (
    <div className="single-spot-container">
      <div className="spot-name-and-location">
        <h1>{singleSpot.name}</h1>
        <p>
          {singleSpot.city}, {singleSpot.state}, {singleSpot.country}
        </p>
      </div>
      <div className="spot-images">
        <img
          className="spot-details-preview-image"
          src={spotImages[0].url}
          alt="the house for rent"
        />

        <img
          className="spot-details-image-one"
          src={spotImages[1].url}
          alt="the house for rent"
        />

        <img
          className="spot-details-image-two"
          src={spotImages[2].url}
          alt="the house for rent"
        />

        <img
          className="spot-details-image-three"
          src={spotImages[3].url}
          alt="the house for rent"
        />

        <img
          className="spot-details-image-four"
          src={spotImages[4].url}
          alt="the house for rent"
        />
      </div>

      <div className="hosted-by-description-reserve">
        <div className="hosted-by">
          Hosted by {singleSpot.Owner.firstName} {singleSpot.Owner.lastName}
        </div>
        <div className="description">{singleSpot.description}</div>
        <div className="reserve-box">
          <div className="price-per-night">{singleSpot.price} night</div>
          <div className="star-rating-num-reviews"><i class="fas fa-star"></i> {starRatingRender} {numberReviewsRender}</div>
          <div className="reserve-button-div">
            <button className="reserve-button">Reserve</button>
          </div>
        </div>
      </div>
      <div className="reviews">
        <div className="star-rating-num-reviews-over-reviews">
        <i class="fas fa-star"></i> {starRatingRender} {numberReviewsRender}
        </div>
        <div className="reviews-container">
          <SpotReviews />
        </div>
      </div>
    </div>
  );
}
