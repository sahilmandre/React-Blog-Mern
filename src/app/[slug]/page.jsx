import React from "react";
import styles from "./singlePage.module.css";
import Menu from "@/components/menu/Menu";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

function SinglePage() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit, amet consectetur adipisicing.
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image
                src="/p1.jpeg"
                alt="post1"
                layout="fill"
                className={styles.avatar}
              />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}> 10.02.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="post1" layout="fill" />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.desc}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
              velit ea officia iste quas ad soluta, nam ex placeat provident
              necessitatibus atque illum veritatis est omnis ab quos voluptatum
              vero optio a, ipsa cumque saepe alias? Repudiandae alias omnis
              similique?
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
              velit ea officia iste quas ad soluta, nam ex placeat provident
              necessitatibus atque illum veritatis est omnis ab quos voluptatum
              vero optio a, ipsa cumque saepe alias? Repudiandae alias omnis
              similique?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
              velit ea officia iste quas ad soluta, nam ex placeat provident
              necessitatibus atque illum veritatis est omnis ab quos voluptatum
              vero optio a, ipsa cumque saepe alias? Repudiandae alias omnis
              similique?
            </p>
          </div>
          <div className={styles.comments}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
}

export default SinglePage;
