import React from "react";

import Project from "./Project";

import styles from "./Projects.module.scss";

function Projects({ data }: any) {
  return (
    <section className={styles["section"]}>
      <div className={styles["container"]}>
        {data.map((app, i) => (
          <Project key={`capp${i}`} {...app} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
