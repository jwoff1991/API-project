import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "../../store/reviews";
import "./SpotReviews.css";
import OpenModalMenuItem from "../Navigation/OpenModalMenuItem";
import PostReviewModal from "../PostReviewModal";
import DeleteReviewModal from "../DeleteReviewModal";

export default function SpotReviews() {
  const spotId = useParams().spotId;
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.reviews.spot);
  const ownerId = useSelector((state) => state.spots.singleSpot.ownerId)
  const currentUserId = useSelector((state) => state.session.user.id);
  const props = { spotId, currentUserId };



  useEffect(() => {
    dispatch(getReviews(spotId));
  }, [dispatch, spotId]);


  const reviewsList = Object.values(reviews);


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

  const currentUserReviewed = reviewsList.map(
    ({ userId }) => userId === currentUserId
  );
  if (currentUserReviewed.filter((review) => review === true)) {
    postButtonDisabled = true;
  }

  {
    reviewsList.map(({ review, User }) => (
      <>
        {User.Id === review.id && (
          <button className="post-your-review-button">
            <OpenModalMenuItem
              itemText="Post Your Review"
              modalComponent={<PostReviewModal props={props} />}
            />
          </button>
        )}
        {User.Id === review.id && null}
      </>
    ));
  }

  return (
    <div>{ownerId === currentUserId && (<></>)}{!(ownerId === currentUserId) && (<>
      <button className="post-your-review-button">
        <OpenModalMenuItem
          itemText="Post Your Review"
          modalComponent={<PostReviewModal props={props} />}
        />
      </button>
    </>)}
      {reviewsList.map(({ id, review, User, createdAt, spotId }) => (
        <div key={id} className="spot-single-review-div">
          <div className="spot-single-review-firstname">{User.firstName}</div>
          <div className="spot-single-review-created-date">{createdAt}</div>
          <div className="spot-single-review">{review}</div>
          {User.id === currentUserId && (
            <>
              <button className="review-update-button">Update</button>
              <button className="review-delete-button">
                {" "}
                <OpenModalMenuItem
                  itemText="Delete"
                  modalComponent={<DeleteReviewModal props={{id, spotId}} />}
                />
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
