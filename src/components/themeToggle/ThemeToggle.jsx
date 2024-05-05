"use client";

import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";
import Image from "next/image";
import styles from "./themeToggle.module.css";

function ThemeToggle() {
  const { toggle, theme } = useContext(ThemeContext);

  console.log(theme);

  return (
    <div
      className={styles.container}
      onClick={toggle}
      style={
        theme === "dark"
          ? { backgroundColor: "white" }
          : { backgroundColor: "#0f172a" }
      }
    >
      <Image src="/moon.png" alt="moon" width={14} height={14} />
      <div
        className={styles.ball}
        style={
          theme === "dark"
            ? { left: "1px", backgroundColor: "#0f172a" }
            : { right: "1px", backgroundColor: "#f0f0f0" }
        }
      ></div>
      <Image src="/sun.png" alt="sun" width={14} height={14} />
    </div>
  );
}

export default ThemeToggle;
