import React from "react";

import TopDescription from "@/components/pages-parts/top-description/TopDescription";
import { ITopDescriptionProps } from "@/components/pages-parts/top-description/top-description.interfaces";

import SmallApps from "@/components/pages/small-projects/SmallProjects";
import { ISmallAppProps } from "@/components/pages/small-projects/small-project.intefaces";

export default function Index() {
  const dummySmallAppsProps: ISmallAppProps[] = [
    {
      technologies: "HTML SCSS Python Flask",
      heading: "ChertNodes",
      description: "Minecraft servers hosting",
      liveLink: "#",
      githubLink: "#",
    },
    {
      technologies: "HTML SCSS Python Flask",
      heading: "ChertNodes",
      description: "Minecraft servers hosting",
      liveLink: "#",
      githubLink: "#",
    },
    {
      technologies: "HTML SCSS Python Flask",
      heading: "ChertNodes",
      description: "Minecraft servers hosting",
      liveLink: "#",
      githubLink: "#",
    },
    {
      technologies: "HTML SCSS Python Flask",
      heading: "ChertNodes",
      description: "Minecraft servers hosting",
      liveLink: "#",
      githubLink: "#",
    },
  ];

  return (
    <>
      <TopDescription
        heading="small-projects"
        paragraph="List of my small-projects"
      />
      <SmallApps smallProjects={dummySmallAppsProps} />
    </>
  );
}
