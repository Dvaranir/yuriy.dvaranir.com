import React from "react";

import { ISmallAppProps } from "./small-project.intefaces";
import ProjectLinks from "@/components/ui/project-links/ProjectLinks";
import styles from './SmallProject.module.scss'
import Technologies from "@/components/reusable/Technologies";

export default function SmallProject({attributes}: any) {
  
  return (
    <div className={styles.container}>
      <p className={styles.technologies}><Technologies {...attributes.technologies} /></p>
      <div className={styles['bottom-container']}>
        <h3 className={styles.heading}>{attributes.name}</h3>
        <p className={styles.description}>{attributes.description}</p>
        <ProjectLinks liveLink={attributes.live_url} githubLink={attributes.code_url} />
      </div>
    </div>
  );
}
