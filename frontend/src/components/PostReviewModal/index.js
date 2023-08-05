import { useModal } from "../../context/Modal";
import { useDispatch } from "react-redux";
import { postReview } from "../../store/reviews";
import React, { useState } from "react";
import "./PostReviewModal.css";
import StarRating from "./StarRating";


function PostReviewModal(props) {

  const spotId  = props.props.spotId;
  const userId  = props.props.currentUserId
  const { closeModal } = useModal();
  const dispatch = useDispatch();

  const [review, setReview] = useState("");
  const [stars, setStars] = useState('');
  const [errors, setErrors] = useState({});

  let isDisabled = false;
  if (review.length < 10 || stars === "") {
    isDisabled = true;
  }

  const reviewRating = (stars) => {
    setStars(parseInt(stars))
  }

  const submitReview = async (e) => {
    e.preventDefault();

    const newReview = {
      userId,
      spotId,
      review,
      stars,
    };

    await dispatch(postReview(spotId, newReview)).catch(async (res) => {
      const data = await res.json();
      if (data && data.errors) {
        setErrors(data.errors);
      }
    });
    reset();
    closeModal();
  };

  const reset = () => {
    setReview("");
    setStars("");
  };

  console.log(stars);

  return (
    <div className="review-form-modal">
      <h1>How was your stay?</h1>
      <>{errors.message}</>
      <textarea
        className="post-review-form-modal"
        placeholder="Leave your review here.."
        onChange={(e) => setReview(e.target.value)}
      ></textarea>
      <div className="review-stars-post-review-modal">
        <StarRating onChange={reviewRating} stars={stars}>Stars</StarRating>
        Stars
      </div>
      <button className='submit-review-buttom' onClick={submitReview} disabled={isDisabled}>
        Submit Your Review
      </button>
    </div>
  );
}

export default PostReviewModal;
