"use client";

import Link from "next/link";

import styles from "./authLinks.module.css";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";

function AuthLinks() {
  const [openBurger, setOpenBurger] = useState(false);
  const { status } = useSession();
  console.log(status);

  return (
    <>
      {status === "unauthenticated" ? (
        <Link href="/login" className={styles.links}>
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className={styles.links}>
            Write
          </Link>
          <span className={styles.links} onClick={signOut}>
            Logout
          </span>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpenBurger(!openBurger)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {openBurger && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Homepage</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/about">About</Link>
          {status === "notAuthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <span className={styles.links}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default AuthLinks;
