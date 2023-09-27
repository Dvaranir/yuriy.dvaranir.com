import React from "react";

import { ISkillProps } from "./skill.interfaces";

import styles from "./Skill.module.scss";

export default function Skill(props: { skill: ISkillProps }) {
  const { heading, technologies } = props.skill;

  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>{heading}</h3>
      <p className={styles.description}>{technologies}</p>
    </div>
  );
}
