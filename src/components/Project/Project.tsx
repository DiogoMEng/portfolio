import Card from './cardProject/card';

const Project = (): JSX.Element => {
    return(
        <section className="w-full pt-5 pb-10 bg-white">
            <h1 className="mb-6 text-3xl text-center font-bold text-[#1a18a4]">Projetos</h1>

            {/* card de projetos - fila 1 */}
            <div className="grid grid-cols-2 gap-x-2 max-md:grid-cols-1">

                {/* projeto 1 */}
                <Card
                    projectName='Contact Book'
                    projectLink='https://github.com/DiogoMEng/Contact_Book'
                    description='A agenda de contatos é uma aplicação web que permite aos usuários armazenar, gerenciar e organizar informações de contatos. Os usuários podem adicionar, editar, visualizar e excluir contatos, além de adicionar notas.'
                    status='Status - Parado'
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
                
                {/* projeto 2 */}
                <Card
                    projectName='Student Registration'
                    projectLink='https://github.com/DiogoMEng/student-registration'
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
            <div className="mt-5 grid grid-cols-2 gap-x-2 max-md:grid-cols-1">
                
                {/* projeto 3 */}
                <Card
                    projectName='Pomodoro Timer'
                    projectLink='https://github.com/DiogoMEng/Pomodoro-Timer'
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

                {/* projeto 4 */}
                <Card
                    projectName='Form Validator'
                    projectLink='https://github.com/DiogoMEng/formValidator'
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