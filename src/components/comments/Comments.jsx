"use client";

import React, { useState } from "react";
import styles from "./comments.module.css";
import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { commentFetcher } from "@/data/data";

// async function fetcher(url) {
//   const res = await fetch(url);
//   const data = await res.json();

//   if (!res.ok) {
//     throw new Error(data.message);
//   }

//   return data;
// }

commentFetcher();

function Comments({ postSlug }) {
  const { status } = useSession();

  const { data, mutate, isLoading } = useSWR(
    `http://localhost:3000/api/comments?postSlug=${postSlug}`,
    commentFetcher
  );

  const [desc, setDesc] = useState("");

  async function handleSubmit() {
    await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ desc, postSlug }),
    });

    mutate();
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="Write a comment..."
            className={styles.input}
            onChange={(e) => setDesc(e.target.value)}
          />
          <button className={styles.button} onClick={() => handleSubmit()}>
            Send
          </button>
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
                    <span className={styles.date}>
                      {comment.createdAt.slice(0, 10)},{" "}
                      {comment.createdAt.slice(11, 16)}{" "}
                      {comment.createdAt.slice(11, 13) >= 12 ? "PM" : "AM"}
                    </span>
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
