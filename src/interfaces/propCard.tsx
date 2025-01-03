export interface ProjectProtocol {
    projectName: string;
    projectLink: string;
    description: string;
    status: string;
    technologies: {
        img: string[],
        alt: string[],
        title: string[]
    };
}

export interface SkillProtocol {
    children: React.ReactNode,
    nameSkill: string,
    frameworks: string[],
    colorContainer: string
}

export interface LinkButtonProtocol {
    colorButton: string,
    link: string
}