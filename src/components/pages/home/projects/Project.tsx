import React from "react";
import Image from "next/image";
import { IProject } from "./project.interfaces";
import styles from "./Project.module.scss";
import { useApiAsset } from "@/utils/hooks";
import Technologies from "@/components/reusable/Technologies";
import ProjectLinks from "@/components/ui/project-links/ProjectLinks";

export default function Project(props: IProject) {
  const { code_url, description, live_url, name, technologies, images} = props.project.attributes;

  // Get the first image
  const image = images.data[0].attributes.url

  return (
    <article className={styles["container"]}>
      <div className={styles["image-container"]}>
        <Image
          className={styles["image"]}
          width={200}
          height={200}
          src={useApiAsset(image)}
          alt=""
        />
      </div>
      <p className={styles["technologies-paragraph"]}>
        <Technologies {...technologies} />
      </p>
      <div className={styles["about-container"]}>
        <h3 className={styles["about-heading"]}>{name}</h3>
        <p className={styles["about-paragraph"]}>{description}</p>
        <ProjectLinks liveLink={live_url} githubLink={code_url} />
      </div>
    </article>
  );
}
