import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "../../store/reviews";
import "./SpotReviews.css";
import OpenModalMenuItem from "../Navigation/OpenModalMenuItem";
import PostReviewModal from "../PostReviewModal";

export default function SpotReviews() {
  const spotId = useParams().spotId;
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.reviews.spot);
  const currentUserId = useSelector((state) => state.session.user.id);
  const props = { spotId, currentUserId };

  let reviewsList = Object.values(reviews);

  useEffect(() => {
    dispatch(getReviews(spotId));
  }, [dispatch, spotId]);

  if (!reviewsList.length) {
    return (
      <>
        <button className="post-your-review-button">
          <OpenModalMenuItem
            itemText="Post Your Review"
            modalComponent={<PostReviewModal props={props} />}
          />
        </button>
        <div>Be the first to post a review!</div>
      </>
    );
  }

  let postButtonDisabled = false;
  let updateDeleteButtons;
  const currentUserReviewed = reviewsList.map(
    ({ userId }) => userId === currentUserId
  );
  if (!currentUserReviewed.filter((review) => review === true)) {
    postButtonDisabled = true;
    updateDeleteButtons = (
      <>
        <button className="review-update-button">Update</button>
        <button className="review-delete-button">Delete</button>
      </>
    );
  } else {
    updateDeleteButtons = null;
  }


  return (
    <div>
      <button className="post-your-review-button" disabled={postButtonDisabled}>
        <OpenModalMenuItem
          itemText="Post Your Review"
          modalComponent={<PostReviewModal props={props} />}
        />
      </button>
      {reviewsList.map(({ id, review, User, createdAt }) => (
        <div className="spot-single-review-div">
          <div key={id} className="spot-single-review-firstname">
            {User.firstName}
          </div>
          <div className="spot-single-review-created-date">{createdAt}</div>
          <div className="spot-single-review">{review}</div>
          {updateDeleteButtons}
        </div>
      ))}
    </div>
  );
}
