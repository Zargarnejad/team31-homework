"use client";

import { useState } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav>
      {/* Navbar for large screens */}
      <div className={styles.navbar}>
        <div className={styles.siteNameContainer}>
          <img
            className={styles.hamburgerMenuIcon}
            src="/burger-menu.svg"
            onClick={(e) => {
              setMobileMenuOpen(!isMobileMenuOpen);
            }}
          />
          <div className={styles.siteName}>My Website</div>
        </div>
        <div>
          <ul className={styles.navbarList}>
            <li className={styles.navbarItem}>
              <Link className={styles.navbarLink} href="/">
                Home
              </Link>
            </li>
            <li className={styles.navbarItem}>
              <Link className={styles.navbarLink} href="/blog">
                Blog
              </Link>
            </li>
            <li className={styles.navbarItem}>
              <Link className={styles.navbarLink} href="/news">
                News
              </Link>
            </li>
            <li className={styles.navbarItem}>
              <Link className={styles.navbarLink} href="/contact-us">
                Contact Us
              </Link>
            </li>
            <li className={styles.navbarItem}>
              <Link className={styles.navbarLink} href="/about-us">
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* Mobile Version of the Navbar */}
      <div className={isMobileMenuOpen ? styles.mobileNavbar : styles.hidden}>
        <ul className={styles.mobileNavbarList}>
          <li className={styles.mobileNavbarItem}>
            <Link className={styles.mobileNavbarLink} href="/">
              Home
            </Link>
          </li>
          <li className={styles.mobileNavbarItem}>
            <Link className={styles.mobileNavbarLink} href="/blog">
              Blog
            </Link>
          </li>
          <li className={styles.mobileNavbarItem}>
            <Link className={styles.mobileNavbarLink} href="/news">
              News
            </Link>
          </li>
          <li className={styles.mobileNavbarItem}>
            <Link className={styles.mobileNavbarLink} href="/contact-us">
              Contact Us
            </Link>
          </li>
          <li className={styles.mobileNavbarItem}>
            <Link className={styles.mobileNavbarLink} href="/about-us">
              About Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
