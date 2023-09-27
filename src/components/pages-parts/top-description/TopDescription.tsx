import React from "react";

import { ITopDescriptionProps } from "./top-description.interfaces";

export default function TopDescription({
  heading,
  paragraph,
}: ITopDescriptionProps) {
  return (
    <div className="top-description__container">
      <h2 className="top-description__heading projects-heading">
        <span className="primary-color">/</span>
        {heading}
      </h2>
      <p className="top-description__paragraph">{paragraph}</p>
    </div>
  );
}
