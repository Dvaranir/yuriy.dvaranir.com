'use client'

import React from "react";
import api from '@/utils/axios';

import TopDescription from "@/components/pages-parts/top-description/TopDescription";
import { ITopDescriptionProps } from "@/components/pages-parts/top-description/top-description.interfaces";

import SmallApps from "@/components/pages/small-projects/SmallProjects";
import { ISmallAppProps } from "@/components/pages/small-projects/small-project.intefaces";
import { useQuery } from "@tanstack/react-query";

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

  const {data, isLoading, isError} = useQuery({
    queryKey: ['skillsPage'],
    queryFn: async () => {
      const params = {
        locale: 'en',
        populate: [
          'technologies',
        ]
      }
      const { data } = await api.get('/api/small-projects', { params: params })
      return data;
    }
  })
  
  if(!data) return;  
  
  

  return (
    <>
      <TopDescription
        heading="small-projects"
        paragraph="List of my small-projects"
      />
      <SmallApps {...data} />
    </>
  );
}
