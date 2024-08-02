import Card from './cardProject/card';
import data from './projectData/data';

const Project = (): JSX.Element => {
    return(
        <section className="w-full pt-5 pb-10 bg-white">
            <h1 className="mb-6 text-3xl text-center font-bold text-[#1a18a4]">Projetos</h1>

            {/* card de projetos - fila 1 */}
            <div className="mx-16 grid grid-cols-2 gap-x-2 max-md:mx-9 max-md:grid-cols-1">
                {data.slice(0, 2).map((project, index) => (
                    <Card 
                        key={index}
                        projectName={project.projectName}
                        projectLink={project.projectLink}
                        description={project.description}
                        status={project.status}
                        technologies={project.technologies}
                    />
                ))}
            </div>
            
            {/* card de projetos - fila 2 */}
            <div className="mx-16 grid grid-cols-2 gap-x-2 mt-5 max-md:mx-9 max-md:grid-cols-1">
                {data.slice(2, 4).map((project, index) => (
                    <Card 
                        key={index}
                        projectName={project.projectName}
                        projectLink={project.projectLink}
                        description={project.description}
                        status={project.status}
                        technologies={project.technologies}
                    />
                ))}
            </div>
        </section>
    )
};

export { Project };