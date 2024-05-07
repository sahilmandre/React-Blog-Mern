import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";
import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "../menuCategories/MenuCategories";

function Menu() {
  return (
    <div className={styles.container}>
      <>
        <h2 className={styles.subtitle}>{"What's hot"}</h2>
        <h1 className={styles.title}>Recent Posts</h1>

        <MenuPosts withImage={false} />
      </>

      {/* ################# 1st Part here ############## */}

      <h2 className={styles.subtitle}>Discover by category</h2>
      <h1 className={styles.title}>Categories</h1>

      <MenuCategories />

      {/* ################# 2nd Part here ############## */}

      <h2 className={styles.subtitle}>Chosen by the writer</h2>
      <h1 className={styles.title}>Editor Pick</h1>

      <MenuPosts withImage={true} />
    </div>
  );
}

export default Menu;
