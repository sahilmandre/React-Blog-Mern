"use client";

import React, { useState } from "react";
import styles from "./write.module.css";
import Image from "next/image";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

function WritePage() {
  const { status } = useSession();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  console.log(status);

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <div className={styles.container}>
      <input type="text" className={styles.input} placeholder="Title" />
      <div className={styles.editorContainer}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <Image
            src="/plus.png"
            alt=""
            width={50}
            height={50}
            className={styles.iconPlus}
          />
        </button>
        {open && (
          <div className={styles.add}>
            <button className={styles.addButton}>
              <Image
                src="/image.png"
                alt=""
                width={50}
                height={50}
                className={styles.iconPlus}
              />
            </button>
            <button className={styles.addButton}>
              <Image
                src="/external.png"
                alt=""
                width={50}
                height={50}
                className={styles.iconPlus}
              />
            </button>
            <button className={styles.addButton}>
              <Image
                src="/video.png"
                alt=""
                width={50}
                height={50}
                className={styles.iconPlus}
              />
            </button>
          </div>
        )}
        <ReactQuill
          className={styles.textEditor}
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Write here"
        />
      </div>

      <button className={styles.publish}>Publish</button>
    </div>
  );
}

export default WritePage;
