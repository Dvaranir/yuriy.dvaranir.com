import React from "react";

import DefaultButton from "@/components/ui/default-button/DefaultButton";
import { NoComponentIfUndefined } from "@/utils/functions";
import { IProjectLinksProps } from "@/components/pages/projects/project.interfaces";
import styles from "./ProjectLinks.module.scss";

function ProjectLinks({ liveLink, githubLink }: IProjectLinksProps) {
  return (
    <div className={styles.container}>
      {NoComponentIfUndefined(
        liveLink,
        <DefaultButton href={liveLink} content="Live &lt;~&gt;" />
      )}
      {NoComponentIfUndefined(
        githubLink,
        <DefaultButton href={githubLink} content="Git &gt;=" />
      )}
    </div>
  );
}

export default ProjectLinks;
