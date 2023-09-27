import React from "react";

import SmallProject from "./SmallProject";
import { ISmallAppProps } from "./small-project.intefaces";

import styles from './SmallProjects.module.scss'

export default function SmallApps({ smallProjects }: { smallProjects: ISmallAppProps[] }) {

  return (
    <section className="small-projects__section">
      <div className={styles.container}>
        {smallProjects.map((app, i) => (
          <SmallProject key={`smap${i}`} {...app} />
        ))}
      </div>
    </section>
  );
}
