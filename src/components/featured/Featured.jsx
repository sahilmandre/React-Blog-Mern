import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

function Featured() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hi, Sahil Mandre this side...!</b> Discover my featured posts.
      </h1>

      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image
            src="/p1.jpeg"
            alt="post1"
            layout="fill"
            className={styles.img}
          />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perferendis, minus.
          </h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            qui consequatur tempore aliquid obcaecati vitae voluptatum neque ex
            culpa. Distinctio modi reprehenderit assumenda, laboriosam, nesciunt
            sed quisquam dolorem itaque, velit saepe harum reiciendis. Expedita
            quidem necessitatibus similique commodi rem nemo aliquam quod, fuga
            harum eveniet ipsam, culpa ratione quibusdam unde consectetur
            obcaecati laborum quisquam cumque doloribus, sequi accusamus eos?
            Veniam?
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
}

export default Featured;
