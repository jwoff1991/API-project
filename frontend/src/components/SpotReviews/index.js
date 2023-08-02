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
    const props = {spotId}
    const currentUserId = useSelector((state) => state.session.user.id)

    useEffect(() => {
        dispatch(getReviews(spotId));
    }, [dispatch]);

    if(!reviews.length) return null


    let buttonDisabled = false
    const alreadyReviewed = reviews.map(({userId}) => userId === currentUserId)
    if(!alreadyReviewed.filter((review) => review === true)) {
        buttonDisabled = true
    }

    return (
        <div>
            <button className='post-your-review-button' disabled={buttonDisabled}>
            <OpenModalMenuItem
            itemText="Post Your Review"
            modalComponent={<PostReviewModal props={props} />} />
            </button>
            {reviews.map(({id, review,  User, createdAt}) => (

                <div className="spot-single-review-div">
                    <div key={id} className="spot-single-review-firstname">{User.firstName}</div>
                    <div className="spot-single-review-created-date">{createdAt}</div>
                    <div className="spot-single-review">{review}</div>
                    <button className="review-update-button">Update</button>
                    <button className="review-delete-button">Delete</button>

                </div>
            ))}
        </div>
    )
}
