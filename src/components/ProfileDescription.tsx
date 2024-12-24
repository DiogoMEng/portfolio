import perfil from '../assets/img/perfil.jpeg';
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

const ProfileDescription = (): JSX.Element => {
    return (
        <section className="w-full py-10">

            <div className="flex mx-auto w-9/12 p-5 bg-[#0b097e] rounded-md items-center justify-center max-md:justify-items-center max-md:grid max-md:w-10/12">

                <img src={perfil} className="w-72 h-72 mr-5 border-[3px] border-solid border-white rounded-full max-sm:m-0 max-sm:w-56 max-sm:h-56" alt="user-perfil" />
                {/* descrição de perfil */}
                <div className="w-2/3 max-md:w-11/12 max-md:mt-3">
                    <h2 className="text-3xl text-center font-bold">Olá, me chamo Diogo Mello</h2>
                    <h3 className="text-center"><span className="text-xl inline-block mb-3 border-solid border-b-2">Desenvolvedor Back-end</span></h3>
                    <p className="text-justify">
                        Estou me Graduando em <b>Engenharia da Computação</b> e me especializo em <b>desenvolvimento backend com NodeJS</b>, utilizando <b>Javascript ou Typescript</b>. Tenho uma base sólida em lógica de programação e experiência com bancos de dados como <b>MySQL, PostgreSQL e MongoDB</b>, além de competência em modelagem de dados. Também sou habilidoso na <b>criação e consumo de APIs RESTful</b>, sempre aplicando o padrão de projeto MVC. Estou em constante aprimoramento e busco contribuir para o desenvolvimento de sistemas escaláveis e eficientes.
                    </p>
                    {/* redes sociais */}
                    <div className="flex mt-3 justify-center">
                        <a href="https://www.linkedin.com/in/diogo-meng"><FaLinkedin className="text-slate-100 text-6xl" /></a>
                        <a className="ml-3" href="https://github.com/DiogoMEng"><FaSquareGithub className="text-slate-100 text-6xl"/></a>
                    </div>
                </div>

            </div>
        </section>
    )
};

export default ProfileDescription;