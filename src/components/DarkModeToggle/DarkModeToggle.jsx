"use client"

import React, { useContext } from "react";
import styles from "./darkmodeToggle.module.css";
import { ThemeContext } from "../../context/ThemeContext";
import { Moon, Sun } from "lucide-react";
const DarkModeToggle = () => {
  const { toggle, mode } = useContext(ThemeContext);
  return (
    <button
      type="button"
      onClick={toggle}
      className={styles.button}
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      {mode === "light" ? (
        <Sun className={styles.sun} />
      ) : (
        <Moon className={styles.moon} />
      )}
    </button>
  );
};

export default DarkModeToggle;