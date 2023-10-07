export interface IProject {
    project: ProjectClass;
}

export interface ProjectClass {
    id:         number;
    attributes: ProjectAttributes;
}

export interface ProjectAttributes {
    name:         string;
    description:  string;
    live_url?:     string;
    code_url?:     string;
    createdAt:    Date;
    updatedAt:    Date;
    publishedAt:  Date;
    locale:       string;
    sort:         number;
    images:       Images;
    technologies: Technologies;
}

export interface Images {
    data: ImagesDatum[];
}

export interface ImagesDatum {
    id:         number;
    attributes: PurpleAttributes;
}

export interface PurpleAttributes {
    name:              string;
    alternativeText:   null;
    caption:           null;
    width:             number;
    height:            number;
    formats:           Formats;
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
