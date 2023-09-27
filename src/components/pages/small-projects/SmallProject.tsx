import React from "react";

import { ISmallAppProps } from "./small-project.intefaces";
import ProjectLinks from "@/components/ui/project-links/ProjectLinks";
import styles from './SmallProject.module.scss'

export default function SmallProject({
  technologies,
  heading,
  description,
  liveLink,
  githubLink,
}: ISmallAppProps) {
  return (
    <div className={styles.container}>
      <p className={styles.technologies}>{technologies}</p>
      <div className={styles['bottom-container']}>
        <h3 className={styles.heading}>{heading}</h3>
        <p className={styles.description}>{description}</p>
        <ProjectLinks liveLink={liveLink} githubLink={githubLink} />
      </div>
    </div>
  );
}
