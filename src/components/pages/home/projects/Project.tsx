import React from "react";
import Image from "next/image";
import { NoComponentIfUndefined } from "@/scripts/functions";
import DefaultButton from "@/components/ui/default-button/DefaultButton";
import { IProjectProps } from "./project.interfaces";
import styles from "./Project.module.scss";

export default function Project(props: { project: IProjectProps }) {
  const { projectName, technologies, projectAbout, image, liveLink, gitLink } =
    props.project;

  return (
    <article className={styles["container"]}>
      <div className={styles["image-container"]}>
        <Image
          className={styles["image"]}
          width={200}
          height={200}
          src={image}
          alt=""
        />
      </div>
      <p className={styles["technologies-paragraph"]}>{technologies}</p>
      <div className={styles["about-container"]}>
        <h3 className={styles["about-heading"]}>{projectName}</h3>
        <p className={styles["about-paragraph"]}>{projectAbout}</p>
        <div className={styles["about-buttons-container"]}>
          {NoComponentIfUndefined(
            liveLink,
            <DefaultButton
              href={liveLink}
              additionalClass={styles["about-button"]}
              content="Live &lt;~&gt;"
            />
          )}
          {NoComponentIfUndefined(
            gitLink,
            <DefaultButton
              href={gitLink}
              additionalClass={styles["project-about-button"]}
              content="Git &gt;"
            />
          )}
        </div>
      </div>
    </article>
  );
}
