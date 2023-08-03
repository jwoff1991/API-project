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

  const submitReview = async (e) => {
    e.preventDefault();

    const newReview = {
      userId,
      spotId,
      review,
      stars,
    };

    dispatch(postReview(spotId, newReview));
    reset();
    closeModal();
  };

  const reset = () => {
    setReview("");
    setStars("");
  };

  return (
    <>
      <h1>How was your stay?</h1>
      <textarea
        placeholder="Leave your review here.."
        onChange={(e) => setReview(e.target.value)}
      ></textarea>
      <div className="review-stars-post-review-modal">
        <button onClick={(e) => setStars("1")}>
          <i class="far fa-star one-star"></i>
        </button>
        <button onClick={(e) => setStars("2")}>
          <i class="far fa-star two-star"></i>
        </button>
        <button onClick={(e) => setStars("3")}>
          <i class="far fa-star three-star"></i>
        </button>
        <button onClick={(e) => setStars("4")}>
          <i class="far fa-star four-star"></i>
        </button>
        <button onClick={(e) => setStars("5")}>
          <i class="far fa-star five-star"></i>
        </button>
        Stars
      </div>
      <button onClick={submitReview}>Submit Your Review</button>
    </>
  );
}

export default PostReviewModal;
