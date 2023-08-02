import { csrfFetch } from "./csrf";

const GET_REVIEWS = "reviews/getReviews";
const POST_REVIEW = "reviews/new";

export const getSpotReviews = (reviews) => {
  return {
    type: GET_REVIEWS,
    reviews: reviews.Reviews,
  };
};

export const addReview = (review) => {
  return {
    type: POST_REVIEW,
    review,
  };
};

export const getReviews = (spotId) => async (dispatch) => {
  const response = await csrfFetch(`/api/spots/${spotId}/reviews`, {
    method: "GET",
  });
  const data = await response.json();
  dispatch(getSpotReviews(data));
  return response;
};

export const postReview = (spotId, payload) => async (dispatch) => {
  const response = await csrfFetch(`api/spots/${spotId}/reviews`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (response.ok) {
    const review = await response.json();
    dispatch(addReview(review));
    return review;
  }
};

const initalState = {
  spot: {},
  user: {},
};

const reviewsReducer = (state = initalState, action) => {
  let newState;
  switch (action.type) {
    case GET_REVIEWS:
      newState = Object.assign({}, state);
      newState.spot = action.reviews;
      return newState;
    case POST_REVIEW:
      newState = Object.assign({}, state);
      newState.spot = action.reviews;
      return newState;
    default:
      return state;
  }
};

export default reviewsReducer;
