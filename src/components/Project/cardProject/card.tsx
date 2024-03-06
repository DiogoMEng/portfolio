// import iconContactBook from '../../../static/img/contact-book.png';
import PropCard from '../../../interfaces/propCard';

function Card (prop: PropCard): JSX.Element {
    const element = [];

    for (let i = 0; i < prop.technologies.img.length; i++){
        element.push(<li className='ml-2'><img src={prop.technologies.img[i]} width={35} height={35} alt={prop.technologies.alt[i]} title={prop.technologies.title[i]}/></li>)
    }



    return (
        <div className="rounded w-50 h-25 bg-light ml-5 mr-5 p-3">
                    {/* imagem e nome do projeto */}
                    <div className="d-flex align-items-center">
                        <img src={prop.projectImg} width={50} height={50} alt="javascript icon"/>
                        <h3 className="ml-3">
                            <a href="https://github.com/DiogoMEng/contactDirectory">{prop.projectName}</a>
                        </h3>
                    </div>

                    {/* descrição do projeto */}
                    <p className="text-justify mt-1">{prop.description}</p>

                    {/* status do projeto */}
                    <span className="bg-success p-1 rounded text-light font-weight-bold">{prop.status}</span>
                    
                    <h6 className="border-bottom mt-4">Tecnologias</h6>

                    {/* tecnologias utilizadas */}
                    <ul className="skills d-flex position-relative">
                        {element}
                    </ul>
        </div>
    );
}

export default Card;