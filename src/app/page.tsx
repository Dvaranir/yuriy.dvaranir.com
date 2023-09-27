import AboutMe from "@/components/pages/home/about-me/AboutMe";
import WhoAmI from "@/components/pages/home/who-am-i/WhoAmI";
import Quotation from "@/components/pages/home/quotation/Quotation";

import Projects from "@/components/pages/home/projects/Projects";
import Skills from "@/components/pages/home/skills/Skills";
import Contacts from "@/components/pages/home/contacts/Contacts";

import { IProjectProps } from "@/components/pages/home/projects/project.interfaces";
import { ISkillProps } from "@/components/pages/home/skills/skill.interfaces";
import { ISquareContactProps } from "@/components/pages-parts/square-contacts/square-contacts.interfaces";

export default function Home() {
  const dummyProjects: IProjectProps[] = [
    {
      liveLink: "#",
      gitLink: "#",
      image: "/assets/images/article-example-photo.jpg",
      technologies: "HTML SCSS Python Flask",
      projectName: "ChertNodes",
      projectAbout: "Minecraft servers hosting",
    },
    {
      liveLink: "#",
      gitLink: "#",
      image: "/assets/images/article-example-photo.jpg",
      technologies: "HTML SCSS Python Flask",
      projectName: "ChertNodes",
      projectAbout: "Minecraft servers hosting",
    },
    {
      liveLink: "#",
      gitLink: "#",
      image: "/assets/images/article-example-photo.jpg",
      technologies: "HTML SCSS Python Flask",
      projectName: "ChertNodes",
      projectAbout: "Minecraft servers hosting",
    },
  ];

  const dummySkills: ISkillProps[] = [
    {
      heading: "Languages",
      technologies: "Python C# TypeScript JavaScript Bash",
    },
    {
      heading: "Databases",
      technologies: "MySQL PostgreSQL SQLite",
    },
    {
      heading: "Tools",
      technologies: "Linux SSH Git Webpack Gulp Vite Figma Docker",
    },
    {
      heading: "Frameworks",
      technologies: "Django .Net React.js Scrapy",
    },
    {
      heading: "Other",
      technologies: "HTML CSS SCSS LESS Rest",
    },
  ];

  const dummyContacts: ISquareContactProps[] = [
    {
      href: "tel:87770164685",
      image: "/assets/images/phone-icon.png",
      imageAlt: "Discord Icon",
      text: "Phone",
    },
    {
      href: "https://telegram.me/dvaranir",
      image: "/assets/images/logo-telegram.png",
      imageAlt: "Telegram Icon",
      text: "Telegram",
    },
    {
      href: "https://api.whatsapp.com/send?phone=77770164685",
      image: "/assets/images/logo-whatsapp.png",
      imageAlt: "WhatsApp Icon",
      text: "WhatsApp",
    },
    {
      href: "https://www.linkedin.com/in/yuriy-plakhin/",
      image: "/assets/images/logo-linkedin-black.png",
      imageAlt: "Linkedin Icon",
      text: "Linkedin",
    },
  ];

  return (
    <>
      <WhoAmI />
      <Quotation />
      <Projects projectsList={dummyProjects} />
      <Skills skillsList={dummySkills} />
      <AboutMe />
      <Contacts squareContactsList={dummyContacts} />
    </>
  );
}
