import React from "react";




export default function StarRatingAndReviewRender({spotNumReviews, averageStartRating}) {
    console.log(spotNumReviews)
    if (spotNumReviews === 0) {
      return (`New`);

    } else if(spotNumReviews === 1){
      return (
        <>
        {averageStartRating} <span>&#183;</span> {spotNumReviews} Review
        </>
      )
    } else {

      return (
        <>
        {averageStartRating} <span>&#183;</span> {spotNumReviews} Review
        </>
      )
    }
}
