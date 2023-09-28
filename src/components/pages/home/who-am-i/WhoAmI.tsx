'use client'
import React from "react";
import Lottie from "react-lottie";

import DefaultButton from "@/components/ui/default-button/DefaultButton";

import { GenLottieOptions } from "@/utils/functions";

import styles from "./WhoAmI.module.scss";

function WhoAmI(props: any) {
  console.log(props);
  
  return (
    <main className={styles["container"]}>
      <div className={styles["text-container"]}>
        <h1 className={styles["heading"]} dangerouslySetInnerHTML={{ __html: props.who_am_i_heading }} />
        <p className={styles["paragraph"]} dangerouslySetInnerHTML={{ __html: props?.who_am_i_paragraph }} />
        <DefaultButton content={props?.who_am_i_button} />
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
