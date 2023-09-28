import React from "react";
import DefaultButton from "@/components/ui/default-button/DefaultButton";

import Project from "./Project";
import { IProjectProps } from "./project.interfaces";

import styles from "./Projects.module.scss";

function Projects(props: { projectsList: IProjectProps[], projects_button: string, projects_heading: string }) {
  const { projectsList } = props;

  return (
    <section className={styles["section-container"]}>
      <div className={styles["heading-container"]}>
        <div className={styles["heading-line-container"]}>
          <h2 className={styles["heading"]}>
            <span className={`${styles["heading-cage"]} primary-color`}>#</span>
            {props.projects_heading}
          </h2>
          <div className={styles["heading-line line"]}></div>
        </div>
        <DefaultButton content={props.projects_button} href="/projects" link={true} />
      </div>
      <div className={styles["projects-container"]}>
        {projectsList.map((project, i) => (
          <Project key={`proj${i}`} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
