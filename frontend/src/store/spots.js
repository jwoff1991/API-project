import { csrfFetch } from "./csrf";

const GET_SPOTS = "spots/getsSpots";
const ADD_SPOT = "spots/addSpot";

//get spots action creator
const getAllSpots = (spots) => {
  return {
    type: GET_SPOTS,
    spots: spots.Spots,
  };
};

export const addSpot = (spot) => {
  return {
    type: ADD_SPOT,
    spot,
  };
};

//get all spots thunk action creator
export const getSpots = () => async (dispatch) => {
  const response = await csrfFetch("/api/spots", {
    method: "GET",
  });
  const data = await response.json();
  dispatch(getAllSpots(data));

  return response;
};

//create spot thunnk creator
export const writeSpot = (payload) => async (dispatch) => {
  const response = await csrfFetch("/api/spots", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (response.ok) {
    const spot = await response.json();
    dispatch(addSpot(spot));
    return spot;
  }
};

const initialState = {
  allSpots: {
    //normalized kvps
  },
  singleSpot: {
    //flattened db info
  },
};

const spotReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_SPOTS:
      newState = Object.assign({}, state);
      newState.allSpots = action.spots;
      return newState;
    case ADD_SPOT:
      newState = Object.assign({}, state);
      newState.allSpots = action.spots;
      return newState;
    default:
      return state;
  }
};

export default spotReducer;
