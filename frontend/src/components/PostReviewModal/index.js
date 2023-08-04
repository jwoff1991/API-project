import { useModal } from "../../context/Modal";
import { useDispatch } from "react-redux";
import { postReview } from "../../store/reviews";
import React, { useState } from "react";
import "./PostReviewModal.css";


function PostReviewModal(props) {

  const spotId  = props.props.spotId;
  const userId  = props.props.currentUserId
  const { closeModal } = useModal();
  const dispatch = useDispatch();

  const [review, setReview] = useState("");
  const [stars, setStars] = useState("");
  const [errors, setErrors] = useState({});

  let isDisabled = false;
  if (review.length < 10 || stars === "") {
    isDisabled = true;
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
      <textarea
        className="post-review-form-modal"
        placeholder="Leave your review here.."
        onChange={(e) => setReview(e.target.value)}
      ></textarea>
      <div className="review-stars-post-review-modal">
        <i className="far fa-star one-star" onClick={(e) => setStars("1")} />
        <i className="far fa-star two-star" onClick={(e) => setStars("2")} />
        <i className="far fa-star three-star" onClick={(e) => setStars("3")} />
        <i className="far fa-star four-star" onClick={(e) => setStars("4")} />
        <i className="far fa-star five-star" onClick={(e) => setStars("5")} />
        Stars
      </div>
      <button onClick={submitReview} disabled={isDisabled}>
        Submit Your Review
      </button>
    </div>
  );
}

export default PostReviewModal;
