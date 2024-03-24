import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/logo.png";
import Avatar from "./Avatar";
import styles from "../styles/NavBar.module.css";
import axios from "axios";
import { NavLink, useLocation } from "react-router-dom";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../contexts/CurrentUserContext";

import useClickOutsideToggle from "../hooks/useClickOutsideToggle";
import { removeTokenTimestamp } from "../utils/utils";

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const { expanded, setExpanded, ref } = useClickOutsideToggle();

  const location = useLocation();

  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser();
      removeTokenTimestamp();
    } catch (err) {
      console.log(err);
    }
  };

  const addPostIcon = (
    <>
      <NavLink
        className={
          location.pathname === "/posts/create"
            ? `${styles.NavLink} ${styles.Active}`
            : styles.NavLink
        }
        to="/posts/create"
      >
        <i className="fas fa-plus-square"></i>Add post
      </NavLink>
      <NavLink
        className={
          location.pathname === "/notes/create"
            ? `${styles.NavLink} ${styles.Active}`
            : styles.NavLink
        }
        to="/notes/create"
      >
        <i className="fas fa-plus-square"></i>Add Notes
      </NavLink>
    </>
  );

  const loggedInIcons = (
    <>
      <NavLink
        className={
          location.pathname === "/notes"
            ? `${styles.NavLink} ${styles.Active}`
            : styles.NavLink
        }
        to="/notes"
      >
        <i className="fa-solid fa-note-sticky"></i>Notes
      </NavLink>
      <NavLink
        className={
          location.pathname === "/feed"
            ? `${styles.NavLink} ${styles.Active}`
            : styles.NavLink
        }
        to="/feed"
      >
        <i className="fas fa-stream"></i>Feed
      </NavLink>
      <NavLink
        className={
          location.pathname === "/liked"
            ? `${styles.NavLink} ${styles.Active}`
            : styles.NavLink
        }
        to="/liked"
      >
        <i className="fas fa-heart"></i>Liked
      </NavLink>
      <NavLink className={styles.NavLink} to="/" onClick={handleSignOut}>
        <i className="fas fa-sign-out-alt"></i>Sign out
      </NavLink>
      <NavLink
        className={
          location.pathname === `/profiles/${currentUser?.profile_id}`
            ? `${styles.NavLink} ${styles.Active}`
            : styles.NavLink
        }
        to={`/profiles/${currentUser?.profile_id}`}
        onClick={() => {}}
      >
        <Avatar src={currentUser?.profile_image} text="Profile" height={40} />
      </NavLink>
    </>
  );
  const loggedOutIcons = (
    <>
      <NavLink
        className={
          location.pathname === "/signup" ? styles.Active : styles.NavLink
        }
        to="/signin"
      >
        <i className="fas fa-sign-in-alt"></i>Sign In
      </NavLink>
      <NavLink
        className={
          location.pathname === "/signup" ? styles.Active : styles.NavLink
        }
        to="/signup"
      >
        <i className="fas fa-user-plus"></i>Sign up
      </NavLink>
    </>
  );
  return (
    <Navbar
      expanded={expanded}
      className={styles.NavBar}
      expand="md"
      fixed="top"
    >
      <Container>
        <NavLink to="/">
          <Navbar.Brand>
            <img src={logo} alt="logo" height="45" />
          </Navbar.Brand>
        </NavLink>
        {currentUser && addPostIcon}
        <Navbar.Toggle
          ref={ref as React.RefObject<HTMLButtonElement>}
          onClick={() => setExpanded(!expanded)}
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <NavLink
              className={
                location.pathname === "/signup" ? styles.Active : styles.NavLink
              }
              to="/"
            >
              <i className="fas fa-home"></i>Home
            </NavLink>
            {currentUser ? loggedInIcons : loggedOutIcons}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
