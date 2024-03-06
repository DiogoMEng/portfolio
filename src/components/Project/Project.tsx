import '../../static/css/project.css';

import iconContactBook from '../../static/img/contact-book.png';
import iconStudentRegistration from '../../static/img/student-registration.png';
import iconPomodoroTimer from '../../static/img/pomodoro-timer.png';
import iconFormValidator from '../../static/img/form-validator.png';
import Card from './cardProject/card';

const Project = (): JSX.Element => {
    return(
        <section id="project" className="container-sm d-flex flex-column mt-3">
            <div className="background-projects"></div>
            <h1 className="d-flex justify-content-center">Projetos</h1>

            {/* card de projetos - fila 1 */}
            <div className="d-flex text-dark mt-4">
                <Card
                    projectName='Contact Book'
                    projectImg={iconContactBook}
                    description='A agenda de contatos é uma aplicação web que permite aos usuários armazenar, gerenciar e organizar informações de contatos. Os usuários podem adicionar, editar, visualizar e excluir contatos, além de adicionar notas.'
                    status='Status - Finalizado'
                    technologies={{
                        img: [
                            "https://skillicons.dev/icons?i=javascript", 
                            "https://skillicons.dev/icons?i=nodejs",
                            "https://skillicons.dev/icons?i=expressjs",
                            "https://skillicons.dev/icons?i=mongodb",
                            "https://skillicons.dev/icons?i=html",
                            "https://skillicons.dev/icons?i=css",
                            "https://skillicons.dev/icons?i=bootstrap"

                        ],
                        alt: ["JavaScript", "NodeJS", "Express", "MongoDB Atlas", "HTML", "CSS", "Bootstrap"],
                        title: ["Javascript", "NodeJS", "Express", "MongoDB Atlas", "HTML", "CSS", "Bootstrap"]
                    }}
                />

                <Card
                    projectName='Student Registration'
                    projectImg={iconStudentRegistration}
                    description='Um sistema de cadastro de alunos é uma plataforma que permite aos usuários criar e gerenciar suas contas de aluno. Os alunos podem se cadastrar na plataforma, fornecendo informações como nome, email e senha. Eles também têm a capacidade de excluir suas contas, caso desejem. Além disso, o sistema utiliza <b>JsonWebTokens</b> (JWT) para gerenciar o fluxo de rotas, autenticando e autorizando o acesso dos alunos às diferentes funcionalidades da aplicação de forma segura e eficiente.'
                    status='Status - Em Aprimoramento'
                    technologies={{
                        img: [
                            "https://skillicons.dev/icons?i=javascript", 
                            "https://skillicons.dev/icons?i=nodejs",
                            "https://skillicons.dev/icons?i=expressjs",
                            "https://skillicons.dev/icons?i=sequelize",
                            "https://skillicons.dev/icons?i=mysql",
                        ],
                        alt: ["JavaScript", "NodeJS", "Express", "Sequelize", "MySQL"],
                        title: ["Javascript", "NodeJS", "Express", "Sequelize", "MySQL"]
                    }}
                />
            </div>

            {/* card de projetos - fila 2 */}
            <div className="d-flex text-dark mt-4">
                
                <Card
                    projectName='Pomodoro Timer'
                    projectImg={iconPomodoroTimer}
                    description='Uma aplicação web de técnica de pomodoro é um cronômetro que ajuda na produtividade. Por meio de períodos definidos de trabalho e descanso, com alarmes para marcar o início e o fim de cada fase.'
                    status='Status - Finalizado'
                    technologies={{
                        img: [
                            "https://skillicons.dev/icons?i=typescript", 
                            "https://skillicons.dev/icons?i=react",
                            "https://skillicons.dev/icons?i=html",
                            "https://skillicons.dev/icons?i=css"
                        ],
                        alt: ["Typescript", "React", "HTML", "CSS"],
                        title: ["Typescript", "React", "HTML", "CSS"]
                    }}
                />

                <Card
                    projectName='Form Validator'
                    projectImg={iconFormValidator}
                    description='Um validador de formulário é uma aplicação que verifica as entradas do usuário em campos de formulário, garantindo que estejam corretas e dentro dos critérios definidos. Ele identifica campos obrigatórios não preenchidos e verifica se os dados estão no formato adequado (como endereços de e-mail válidos, números de telefone corretos, etc.)'
                    status='Status - Finalizado'
                    technologies={{
                        img: [
                            "https://skillicons.dev/icons?i=typescript", 
                            "https://skillicons.dev/icons?i=html",
                            "https://skillicons.dev/icons?i=css"
                        ],
                        alt: ["Typescript", "HTML", "CSS"],
                        title: ["Typescript", "HTML", "CSS"]
                    }}
                />
            </div>
        </section>
    )
};

export { Project };