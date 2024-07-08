import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSpots } from "../../store/spots";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import './allSpots.css'


export default function AllSpots() {
  const dispatch = useDispatch();
  const spots = useSelector((state) => state.spots.allSpots);

  useEffect(() => {
    dispatch(getSpots());
  }, [dispatch]);

  const spotsList = useMemo(() => Object.values(spots).map(spot => ({
    ...spot,
    avgRating: typeof spot.avgRating === 'string' ? 'New' : spot.avgRating
  })), [spots]);

  const allSpots = spotsList.map(({ id, previewImage, city, state, price, avgRating, name }) => (
    <div key={id} className="single-spot">
      <Link to={`/spots/${id}`}>
        <div className="single-spot-image-div">
          <img src={previewImage} alt={`Preview of ${name}`} />
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
  ));

  return (
    <div>{allSpots}</div>
  );
}



