import '../static/css/project.css';

import iconContactBook from '../static/img/contact-book.png';
import iconStudentRegistration from '../static/img/student-registration.png';
import iconPomodoroTimer from '../static/img/pomodoro-timer.png';
import iconFormValidator from '../static/img/form-validator.png';

const Project = (): JSX.Element => {
    return(
        <section id="project" className="container-sm d-flex flex-column mt-3">
            <div className="background-projects"></div>
            <h1 className="d-flex justify-content-center">Projetos</h1>
            <div className="d-flex text-dark mt-4">
                <div className="rounded w-50 h-25 bg-light ml-5 p-3">
                    <div className="d-flex align-items-center">
                        <img src={iconContactBook} width={50} height={50} alt="javascript icon"/>
                        <h3 className="ml-3">
                            <a href="https://github.com/DiogoMEng/contactDirectory">Contact Book</a>
                        </h3>
                    </div>
                    <p className="text-justify mt-1">A agenda de contatos é uma aplicação web que permite aos usuários armazenar, gerenciar e organizar informações de contatos. Os usuários podem adicionar, editar, visualizar e excluir contatos, além de adicionar notas.</p>
                    <span className="bg-success p-1 rounded text-light font-weight-bold">Status - Finalizado</span>
                    <h6 className="border-bottom mt-4">Tecnologias</h6>
                    <ul className="skills d-flex position-relative">
                        <li><img src="https://skillicons.dev/icons?i=javascript" width={35} height={35} alt="JavaScript" title="JavaScript"/></li>
                        <li className="ml-2"><img src="https://skillicons.dev/icons?i=nodejs" width={35} height={35} alt="NodeJS" title="NodeJS"/></li>
                        <li className="ml-2"><img src="https://skillicons.dev/icons?i=expressjs" width={35} height={35} alt="Express" title="Express"/></li>
                        <li className="ml-2"><img src="https://skillicons.dev/icons?i=mongodb" width={35} height={35} alt="MongoDB Atlas" title="MongoDB Atlas"/></li>
                        <li className="ml-2"><img src="https://skillicons.dev/icons?i=html" width={35} height={35} alt="HTML" title="HTML"/></li>
                        <li className="ml-2"><img src="https://skillicons.dev/icons?i=css" width={35} height={35} alt="CSS" title="CSS"/></li>
                        <li className="ml-2"><img src="https://skillicons.dev/icons?i=bootstrap" width={35} height={35} alt="Bootstrap" title="Bootstrap"/></li>
                    </ul>
                </div>
                <div className="rounded w-50 h-25 bg-light ml-5 mr-5 p-3">
                    <div className="d-flex align-items-center">
                        <img src={iconStudentRegistration} width={50} height={50} alt="javascript icon"/>
                        <h3 className="ml-3">
                            <a href="https://github.com/DiogoMEng/student-registration">Student Registration</a>
                        </h3>
                    </div>
                    <p className="text-justify mt-1">Um sistema de cadastro de alunos é uma plataforma que permite aos usuários criar e gerenciar suas contas de aluno. Os alunos podem se cadastrar na plataforma, fornecendo informações como nome, email e senha. Eles também têm a capacidade de excluir suas contas, caso desejem. Além disso, o sistema utiliza <b>JsonWebTokens</b> (JWT) para gerenciar o fluxo de rotas, autenticando e autorizando o acesso dos alunos às diferentes funcionalidades da aplicação de forma segura e eficiente.</p>
                    <span className="bg-warning p-1 rounded text-light font-weight-bold">Status - Em Aprimoramento</span>
                    <h6 className="border-bottom mt-4">Tecnologias</h6>
                    <ul className="skills d-flex position-relative">
                    <li><img src="https://skillicons.dev/icons?i=javascript" width={35} height={35} alt="JavaScript" title="JavaScript"/></li>
                        <li className="ml-2"><img src="https://skillicons.dev/icons?i=nodejs" width={35} height={35} alt="NodeJS" title="NodeJS"/></li>
                        <li className="ml-2"><img src="https://skillicons.dev/icons?i=expressjs" width={35} height={35} alt="Express" title="Express"/></li>
                        <li className="ml-2"><img src="https://skillicons.dev/icons?i=sequelize" width={35} height={35} alt="Sequelize" title="Sequelize"/></li>
                        <li className="ml-2"><img src="https://skillicons.dev/icons?i=mysql" width={35} height={35} alt="MySQL" title="MySQL"/></li>
                    </ul>
                </div>
            </div>
            <div className="d-flex text-dark mt-4">
                <div className="rounded w-50 h-25 bg-light ml-5 p-3">
                    <div className="d-flex align-items-center">
                        <img src={iconPomodoroTimer} width={50} height={50} alt="javascript icon"/>
                        <h3 className="ml-3">
                            <a href="https://github.com/DiogoMEng/Pomodoro-Timer">Pomodoro Timer</a>
                        </h3>
                    </div>
                    <p className="text-justify mt-1">Uma aplicação web de técnica de pomodoro é um cronômetro que ajuda na produtividade. Por meio de períodos definidos de trabalho e descanso, com alarmes para marcar o início e o fim de cada fase.</p>
                    <span className="bg-success p-1 rounded text-light font-weight-bold">Status - Finalizado</span>
                    <h6 className="border-bottom mt-4">Tecnologias</h6>
                    <ul className="skills d-flex position-relative">
                        <li><img src="https://skillicons.dev/icons?i=typescript" width={35} height={35} alt="TypeScript" title="TypeScript"/></li>
                        <li className="ml-2"><img src="https://skillicons.dev/icons?i=react" width={35} height={35} alt="React" title="React"/></li>
                        <li className="ml-2"><img src="https://skillicons.dev/icons?i=html" width={35} height={35} alt="HTML" title="HTML"/></li>
                        <li className="ml-2"><img src="https://skillicons.dev/icons?i=css" width={35} height={35} alt="CSS" title="CSS"/></li>
                        <li className="ml-2"><img src="https://skillicons.dev/icons?i=vite" width={35} height={35} title="Vite"/></li>
                    </ul>
                </div>
                <div className="rounded w-50 bg-light ml-5 mr-5 p-3">
                    <div className="d-flex align-items-center">
                        <img src={iconFormValidator} width={50} height={50} alt="javascript icon"/>
                        <h3 className="ml-3">
                            <a href="https://github.com/DiogoMEng/formValidator">Form Validator</a>
                        </h3>
                    </div>
                    <p className="text-justify mt-1">Um validador de formulário é uma aplicação que verifica as entradas do usuário em campos de formulário, garantindo que estejam corretas e dentro dos critérios definidos. Ele identifica campos obrigatórios não preenchidos e verifica se os dados estão no formato adequado (como endereços de e-mail válidos, números de telefone corretos, etc.)</p>
                    <span className="bg-success p-1 rounded text-light font-weight-bold">Status - Finalizado</span>
                    <h6 className="border-bottom mt-4">Tecnologias</h6>
                    <ul className="skills d-flex position-relative">
                        <li><img src="https://skillicons.dev/icons?i=typescript" width={35} height={35} alt="TypeScript" title="TypeScript"/></li>
                        <li className="ml-2"><img src="https://skillicons.dev/icons?i=html" width={35} height={35} alt="HTML" title="HTML"/></li>
                        <li className="ml-2"><img src="https://skillicons.dev/icons?i=css" width={35} height={35} alt="CSS" title="CSS"/></li>
                    </ul>
                </div>
            </div>
        </section>
    )
};

export { Project };