import IProject from '@/components/pages/home/projects/project.interfaces';

export interface IMainPage {
    who_am_i_heading:          string;
    who_am_i_paragraph:        string;
    who_am_i_button:           string;
    createdAt:                 Date;
    updatedAt:                 Date;
    locale:                    string;
    about_me_heading:          string;
    about_me_paragraph:        string;
    about_me_button:           string;
    contacts_heading:          string;
    contacts_paragraph:        string;
    contacts_contacts_heading: string;
    projects_heading:          string;
    projects_button:           string;
    skills_heading:            string;
    projects:                  Projects;
    skills:                    Skills;
    about_me_animation:        Animation;
    schedule_animations:       ScheduleAnimations;
}

export interface Animation {
    data: DAT;
}

export interface DAT {
    id:         number;
    attributes: DataAttributes;
}

export interface DataAttributes {
    name:              string;
    alternativeText:   null;
    caption:           null;
    width:             number | null;
    height:            number | null;
    formats:           Formats | null;
    hash:              string;
    ext:               string;
    mime:              string;
    size:              number;
    url:               string;
    previewUrl:        null;
    provider:          string;
    provider_metadata: null;
    createdAt:         Date;
    updatedAt:         Date;
}

export interface Formats {
    large:     Large;
    small:     Large;
    medium:    Large;
    thumbnail: Large;
}

export interface Large {
    ext:    string;
    url:    string;
    hash:   string;
    mime:   string;
    name:   string;
    path:   null;
    size:   number;
    width:  number;
    height: number;
}

export interface Projects {
    data: IProject[];
}

export interface ProjectsDatum {
    id:         number;
    attributes: PurpleAttributes;
}

export interface PurpleAttributes {
    name:         string;
    description:  string;
    live_url:     null;
    code_url:     string;
    createdAt:    Date;
    updatedAt:    Date;
    publishedAt:  Date;
    locale:       string;
    sort:         number;
    images:       Images;
    technologies: Technologies;
}

export interface Images {
    data: DAT[];
}

export interface Technologies {
    data: TechnologiesDatum[];
}

export interface TechnologiesDatum {
    id:         number;
    attributes: FluffyAttributes;
}

export interface FluffyAttributes {
    name:      string;
    createdAt: Date;
    updatedAt: Date;
}

export interface ScheduleAnimations {
    data: ScheduleAnimationsDatum[];
}

export interface ScheduleAnimationsDatum {
    id:         number;
    attributes: TentacledAttributes;
}

export interface TentacledAttributes {
    event:       string;
    start_time:  string;
    createdAt:   Date;
    updatedAt:   Date;
    publishedAt: Date;
    locale:      string;
    animation:   Animation;
}

export interface Skills {
    data: SkillsDatum[];
}

export interface SkillsDatum {
    id:         number;
    attributes: StickyAttributes;
}

export interface StickyAttributes {
    heading:      string;
    createdAt:    Date;
    updatedAt:    Date;
    publishedAt:  Date;
    locale:       string;
    technologies: Technologies;
}
