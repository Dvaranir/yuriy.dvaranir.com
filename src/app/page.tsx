'use client'

import AboutMe from "@/components/pages/home/about-me/AboutMe";
import WhoAmI from "@/components/pages/home/who-am-i/WhoAmI";
import Quotation from "@/components/pages/home/quotation/Quotation";

import Projects from "@/components/pages/home/projects/Projects";
import Skills from "@/components/pages/home/skills/Skills";
import Contacts from "@/components/pages/home/contacts/Contacts";

import { IProjectProps } from "@/components/pages/home/projects/project.interfaces";
import { ISkillProps } from "@/components/pages/home/skills/skill.interfaces";
import { ISquareContactProps } from "@/components/pages-parts/square-contacts/square-contacts.interfaces";

import api from '@/utils/axios'
import { useEffect, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  
  const {data, isLoading, isError} = useQuery({
    queryKey: ['mainPage'],
    queryFn: async () => {
      const params = {
        locale: 'en',
        populate: [
          'projects.technologies',
          'projects.images',
          'skills.technologies',
          'about_me_animation',
          'schedule_animations.animation',
        ]
      }
      const { data } = await api.get('/api/main-page', { params: params })
      return data.data.attributes;
    }
  })

  if(isLoading) return <div>Is Loading</div>

  return (
    <>
      <WhoAmI {...data} />
      <Quotation />
      <Projects {...data} />
      <Skills {...data} />
      <AboutMe {...data} />
      <Contacts squareContactsList={dummyContacts} {...data} />
    </>
  );
}
