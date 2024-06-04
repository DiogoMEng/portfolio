// import iconContactBook from '../../../static/img/contact-book.png';
import { useEffect, useState } from 'react';
import PropCard from '../../../interfaces/propCard';

function Card (prop: PropCard): JSX.Element {
    const technologies = [];
    const [status, setStatus] = useState("bg-success p-1 rounded text-light font-weight-bold");
    
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

    return (
        <div className="w-3/4 mx-auto bg-[#1a18a4] p-5 rounded-md">
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
    );
}

export default Card;