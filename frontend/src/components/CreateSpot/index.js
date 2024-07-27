import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { writeSpot } from "../../store/spots";
import "./createSpot.css";
import { useHistory } from "react-router-dom";

export default function CreateSpot() {
  const [formData, setFormData] = useState({
    address: "",
    city: "",
    state: "",
    country: "",
    lat: "",
    lng: "",
    name: "",
    description: "",
    price: "",
    previewImage: ""
  });
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {}, [errors]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({})
    let formErrors = {};

    if (!formData.address) {
      formErrors.address = "Street address is required";
    }
    if (!formData.country) {
      formErrors.country = "Country is required";
    }
    if (!formData.city) {
      formErrors.city = "City is required";
    }
    if (!formData.state) {
      formErrors.state = "State is required";
    }
    if (!formData.lat) {
      formErrors.lat = "Latitude is required";
    }
    if (!formData.lng) {
      formErrors.lng = "Longitude is required";
    }
    if (!formData.description) {
      formErrors.description = "Description is required";
    }
    if (!formData.name) {
      formErrors.name = "Name is required";
    }

    //checks if the previewImage is an image
    const isImage = (previewImage) => {
      return (
        previewImage &&
        (previewImage.endsWith(".jpeg") ||
          previewImage.endsWith(".jpg") ||
          previewImage.endsWith(".gif") ||
          previewImage.endsWith(".png"))
      );
    };
    //if preview image is not an image set errors
    if (!previewImage || !isImage(previewImage)) {
      formErrors.previewImage = "Preview image must be a valid image file (jpeg, jpg, gif, png)";
    }
    //new spot creator
    const newSpot = {
      address,
      city,
      state,
      country,
      lat,
      lng,
      name,
      description,
      price,
      previewImage: {
        url: previewImage,
        preview: true,
      },
    };

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    const response = await dispatch(writeSpot(formData));
    if (response.ok) {
      history.push("/spots");
    }
    };
  //resets form
  const reset = () => {
    setAddress("");
    setCity("");
    setState("");
    setCountry("");
    setLat("");
    setLng("");
    setName("");
    setDescription("");
    setPrice("");
    setPreviewImage("");
  };
  //sets errors styling or keeps default stryling if no errors
  const countryErrorsClass = errors.country
    ? "form-errors create-form-country-address"
    : "create-form-country-address";
  const addressErrorsClass = errors.address
    ? "form-errors create-form-country-address"
    : "create-form-country-address";
  const cityErrorsClass = errors.city
    ? "form-errors create-form-cit-state-lat-lng"
    : "create-form-cit-state-lat-lng";
  const stateErrorsClass = errors.state
    ? "form-errors create-form-cit-state-lat-lng"
    : "create-form-cit-state-lat-lng";
  const latErrorsClass = errors.lat
    ? "form-errors create-form-cit-state-lat-lng"
    : "create-form-cit-state-lat-lng";
  const lngErrorsClass = errors.lng
    ? "form-errors create-form-cit-state-lat-lng"
    : "create-form-cit-state-lat-lng";
  const nameErrorsClass = errors.name
    ? "form-errors create-spot-name-field"
    : "create-spot-name-field";
  const descErrorsClass = errors.description
    ? "form-errors"
    : "";
  const priceErrorsClass = errors.price
    ? "form-errors create-spot-price-field"
    : "create-spot-price-field";
  const previewErrorsClass = errors.previewImage
    ? "form-errors"
    : "";

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };


  return (
    <div className="create-form-inputBox">
      <form className="create-spot-form" onSubmit={handleSubmit}>
        <h1>Create a new Spot</h1>
        <div className="create-form-place-located-question">
          <h2>Where's your place located?</h2>
          <p>
            Guests will only get your exact address once they booked a
            reservation.
          </p>
        </div>
        <div className="create-form-spot-address">
          <label></label>
          <label></label>
          <input
            value={formData.country}
            max="50"
            onChange={handleInputChange}
            name="country"
            placeholder="Country"
            className={countryErrorsClass}
          ></input>
          <label></label>
          <label></label>
          <input
            type="text"
            onChange={handleInputChange}
            value={formData.address}
            max="20"
            placeholder="Address"
            name="address"
            className={addressErrorsClass}
          />
          <div className="city-state-create-form">
            <label></label>
            <label></label>
            <input
              type="text"
              onChange={handleInputChange}
              value={formData.city}
              max="20"
              placeholder="City"
              name="city"
              className={cityErrorsClass}
            />
            <label></label>
            <label></label>
            <input
              value={formData.state}
              max="20"
              onChange={handleInputChange}
              name="state"
              placeholder="State"
              className={stateErrorsClass}
            ></input>
          </div>
          <div className="lat-long-create-form">
            <label></label>
            <label></label>
            <input
              value={formData.lat}
              max="20"
              onChange={handleInputChange}
              name="lat"
              placeholder="Latitude"
              className={latErrorsClass}
            ></input>
            <label></label>
            <label></label>
            <input
              value={formData.lng}
              onChange={handleInputChange}
              name="lng"
              max="20"
              placeholder="Longitude"
              className={lngErrorsClass}
            ></input>
          </div>
        </div>
        <div className="create-form-description-textarea">
          <h2>Describe your place to guests</h2>
          <p>
            Mention the best features of your space, any special amentities like
            fast wifi or parking, and what you love about the neightboorhood.
          </p>
          <textarea
            value={description}
            max="2000"
            onChange={(e) => setDescription(e.target.value)}
            name="description"
            className={descErrorsClass}
            placeholder="Please write at least 30 characters"
          ></textarea>
        </div>
        <div className="create-form-spot-name">
          <h2>Create a title for your spot</h2>
          <p>
            Catch guests' attention with a spot title that highlights what makes
            your place special.
          </p>
          <input
            className={nameErrorsClass}
            value={name}
            max="40"
            onChange={(e) => setName(e.target.value)}
            name="name"
            placeholder="Name of your spot"
          ></input>
        </div>
        <div className="create-form-spot-price">
          <h2>Set a base price for your spot</h2>
          <p>
            Competitive pricing can help your listing stand out and rank higher
            in search results.
          </p>
          <label>$</label>
          <input
            className={priceErrorsClass}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            name="price"
            placeholder="Price per night (USD)"
          ></input>
        </div>
        <div className="create-form-spot-images">
          <h2>Liven up your spot with photos</h2>
          <p>Submit a link to at least one photo to publish your spot.</p>
          <input
            name="previewImage"
            placeholder="Preview Image URL"
            className={previewErrorsClass}
            onChange={(e) => setPreviewImage(e.target.value)}
          ></input>
          <input name="image1" placeholder="Image URL"></input>
          <input name="image2" placeholder="Image URL"></input>
          <input name="image3" placeholder="Image URL"></input>
          <input name="image4" placeholder="Image URL"></input>
        </div>
        <div className="button-div">
          <button className="create-form-submit-button" type="submit">
            Create Spot
          </button>
        </div>
      </form>
    </div>
  );
}
