import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSpots } from "../../store/spots";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import './allSpots.css'


export default function AllSpots() {
  const dispatch = useDispatch();
  const spots = useSelector((state) => state.spots.allSpots);

  const spotsList = Object.values(spots);

  spotsList.map(spot => {
    if(typeof spot.avgRating === 'string') {
      spot.avgRating = 'New'
      return (spot.avgRating = "New");
    }
  })

  const allSpots = spotsList.map(
    ({ id, previewImage, city, state, price, avgRating, name }) => (
      <div key={id}>
        <div className="single-spot">
          <Link to={`/spots/${id}`}>
            <div className="single-spot-image-div">
              <img
                src={
                  previewImage ||
                  "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
                }
                alt="house you may want to rent"
                title={name}
              />
            </div>
            <div className="single-spot-city-state-price">
              <div className="single-spot-city-state">
                {city}, {state}
              </div>
              <div className="single-spot-price">{price} night</div>
              <div classname="single-spot-star-rating">
                <i className="fas fa-star" /> {typeof avgRating === 'number' && avgRating.toFixed(2)}{typeof avgRating === 'string' && avgRating}
              </div>
            </div>
          </Link>
        </div>
      </div>
    )
  );


  useEffect(() => {
    dispatch(getSpots());
  }, [dispatch]);
  

  if (!spots) return null;
  return (
    <div className="all-Spots">
      <h1 className="all-spots-title">All Spots</h1>
      <div className="all-spots-container">
        {allSpots}
      </div>
    </div>
  );
}
