'use client'
import React from "react";
import Lottie from "react-lottie";

import DefaultButton from "@/components/ui/default-button/DefaultButton";

import { GenLottieOptions } from "@/utils/functions";

import styles from "./WhoAmI.module.scss";
import { useApiAsset } from "@/utils/hooks";

function WhoAmI(props: any) {

  const animations = props.schedule_animations.data
  const animation = chooseAnimation()
  const animationUrl = useApiAsset(animation.attributes.animation.data.attributes.url) 

  /**
   * Chooses an animation based on the current time.
   * @returns The chosen animation object or null if no animation is available.
   */
  function chooseAnimation(){
    const currentTime = new Date();
    const currentHour = currentTime.getUTCHours() + 6;
    const currentMinute = currentTime.getUTCMinutes();
    const currentSecond = currentTime.getUTCSeconds();

    let animation = null;

    for (let i = 0; i < animations.length; i++) {
      const startTime = animations[i].attributes.start_time
      const [hour, minute, second] = startTime.split(":").map(Number);
      
      if (hour < currentHour) {
        animation = animations[i];
      } else if (hour === currentHour && minute < currentMinute) {
        animation = animations[i];
      } else if (hour === currentHour && minute === currentMinute && second <= currentSecond) {
        animation = animations[i];
      } else {
        break;
      }
    }

    return animation;
  }
  
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
          <Lottie options={GenLottieOptions(animationUrl)} />
        </div>
        <div className={styles["activity-container"]}>
          <span className={styles["activity-icon"]}></span>
          <span className={styles["activity-text"]} dangerouslySetInnerHTML={{ __html: animation.attributes.event }} />
        </div>
      </div>
    </main>
  );
}

export default WhoAmI;
