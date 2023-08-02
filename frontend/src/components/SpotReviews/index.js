import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSpots } from "../../store/spots";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getReviews } from "../../store/reviews";
import './SpotReviews.css'
import OpenModalMenuItem from "../Navigation/OpenModalMenuItem";
import PostReviewModal from "../PostReviewModal";


export default function SpotReviews () {
    const spotId = useParams().spotId
    const dispatch = useDispatch();
    const reviews = useSelector((state) => state.reviews.spot);

    const currentUserId = useSelector((state) => state.session.user.id)


    let buttonDisabled = false

    console.log(reviews)
    useEffect(() => {
        dispatch(getReviews(spotId));
      }, [dispatch]);

    if(!reviews.length) return null

    const props = {spotId}

    const alreadyReviewed = reviews.map(({userId}) => userId === currentUserId)
    if(!alreadyReviewed.filter((review) => review === true)) {
        buttonDisabled = true
    }

    return (
        <div>
            <button disabled={buttonDisabled}>
            <OpenModalMenuItem
            itemText="Post Your Review"
            modalComponent={<PostReviewModal props={props} />} />
            </button>
            {reviews.map(({id, review,  User, createdAt}) => (

                <div className="spot-single-review-div">
                    <div key={id} className="spot-single-review-firstname">{User.firstName}</div>
                    <div className="spot-single-review-created-date">{createdAt}</div>
                    <div className="spot-single-review">{review}</div>

                </div>
            ))}
        </div>
    )
}
