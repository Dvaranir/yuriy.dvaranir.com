import React from "react";

import styles from "./DefaultButton.module.scss";
import Link from "next/link";

import { EmptyIfUndefined } from "@/scripts/functions";

import { IDefaultButtonProps } from "./default-button.interfaces";

export default function DefaultButton({
  content,
  href,
  onClick,
  additionalClass,
  link = false,
  button = false,
  type = "submit",
  newWindow = true,
}: IDefaultButtonProps) {
  additionalClass = EmptyIfUndefined(additionalClass);

  type additionalParameters = {
    target?: string;
    rel?: string;
  };

  let additionalParameters: additionalParameters = {};

  if (newWindow) {
    additionalParameters.target = "_blank";
    additionalParameters.rel = "noopener noreferrer";
  }

  if (link && !button) {
    return (
      <Link
        href={href ? href : "#"}
        className={`${styles["button"]}  ${additionalClass}`}
        onClick={onClick}
        {...additionalParameters}
      >
        {content}
      </Link>
    );
  } else if (!link && !button) {
    return (
      <a
        className={`${styles["button"]} ${additionalClass}`}
        href={href}
        onClick={onClick}
        {...additionalParameters}
      >
        {content}
      </a>
    );
  } else {
    return (
      <button
        type={type}
        className={`${styles["button"]} ${additionalClass}`}
        onClick={onClick}
      >
        {content}
      </button>
    );
  }
}
