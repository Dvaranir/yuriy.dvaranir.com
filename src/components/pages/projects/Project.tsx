import React from "react";
import Image from "next/image";

import ProjectLinks from "@/components/ui/project-links/ProjectLinks";

import { IProjectsProps } from "./project.interfaces";

import styles from "./Project.module.scss";
import Technologies from "@/components/reusable/Technologies";
import { useApiAsset } from "@/utils/hooks";

export default function Project({attributes}: any) {

  const image = attributes.images.data[0].attributes
  const alt = image.alternativeText ? image.alternativeText : image.name

  return (
    <article className={styles["container"]}>
      <div className={styles["image-container"]}>
        <Image
          width={300}
          height={300}
          className={styles["image"]}
          src={useApiAsset(image.url)}
          alt={alt}
        />
      </div>
      <p className={styles["technologies-paragraph"]}><Technologies {...attributes.technologies} /></p>
      <div className={styles["about-container"]}>
        <h3 className={styles["about-heading"]}>{attributes.name}</h3>
        <p className={styles["about-paragraph"]}>{attributes.description}</p>
        <ProjectLinks liveLink={attributes.live_url} githubLink={attributes.code_url} />
      </div>
    </article>
  );
}
