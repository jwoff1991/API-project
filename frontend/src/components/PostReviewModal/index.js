import { useModal } from "../../context/Modal";
import { useDispatch } from "react-redux";
import { postReview } from "../../store/reviews";
import { useState } from "react";

function PostReviewModal(props) {
  const { spotId } = props.props;
  const { closeModal } = useModal();
  const dispatch = useDispatch();

  const [review, setReview] = useState("");
  const [stars, setStars] = useState("");

  const submitReview = async (e) => {
    e.preventDefault();

    const newReview = {
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
        // onChange={(e) => setReview(e.target.value)}
      ></textarea>
      <div className="review-stars-post-review-modal">
        <i class="fa-light fa-star" ></i>
        <i class="fa-light fa-star" ></i>
        <i class="fa-light fa-star" ></i>
        <i class="fa-light fa-star" ></i>
        <i class="fa-light fa-star" ></i>
        Stars
      </div>
      <button onClick={submitReview}>Submit Your Review</button>
    </>
  );
}

export default PostReviewModal;
