"use client";
import styles from "./navbar.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [toggle, setToggle] = useState(0);
  const [showing, setShowing] = useState(0);

  useEffect(() => {
    // Update the width state when the window is resized
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setToggle(1);
      } else {
        setToggle(0);
        setShowing(1);
      }
    };

    // Add the resize event listener
    window.addEventListener("resize", handleResize);

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleNav = () => {
    if (showing) {
      setShowing(0);
    } else {
      setShowing(1);
    }
  };
  return (
    <header
      id={styles.masthead}
      className={`${styles.siteHeader} ${styles.wrapper}`}
    >
      <div id={styles.masthead2}>
        <div
          className={
            showing
              ? styles.siteBranding
              : `${styles.siteBranding} ${styles.notShowing}`
          }
        >
          <a className={styles.customLogoLink} rel="home">
            <img
              width="432"
              height="76"
              src="/cropped-logo.png"
              className={styles.customLogo}
              alt="TheMindCo - Innovation and Growth Strategy Consulting"
            />
          </a>
        </div>
        <nav
          id={styles.siteNavigation}
          className={
            toggle
              ? `${styles.mainNavigation} ${styles.toggled}`
              : styles.mainNavigation
          }
        >
          <button
            id={styles.mobile}
            className={styles.menuToggle}
            aria-controls="primary-menu"
            aria-expanded={toggle ? true : false}
            style={toggle ? { display: "flex" } : { display: "none" }}
            onClick={toggleNav}
          >
            ☰
          </button>
          <div className={styles.menuMenu1Container}>
            <ul
              id={styles.primaryMenu}
              className={`${styles.menu} ${styles.navMenu}`}
            >
              <li>
                <Link href="/aboutus">About us</Link>
              </li>
              <li>
                <Link href="/executivetrainings">Executive trainings</Link>
              </li>
              <li>
                <Link href="/workwithus">Work with us</Link>
              </li>
              <li>
                <Link href="/mlevel">M-level</Link>
              </li>
              <li>
                <Link href="/contactus">Contact us</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <nav id={styles.siteNavigation2} className={styles.mainNavigation}>
        <div className={styles.menuMenu2Container}>
          <ul
            id={styles.secondaryMenu}
            className={`${styles.menu} ${styles.navMenu}`}
          >
            <li id={styles.menuItem21}>
              <Link href="/corporations">Corporations</Link>
            </li>
            <li id={styles.menuItem22}>
              <Link href="/incubatorsandstartups">Incubators & Startups</Link>
            </li>
            <li id={styles.menuItem23}>
              <Link href="/privateequityandventurecapitals">
                Private Equity & Venture Capital
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
