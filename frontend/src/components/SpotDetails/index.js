import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSpot } from "../../store/spots";
import { useParams } from "react-router-dom";
import SpotReviews from "../SpotReviews";
import "./SpotDetails.css";

export default function SpotDetails() {
  const { spotId } = useParams();
  const dispatch = useDispatch();
  const singleSpot = useSelector((state) => state.spots.singleSpot);


  useEffect(() => {
    dispatch(getSpot(spotId));
  }, [dispatch, spotId]);

  if (!singleSpot.id) return null;


  let spotImages = [];
  singleSpot.SpotImages.forEach((image) => {
    spotImages.push(image);
  });
  console.log(spotImages)

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
          src={spotImages[0].url || "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ANo_Image_Available.jpg&psig=AOvVaw3tv2v-rO2QZL4m5-gb3EY5&ust=1691075991019000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPiMuI6jvoADFQAAAAAdAAAAABAE"}
          alt="picture of house"
        />

        <img
          className="spot-details-image-one"
          src={spotImages[1].url || "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ANo_Image_Available.jpg&psig=AOvVaw3tv2v-rO2QZL4m5-gb3EY5&ust=1691075991019000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPiMuI6jvoADFQAAAAAdAAAAABAE"}
          alt="picture of house"
        />

        <img
          className="spot-details-image-two"
          src={spotImages[2].url || "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ANo_Image_Available.jpg&psig=AOvVaw3tv2v-rO2QZL4m5-gb3EY5&ust=1691075991019000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPiMuI6jvoADFQAAAAAdAAAAABAE"}
          alt="picture of house"
        />

        <img
          className="spot-details-image-three"
          src={spotImages[3].url || "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ANo_Image_Available.jpg&psig=AOvVaw3tv2v-rO2QZL4m5-gb3EY5&ust=1691075991019000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPiMuI6jvoADFQAAAAAdAAAAABAE"}
          alt="picture of house"
        />

        <img
          className="spot-details-image-four"
          src={spotImages[4].url || "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ANo_Image_Available.jpg&psig=AOvVaw3tv2v-rO2QZL4m5-gb3EY5&ust=1691075991019000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPiMuI6jvoADFQAAAAAdAAAAABAE"}
          alt="picture of house"
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
            {singleSpot.avgStarRating} O {singleSpot.numReviews} reviews
          </div>
          <div className="reserve-button-div">
            <button className="reserve-button">Reserve</button>
          </div>
        </div>
      </div>
      <div className="reviews">
        <div className="star-rating-num-reviews-over-reviews">
          {singleSpot.avgStarRating} O {singleSpot.numReviews} reviews
        </div>
        <div className="reviews-container"><SpotReviews /></div>
      </div>
    </div>
  );
}
