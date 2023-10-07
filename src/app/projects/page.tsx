'use client'
import React from "react";
import api from '@/utils/axios'

import TopDescription from "@/components/pages-parts/top-description/TopDescription";
import { ITopDescriptionProps } from "@/components/pages-parts/top-description/top-description.interfaces";

import Projects from "@/components/pages/projects/Projects";
import { IProjectsProps } from "@/components/pages/projects/project.interfaces";
import { useQuery } from "@tanstack/react-query";

export default function Index() {

  const {data, isLoading, isError} = useQuery({
    queryKey: ['projectsPage'],
    queryFn: async () => {
      const params = {
        locale: 'en',
        populate: [
          'technologies',
          'images',
        ]
      }
      const { data } = await api.get('/api/projects', { params: params })
      
      return data;
    }
  })

  if(!data) return;

  return (
    <>
      <TopDescription heading="projects" paragraph="List of my projects" />
      <Projects {...data} />
    </>
  );
}
