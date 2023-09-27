import React from "react";

import TopDescription from "@/components/pages-parts/top-description/TopDescription";
import { ITopDescriptionProps } from "@/components/pages-parts/top-description/top-description.interfaces";

import Projects from "@/components/pages/projects/Projects";
import { IProjectsProps } from "@/components/pages/projects/project.interfaces";

export default function Index() {
  const dummyCompletedAppsProps: IProjectsProps[] = [
    {
      image: "/assets/images/article-example-photo.jpg",
      imageAlt: "",
      technologies: "HTML SCSS Python Flask",
      heading: "ChertNodes",
      description: "Minecraft servers hosting",
      liveLink: "https://fontawesome.com/search?q=link&o=r&s=solid&f=classic",
      githubLink: "https://fontawesome.com/search?q=link&o=r&s=solid&f=classic",
    },
    {
      image: "/assets/images/article-example-photo.jpg",
      imageAlt: "",
      technologies: "HTML SCSS Python Flask",
      heading: "ChertNodes",
      description: "Minecraft servers hosting",
      liveLink: "https://fontawesome.com/search?q=link&o=r&s=solid&f=classic",
      githubLink: "https://fontawesome.com/search?q=link&o=r&s=solid&f=classic",
    },
    {
      image: "/assets/images/article-example-photo.jpg",
      imageAlt: "",
      technologies: "HTML SCSS Python Flask",
      heading: "ChertNodes",
      description: "Minecraft servers hosting",
      liveLink: "https://fontawesome.com/search?q=link&o=r&s=solid&f=classic",
      githubLink: "https://fontawesome.com/search?q=link&o=r&s=solid&f=classic",
    },
    {
      image: "/assets/images/article-example-photo.jpg",
      imageAlt: "",
      technologies: "HTML SCSS Python Flask",
      heading: "ChertNodes",
      description: "Minecraft servers hosting",
      liveLink: "https://fontawesome.com/search?q=link&o=r&s=solid&f=classic",
      githubLink: "https://fontawesome.com/search?q=link&o=r&s=solid&f=classic",
    },
  ];

  return (
    <>
      <TopDescription heading="projects" paragraph="List of my projects" />
      <Projects props={dummyCompletedAppsProps} />
    </>
  );
}
