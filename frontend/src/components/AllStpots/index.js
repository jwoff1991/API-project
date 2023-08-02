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


  useEffect(() => {
    dispatch(getSpots());
  }, [dispatch]);

  if (!spots) return null;
  return (
    <div className="all-Spots">
      <h1>All Spots</h1>
      <div className="all-spots-container">
        {spotsList.map(({ id, previewImage, city, state, price }) => (
          <div key={id}>
            <div className="single-spot">
              <Link to={`/spots/${id}`}>
                <div className="single-spot-image-div"><img src={previewImage} alt="picture of house" /></div>
                <div className="single-spot-city-state-price">
                  <div className="single-spot-city-state">
                    {city}, {state}
                  </div>
                  <div className="single-spot-price">{price} night</div>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
