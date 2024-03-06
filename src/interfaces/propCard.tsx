interface PropCard {
    projectName: string;
    projectImg: string;
    description: string;
    status: string;
    technologies: {
        img: string[],
        alt: string[],
        title: string[]
    };
}

export default PropCard;