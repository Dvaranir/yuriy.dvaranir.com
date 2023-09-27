'use client'
import React from "react";
import Lottie from "react-lottie";

import DefaultButton from "@/components/ui/default-button/DefaultButton";

import { GenLottieOptions } from "@/scripts/functions";

import styles from "./AboutMe.module.scss";

function AboutMe() {
  return (
    <section className={styles["section-container"]}>
      <div className={styles["heading-line-container"]}>
        <h2 className={styles["heading"]}>
          <span className={`${styles["heading-cage"]} primary-color`}>#</span>
          about-me
        </h2>
        <div className={`${styles["heading-line"]} line`}></div>
      </div>
      <div className={styles["text-photo-container"]}>
        <div className={styles["text-container"]}>
          <p className={styles["text"]}>Hello, i’m Elias!</p>
          <p className={styles["text"]}>
            I’m a self-taught front-end developer based in Kyiv, Ukraine. I can
            develop responsive websites from scratch and raise them into modern
            user-friendly web experiences.
          </p>
          <p className={styles["text"]}>
            Transforming my creativity and knowledge into a websites has been my
            passion for over a year. I have been helping various clients to
            establish their presence online. I always strive to learn about the
            newest technologies and frameworks.
          </p>
          <DefaultButton
            additionalClass={styles["button"]}
            content="Read more -&gt;"
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
