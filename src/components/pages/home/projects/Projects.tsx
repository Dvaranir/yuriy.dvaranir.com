import React from "react";
import DefaultButton from "@/components/ui/default-button/DefaultButton";

import Project from "./Project";

import styles from "./Projects.module.scss";
import { IMainPage } from "@/app/main-page.interfaces";

function Projects(props: IMainPage) {
  console.log(props);
  

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
        {props.projects.data.map(project => (
          <Project key={`proj${project.id}`} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
