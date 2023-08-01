import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserSpots } from "../../store/spots";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import DeleteSpotModal from "../DeleteSpotModal";
import OpenModalMenuItem from "../Navigation/OpenModalMenuItem";
import './ManageSpot.css'

export default function ManageSpots() {
  const dispatch = useDispatch();
  const spots = useSelector((state) => state.spots.allSpots);

  let spotsList = Object.values(spots);

  useEffect(() => {
    dispatch(getUserSpots());
  }, [dispatch]);

  if (!spotsList) return null;
  return (
    <div className="all-Spots">
      <h1>Manage Spots</h1>
      <Link to={"/spots/new"}>
        <button>Create a New Spot</button>
      </Link>
      <div className="all-spots-container">
        {spotsList.map(({ id, previewImage, city, state, price }) => (
          <div key={id}>
            <div className="single-spot">
              <Link to={`/spots/${id}`}>
                <ul>
                  <li>{previewImage}</li>
                  <li>
                    {city}, {state}
                  </li>
                  <li>{price}</li>
                </ul>
              </Link>
            </div>
            <div className="update-delete-buttons">
              <Link to={`/spots/${id}/edit`}>
                <button>Update</button>
              </Link>
              <button>
                <OpenModalMenuItem
                  itemText="Delete"
                  modalComponent={<DeleteSpotModal props={id}/>}
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
