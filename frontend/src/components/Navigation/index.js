import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";
import { Link } from "react-router-dom";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="home">
          <NavLink exact to="/">
            errbnb
          </NavLink>
        </li>
        <div className="right-container">
          {sessionUser ? <Link to="/spots/new">Create a new Spot</Link> : null}
          {isLoaded && (
            <li className="profile">
              <ProfileButton user={sessionUser} />
            </li>
          )}
        </div>
      </ul>
    </nav>
  );
}

export default Navigation;
