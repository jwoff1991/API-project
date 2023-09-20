import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import AllSpots from "./components/AllStpots";
import CreateSpot from "./components/CreateSpot";
import SpotDetails from "./components/SpotDetails";
import ManageSpots from "./components/ManageSpots";
import EditSpot from './components/EditSpot'
import UserBookings from "./components/UserBookings";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/" exact>
            <AllSpots />
          </Route>
          <Route path="/spots/new" exact>
            <CreateSpot />
          </Route>
          <Route path="/spots/current">
            <ManageSpots />
          </Route>
          <Route path="/spots/:spotId/edit">
            <EditSpot />
          </Route>
          <Route path="/spots/:spotId">
            <SpotDetails />
          </Route>
          <Route path='/bookings/current'>
            <UserBookings />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
