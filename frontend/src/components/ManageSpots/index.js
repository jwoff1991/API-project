import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserSpots } from "../../store/spots";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import DeleteSpotModal from "../DeleteSpotModal";
import OpenModalMenuItem from "../Navigation/OpenModalMenuItem";
import './ManageSpot.css'
import { useHistory } from "react-router-dom";

export default function ManageSpots() {
  const dispatch = useDispatch();
  const spots = useSelector((state) => state.spots.allSpots);
  const history = useHistory()

  let spotsList = Object.values(spots)


  useEffect(() => {
    dispatch(getUserSpots());
  }, [dispatch]);


  if (!spotsList.length) {
    return (
      <div>
        <h1>Manage Spots</h1>
        <Link to={"/spots/new"}>
          <button>Create a New Spot</button>
        </Link>
      </div>
    );
  }

  spotsList.map((spot) => {
    if (typeof spot.avgRating === "string") {
      spot.avgRating = "New";
      return (spot.avgRating = "New");
    }
  });

  const createSpot = () => {
    return history.push('/spots/new')

  }

  return (
    <div className="all-Spots">
      <div className="manage-spots-heading">

      <h1>Manage Spots</h1>
      <button className="manage-spots-create-button" onClick={createSpot}>Create a new Spot</button>
      </div>

      <div className="all-spots-container">
        {spotsList.map(
          ({ id, previewImage, city, state, price, avgRating }) => (
            <div key={id}>
              <div className="manage-spot">
                <Link to={`/spots/${id}`}>
                  <div className="manage-spot-image-div">
                    <img
                      src={
                        previewImage ||
                        "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
                      }
                      alt="house you may want to rent"
                    />
                  </div>
                  <div className="manage-spot-city-state-price">
                    <div className="manage-spot-city-state">
                      {city}, {state}
                    </div>
                    <div className="manage-spot-price">{price} night</div>
                    <div classname="single-spot-star-rating">
                      <i className="fas fa-star" />{" "}
                      {typeof avgRating === "number" && avgRating.toFixed(2)}
                      {typeof avgRating === "string" && avgRating}
                    </div>
                  </div>
                </Link>
              </div>
              <div className="update-delete-buttons">
                <Link to={`/spots/${id}/edit`}>
                  <button className="manage-spots-update-button">Update</button>
                </Link>
                <button>
                  <OpenModalMenuItem
                    itemText="Delete"
                    modalComponent={<DeleteSpotModal props={id} />}
                  />
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
