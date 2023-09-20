import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSpot } from "../../store/spots";
import { useParams } from "react-router-dom";
import SpotReviews from "../SpotReviews";
import OpenModalMenuItem from "../Navigation/OpenModalMenuItem";
import ReserveSpotModal from "../ReserveSpotModal";
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
          <div className="star-rating-num-reviews">
          {(singleSpot.numReviews === 0 || !singleSpot.numReviews) && (
            <div>
              <i className="fas fa-star"></i> New
            </div>
          )}{" "}
          {singleSpot.numReviews === 1 && (
            <div>
              <i className="fas fa-star"></i> {averageStartRating}{" "}
              <span>&#183;</span> 1 Review
            </div>
          )}{" "}
          {singleSpot.numReviews > 1 && (
            <div>
              <i className="fas fa-star"></i> {averageStartRating}{" "}
              <span>&#183;</span> {singleSpot.numReviews} Reviews{" "}
            </div>
          )}
          </div>
          <div className="reserve-button-div">
            <button className="reserve-button" /* onClick={featureComingSoon} */>

              <OpenModalMenuItem
                itemText="Reserve"
                modalComponent={<ReserveSpotModal props={spotId}/>}
                />
              </button>
          </div>
        </div>
      </div>
      <div className="reviews">
        <div className="star-rating-num-reviews-over-reviews">
          {(singleSpot.numReviews === 0 || !singleSpot.numReviews) && (
            <div>
              <i className="fas fa-star"></i> New
            </div>
          )}{" "}
          {singleSpot.numReviews === 1 && (
            <div>
              <i className="fas fa-star"></i> {averageStartRating}{" "}
              <span>&#183;</span> 1 Review
            </div>
          )}{" "}
          {singleSpot.numReviews > 1 && (
            <div>
              <i className="fas fa-star"></i> {averageStartRating}{" "}
              <span>&#183;</span> {singleSpot.numReviews} Reviews{" "}
            </div>
          )}
        </div>
        <div className="reviews-container">
          <SpotReviews />
        </div>
      </div>
    </div>
  );
}
