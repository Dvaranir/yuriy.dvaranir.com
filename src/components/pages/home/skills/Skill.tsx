import React from "react";

import { ISkillProps } from "./skill.interfaces";

import styles from "./Skill.module.scss";

export default function Skill(props: { skill: ISkillProps }) {
  const skill = props.skill.attributes;
  const technologies = skill.technologies.data

  const renderTechnologies = () => technologies.map((technology, i) => <span key={technology.id}>{technology.attributes.name} </span>)

  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>{skill.heading}</h3>
      <p className={styles.description}>{renderTechnologies()}</p>
    </div>
  );
}
