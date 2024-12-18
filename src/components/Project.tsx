// import iconContactBook from '../../../static/img/contact-book.png';
import { useEffect, useRef, useState } from 'react';
import PropCard from '../interfaces/propCard';
import observationPosition from '../utils/observationPosition';

function Project (prop: PropCard): JSX.Element {
    const technologies = [];
    const [status, setStatus] = useState("bg-success p-1 rounded text-light font-weight-bold");
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef(null);
    
    for (let i = 0; i < prop.technologies.img.length; i++){
        technologies.push(<li className='ml-2'><img src={prop.technologies.img[i]} width={35} height={35} alt={prop.technologies.alt[i]} title={prop.technologies.title[i]}/></li>)
    }

    useEffect(() => {
        switch(prop.status){
            case "Status - Em Aprimoramento":
                setStatus("bg-orange-700 rounded-md p-1");
                break;
            case "Status - Parado":
                setStatus("bg-red-700 rounded-md p-1");
                break;
            default:
                setStatus("bg-green-700 rounded-md p-1");
                break;         
        }
    }, [prop]);

    useEffect(observationPosition(setIsVisible, cardRef, 0.7), []);

    return (
        <div
            ref={cardRef}
            className={`w-4/5 mx-auto bg-[#1a18a4] p-3 rounded-md duration-300 hover:shadow-2xl hover:shadow-black max-md:w-full max-md:mb-5 max-md:p-3 ${
                isVisible ? 'max-md:p-4 max-md:shadow-2xl max-md:shadow-black' : ''
            }`}
            style={{
                transition: 'all 0.5s ease-in-out'
            }}
        >
            <div>
                {/* imagem e nome do projeto */}
                <h3 className='text-center mb-1.5'>
                    <a className='p-1 bg-white rounded-md text-[#1a18a4]' href={prop.projectLink}>{prop.projectName}</a>
                </h3>

                {/* descrição do projeto */}
                <p className="mb-2 text-justify">{prop.description}</p>

                {/* status do projeto */}
                <span className={status}>{prop.status}</span>
                        
                <div className="my-4"><span className="border-b-2">Tecnologias</span></div>

                {/* tecnologias utilizadas */}
                <ul className="flex">
                    {technologies}
                </ul>
            </div>
        </div>
    );
}

export default Project;