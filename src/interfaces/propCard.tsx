interface PropCard {
    projectName: string;
    projectImg: string;
    projectLink: string;
    description: string;
    status: string;
    technologies: {
        img: string[],
        alt: string[],
        title: string[]
    };
}

export default PropCard;