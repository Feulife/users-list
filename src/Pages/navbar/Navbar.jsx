import React from "react";
import { Link } from "react-router-dom";
import { GitHub } from "@mui/icons-material";
import styles from "./Nav.module.css";

export const Navbar = () => {
  const openGitHub = () => {
    window.open("https://github.com/Feulife")
  };

  return (
    <>
      <nav className={styles.appNavbar}>
        <div className={styles.link}>
        <Link to="/list" className={styles.navLink}>          
          <p>
            LIST
          </p>
        </Link>
        <Link to="/create" className={styles.navLink}>
          <p>
            CREATE
          </p>
        </Link>
        <Link to="/" className={styles.navLink}>
          <p>
            ABOUT
          </p>
        </Link>
        </div>
        <div onClick={openGitHub} className={styles.gifContainer}>
          <GitHub></GitHub>
        </div>
      </nav>
    </>
  )
};