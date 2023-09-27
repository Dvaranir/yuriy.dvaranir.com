import React from "react";

import Project from "./Project";

import { IProjectsProps } from "./project.interfaces";

import styles from "./Projects.module.scss";

function Projects({ props }: { props: IProjectsProps[] }) {
  return (
    <section className={styles["section"]}>
      <div className={styles["container"]}>
        {props.map((app, i) => (
          <Project key={`capp${i}`} {...app} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
