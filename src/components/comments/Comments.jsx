"use client";

import React from "react";
import styles from "./comments.module.css";
import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";
import { useSession } from "next-auth/react";

async function fetcher(url) {
  const res = await fetch(url);
  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data;
}

function Comments({ postSlug }) {
  const { status } = useSession();

  const { data, isLoading } = useSWR(
    `http://localhost:3000/api/comments?postSlug=${postSlug}`,
    fetcher
  );

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
        {isLoading
          ? "loading..."
          : data?.map((comment) => (
              <div key={comment._id} className={styles.comment}>
                <div className={styles.user}>
                  {comment?.user?.image && (
                    <Image
                      src={comment.user.image}
                      alt="user"
                      width={50}
                      height={50}
                      className={styles.userImage}
                    />
                  )}
                  <div className={styles.userInfo}>
                    <span className={styles.username}>{comment.user.name}</span>
                    <span className={styles.date}>{comment.createdAt}</span>
                  </div>
                </div>

                <p className={styles.commentDesc}>{comment.desc}</p>
              </div>
            ))}
      </div>
    </div>
  );
}

export default Comments;
