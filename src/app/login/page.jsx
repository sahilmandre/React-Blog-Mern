"use client";

import React from "react";
import styles from "./loginPage.module.css";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

function LoginPage() {
  const { data, status } = useSession();

  console.log(data, status);

  const router = useRouter();

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div
          className={styles.socialLoginButton}
          onClick={() => signIn("google")}
        >
          Sign in with Google
        </div>
        <div className={styles.socialLoginButton}>Sign in with Github</div>
        <div className={styles.socialLoginButton}>Sign in with Facebook</div>
      </div>
    </div>
  );
}

export default LoginPage;
