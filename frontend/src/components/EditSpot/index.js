import React, { useState,useEffect } from "react";
import {editSpot } from "../../store/spots";
import "./editSpot.css";
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getSpot } from "../../store/spots";

export default function EditSpot() {
  const spotId = useParams().spotId
  const spot = useSelector((state) => state.spots.singleSpot);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getSpot(spotId));
  }, [dispatch]);


  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [previewImage, setPreviewImage] = useState('');
  const [errors, setErrors] = useState({});

  console.log(spot)
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
      price,
      // previewImage: {
      //   url: previewImage,
      //   preview: true,
      // },
    },
    id: {spotId}
  };



  const response = await dispatch(editSpot(newEditedSpot))
    .then(async (res) => {
      console.log(res)
      if (res && res.id) {
        history.push(`/spots/${res.id}`);
        reset();
      }
    })
    .catch(async (res) => {
      const data = await res.json();
      if (data && !data.errors) {
        setErrors(data.errors);
      }
    });
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

if(!spot.id) return null


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
          <label></label>
          <label className="create-form-errors">{errors.country}</label>
          <input
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            name="country"
            placeholder="Country"
          ></input>
          <label></label>
          <label className="create-form-errors">{errors.address}</label>
          <input
            type="text"
            onChange={(e) => setAddress(e.target.value)}
            value={address}
            placeholder="Address"
            name="address"
          />
          <div className="city-state-update-form">
            <label></label>
            <label className="create-form-errors">{errors.city}</label>
            <input
              type="text"
              onChange={(e) => setCity(e.target.value)}
              value={city}
              placeholder="City"
              className="edit-form-cit-state-lat-lng"
              name="city"
            />,
            <label></label>
            <label className="create-form-errors">{errors.state}</label>
            <input
              value={state}
              onChange={(e) => setState(e.target.value)}
              name="state"
              placeholder="State"
              className="edit-form-cit-state-lat-lng"
            ></input>
          </div>
          <div className="lat-long-update-form">
            <label></label>
            <label className="create-form-errors">{errors.lat}</label>
            <input
              value={lat}
              onChange={(e) => setLat(e.target.value)}
              name="lat"
              placeholder="lat"
              className="edit-form-cit-state-lat-lng"
            ></input>
            ,<label></label>
            <label className="create-form-errors">{errors.lng}</label>
            <input
              value={lng}
              onChange={(e) => setLng(e.target.value)}
              name="lng"
              placeholder="lng"
              className="edit-form-cit-state-lat-lng"
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
          <label className="create-form-errors">{errors.description}</label>
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
          <label className="create-form-errors">{errors.name}</label>
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
          <label className="create-form-errors">{errors.price}</label>
        </div>
        {/* <div className="update-form-spot-images">
          <h2>Liven up your spot with photos</h2>
          <p>Submit a link to at least one photo to publish your spot.</p>
          <input
            name="previewImage"
            placeholder="Preview Image URL"
            onChange={(e) => setPreviewImage(e.target.value)}
          ></input>
          <input name="image1" placeholder="Image URL"></input>
          <input name="image2" placeholder="Image URL"></input>
          <input name="image3" placeholder="Image URL"></input>
          <input name="image4" placeholder="Image URL"></input>
        </div> */}
        <div className="button-div">
        <button className='update-form-submit-button' type="submit" >Create Spot</button>

        </div>
      </form>
    </div>
  );
}
