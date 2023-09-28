'use client'
import React from "react";
import Lottie from "react-lottie";

import DefaultButton from "@/components/ui/default-button/DefaultButton";

import { GenLottieOptions } from "@/utils/functions";

import styles from "./AboutMe.module.scss";

function AboutMe(props) {
  return (
    <section className={styles["section-container"]}>
      <div className={styles["heading-line-container"]}>
        <h2 className={styles["heading"]}>
          <span className={`${styles["heading-cage"]} primary-color`}>#</span>
          {props.about_me_heading}
        </h2>
        <div className={`${styles["heading-line"]} line`}></div>
      </div>
      <div className={styles["text-photo-container"]}>
        <div className={styles["text-container"]} >
          <div className={styles["text-container"]} dangerouslySetInnerHTML={{ __html: props?.about_me_paragraph }}></div>
          <DefaultButton
            additionalClass={styles["button"]}
            content={props?.about_me_button}
          />
        </div>
        <div id="animation-container" className={styles["animation-container"]}>
          {/* @ts-ignore */}
          <Lottie options={GenLottieOptions("../assets/animations/programmer_zen.json")} />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
