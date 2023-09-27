import React from "react";
import Image from "next/image";

import ProjectLinks from "@/components/ui/project-links/ProjectLinks";

import { IProjectsProps } from "./project.interfaces";

import styles from "./Project.module.scss";

export default function Project({
  image,
  imageAlt,
  technologies,
  heading,
  description,
  liveLink,
  githubLink,
}: IProjectsProps) {
  return (
    <article className={styles["container"]}>
      <div className={styles["image-container"]}>
        <Image
          width={100}
          height={100}
          className={styles["image"]}
          src={image}
          alt={imageAlt}
        />
      </div>
      <p className={styles["technologies-paragraph"]}>{technologies}</p>
      <div className={styles["about-container"]}>
        <h3 className={styles["about-heading"]}>{heading}</h3>
        <p className={styles["about-paragraph"]}>{description}</p>
        <ProjectLinks liveLink={liveLink} githubLink={githubLink} />
      </div>
    </article>
  );
}
