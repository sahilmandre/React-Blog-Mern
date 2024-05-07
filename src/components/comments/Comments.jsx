import React from "react";
import styles from "./comments.module.css";
import Link from "next/link";
import Image from "next/image";

function Comments() {
  const status = "authenticated";

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea placeholder="Write a comment..." className={styles.input} />
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment.</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt="user"
              width={50}
              height={50}
              className={styles.userImage}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>10.02.2024</span>
            </div>
          </div>

          <p className={styles.commentDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            itaque fugiat quibusdam sit reprehenderit pariatur repellat iusto
            sunt rem tenetur, quia corrupti voluptate adipisci minima facere,
            atque, voluptatem alias inventore amet. Id expedita amet cumque
            quas. Optio facilis ipsa ducimus.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Comments;
