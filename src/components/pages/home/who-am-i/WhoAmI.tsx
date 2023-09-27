'use client'
import React from "react";
import Lottie from "react-lottie";

import DefaultButton from "@/components/ui/default-button/DefaultButton";

import { GenLottieOptions } from "@/scripts/functions";

import styles from "./WhoAmI.module.scss";

function WhoAmI() {
  return (
    <main className={styles["container"]}>
      <div className={styles["text-container"]}>
        <h1 className={styles["heading"]}>
          I am a{" "}
          <span className={`${styles["text"]} primary-color`}>
            <strong>software engineer</strong>
          </span>
        </h1>
        <p className={styles["paragraph"]}>
          I have experience in creating:<br/><br/>- websites<br/>- computer vision software<br/>- telegram bots<br/>- chromium plugins<br/>- web scrappers<br/>- and more
        </p>
        <DefaultButton content="Contact me!" />
      </div>
      <div className={styles["images-container"]}>
        <div
          id="animation-container"
          className={styles["animation-container"]}
        >
          {/* @ts-ignore */}
          <Lottie options={GenLottieOptions('../assets/animations/programmer.json')} />
        </div>
        <div className={styles["activity-container"]}>
          <span className={styles["activity-icon"]}></span>
          <span className={styles["activity-text"]}>
            Currently working on
          </span>
          <strong className={styles["activity-name"]}>
            Portfolio
          </strong>
        </div>
      </div>
    </main>
  );
}

export default WhoAmI;
