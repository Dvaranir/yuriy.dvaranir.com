import React from "react";

import SmallProject from "./SmallProject";
import { ISmallAppProps } from "./small-project.intefaces";

import styles from './SmallProjects.module.scss'

export default function SmallApps({data}: any) {
  
  return (
    <section className="small-projects__section">
      <div className={styles.container}>
        {data.map((app, i) => (
          <SmallProject key={`smap${i}`} {...app} />
        ))}
      </div>
    </section>
  );
}
