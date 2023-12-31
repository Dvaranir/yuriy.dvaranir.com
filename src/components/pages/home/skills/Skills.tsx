import React from "react";

import Skill from "./Skill";
import { ISkillProps } from "./skill.interfaces";

import styles from "./Skills.module.scss";

export default function Skills(props: { skillsList: ISkillProps[] }) {
  const skills = props.skills.data;

  return (
    <section className={styles["section-container"]}>
      <div className={styles["heading-container"]}>
        <h2 className={styles.heading}>
          <span className={`${styles["heading-cage"]} primary-color`}>
            #
          </span>
          {props.skills_heading}
        </h2>
        <div className={styles["heading-line line"]}></div>
      </div>
      <div className={styles.container}>
        {skills.map((skill, i) => (
          <Skill key={`skil${i}`} skill={skill} />
        ))}
      </div>
    </section>
  );
}
