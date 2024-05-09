"use client";

import React from "react";
import styles from "./pagination.module.css";
import { useRouter } from "next/navigation";

function Pagination({ page, hasPrevious, hasNext }) {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <button
        disabled={!hasPrevious}
        className={styles.btn}
        onClick={() => router.push(`?page=${page - 1}`)}
      >
        Previous
      </button>
      <button
        disabled={!hasNext}
        className={styles.btn}
        onClick={() => router.push(`?page=${page + 1}`)}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
