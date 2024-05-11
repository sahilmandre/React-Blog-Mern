"use client";

import { app } from "@/utils/firebase";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "react-quill/dist/quill.bubble.css";
import styles from "./write.module.css";

const storage = getStorage(app);

function WritePage() {
  const { status } = useSession();
  const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
  const router = useRouter();

  const [file, setFile] = useState(null);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [media, setMedia] = useState();
  const [title, setTitle] = useState("");

  useEffect(() => {
    function upload() {
      const name = new Date().getTime + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          console.log(error);
          throw error;
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
        }
      );
    }

    file && upload();
  }, [file]);

  // console.log(status);

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (status === "unauthenticated") {
    router.push("/");
  }

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  async function handlePostSubmit() {
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        desc: value,
        img: media,
        slug: slugify(title),
        catSlug: "test",
      }),
    });

    console.log(res);
  }

  return (
    <div className={styles.container}>
      <input
        type="text"
        className={styles.input}
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input type="text" placeholder="category" />
      <div className={styles.editorContainer}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <Image
            src="/plus.png"
            alt=""
            width={30}
            height={30}
            className={styles.iconPlus}
          />
        </button>
        {open && (
          <div className={styles.add}>
            <input
              type="file"
              name=""
              id="image"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ display: "none" }}
            />
            <button className={styles.addButton}>
              <label htmlFor="image">
                <Image
                  src="/image.png"
                  alt=""
                  width={50}
                  height={50}
                  className={styles.iconPlus}
                />
              </label>
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

      <button className={styles.publish} onClick={handlePostSubmit}>
        Publish
      </button>
    </div>
  );
}

export default WritePage;
