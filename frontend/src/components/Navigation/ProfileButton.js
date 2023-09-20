import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import OpenModalMenuItem from './OpenModalMenuItem';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom";
import './ProfileButton.css'


function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();
  const history = useHistory()

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const closeMenu = () => setShowMenu(false);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    closeMenu();
    history.push('/')
  };

  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");

  return (
    <>
      <button className="profile-button" onClick={openMenu}>
        <i className="fas fa-bars" />
        <i className="fas fa-user-circle" />
      </button>
      <div className={ulClassName} ref={ulRef}>
        {user ? (
          <>
            <div className="user-info-in-profile-button">
              <div className="username-in-profile-button">
                <div>Hello, {user.username}</div>
              </div>
              <div>{user.email}</div>
            </div>
            <div className="manage-spots-in-profile-button">
              <div className="manage-spots-link">
                <Link to={"/spots/current"} onClick={closeMenu}>
                  Manage Spots
                </Link>
              </div>
              <div className="user-bookings">
                <Link to={"/bookings/current"} onClick={closeMenu}>
                  Bookings
                </Link>
              </div>
            </div>
            <div className="logout-button">
              <div>
                <button className="logout-in-profile-button" onClick={logout}>
                  Log Out
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="login-signup-menu">
            <button className="login-button">
              <OpenModalMenuItem
                itemText="Log In"

                onItemClick={closeMenu}
                modalComponent={<LoginFormModal />}
              />
            </button>
            <button className="singup-button">
              <OpenModalMenuItem
                itemText="Sign Up"

                onItemClick={closeMenu}
                modalComponent={<SignupFormModal />}
              />
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default ProfileButton;
