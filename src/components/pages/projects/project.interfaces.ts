export interface IProjectCoreProps {
  technologies: string;
  heading: string;
  description: string;
}

export interface IProjectImagesProps {
  image: string;
  imageAlt: string;
}

export interface IProjectLinksProps {
  liveLink?: string;
  githubLink?: string;
}

export interface IProjectsProps
  extends IProjectCoreProps,
    IProjectLinksProps,
    IProjectImagesProps {}
