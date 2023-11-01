import React from "react";
import { Link } from "react-router-dom";
import { GitHub } from "@mui/icons-material";
import classes from "./Nav.module.css";

export const Navbar = () => {
  const openGitHub = () => {
    window.open("https://github.com/Feulife")
  };

  return (
    <>
      <nav className={classes.appNavbar}>
        <div className={classes.link}>
        <Link to="/" className={classes.navLink}>
          
          <p>
            LIST
          </p>
        </Link>
        <Link to="/" className={classes.navLink}>
          <p>
            CREATE
          </p>
        </Link>
        <Link to="/" className={classes.navLink}>
          <p>
            ABOUT
          </p>
        </Link>
        </div>
        <div onClick={openGitHub} className={classes.gifContainer}>
          <GitHub></GitHub>
        </div>
      </nav>
    </>
  )
};