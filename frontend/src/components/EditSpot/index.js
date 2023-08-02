import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {editSpot } from "../../store/spots";
import "./editSpot.css";
import { useHistory } from 'react-router-dom';
import { useParams } from "react-router-dom";


export default function EditSpot() {
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const spotId = useParams().spotId


  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newEditedSpot ={
    spot: {
      address,
      city,
      state,
      country,
      lat,
      lng,
      name,
      description,
      price
    },
    id: {spotId}
};

    const editedSpot = await dispatch(editSpot(newEditedSpot));

    reset();
    history.push(`/spots/${editedSpot.id}`);
  };

  const reset = () => {
    setAddress('')
    setCity('')
    setState('')
    setCountry('')
    setLat('')
    setLng('')
    setName('')
    setDescription('')
    setPrice('')
  }

  return (
    <div className="update-form-inputBox">
      <form className="update-spot-form" onSubmit={handleSubmit}>
        <h1>Update your Spot</h1>
        <div className="update-form-place-located-question">
          <h2>Where's your place located?</h2>
          <p>
            Guests will only get your exact address once they booked a
            reservation.
          </p>
        </div>
        <div className="update-form-spot-address">
          <label>Country</label>
          <input
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            name="country"
            placeholder="country"
          ></input>
          <label>Street Address</label>
          <input
            type="text"
            onChange={(e) => setAddress(e.target.value)}
            value={address}
            placeholder="Address"
            name="address"
          />
          <div className="city-state-update-form">
            <label>City</label>
            <input
              type="text"
              onChange={(e) => setCity(e.target.value)}
              value={city}
              placeholder="City"
              name="city"
            />,
            <label> State</label>
            <input
              value={state}
              onChange={(e) => setState(e.target.value)}
              name="state"
              placeholder="State"
            ></input>
          </div>
          <div className="lat-long-update-form">
            <label>Latitude</label>
            <input
              value={lat}
              onChange={(e) => setLat(e.target.value)}
              name="lat"
              placeholder="lat"
            ></input>
            ,<label> Longitude</label>
            <input
              value={lng}
              onChange={(e) => setLng(e.target.value)}
              name="lng"
              placeholder="lng"
            ></input>
          </div>
        </div>
        <div className="update-form-description-textarea">
          <h2>Describe your place to guests</h2>
          <p>
            Mention the best features of your space, any special amentities like
            fast wifi or parking, and what you love about the neightboorhood.
          </p>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            name="description"
            placeholder="description"
          ></textarea>
        </div>
        <div className="update-form-spot-name">
          <h2>Create a title for your spot</h2>
          <p>
            Catch guests' attention with a spot title that highlights what makes
            your place special.
          </p>
          <input
            className="update-spot-name-field"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
            placeholder="name"
          ></input>
        </div>
        <div className="update-form-spot-price">
          <h2>Set a base price for your spot</h2>
          <p>
            Competitive pricing can help your listing stand out and rank higher
            in search results.
          </p>
          <label>$</label>
          <input
          className="update-spot-price-field"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            name="price"
            placeholder="price"
          ></input>
        </div>
        <div className="update-form-spot-images">
          <h2>Liven up your spot with photos</h2>
          <p>Submit a link to at least one photo to publish your spot.</p>
          <input name="previewImage" placeholder="Preview Image URL"></input>
          <input name="image1" placeholder="Image URL"></input>
          <input name="image2" placeholder="Image URL"></input>
          <input name="image3" placeholder="Image URL"></input>
          <input name="image4" placeholder="Image URL"></input>
        </div>
        <div className="button-div">
        <button className='update-form-submit-button' type="submit">Create Spot</button>

        </div>
      </form>
    </div>
  );
}
