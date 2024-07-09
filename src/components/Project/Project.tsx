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
                    description='agenda de contatos que permite armazenar, gerenciar e organizar informações de contatos de cada usuário. Com esta agenda, os usuários podem adicionar, editar e remover contatos facilmente, além de incluir detalhes importantes como nome, telefone, e-mail e endereço. A interface é intuitiva e amigável, garantindo que todos possam utilizar a ferramenta sem dificuldades. Meu objetivo é criar uma solução prática e eficiente para que as pessoas possam manter seus contatos sempre atualizados e acessíveis, facilitando a comunicação e o gerenciamento das suas redes de relacionamento.'
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
                
                {/* projeto 2 */}
                <Card
                    projectName='Student Registration'
                    projectLink='https://github.com/DiogoMEng/student-registration'
                    description='O projeto simula um sistema de cadastro simples, onde posso salvar os dados dos alunos em um banco de dados MariaDB. A API criada utiliza a arquitetura MVC como base, o que proporciona uma melhor organização e padronização do código, além de facilitar futuras manutenções e melhorias. A API oferece funcionalidades específicas para gerenciar contas cadastradas, garantindo que somente usuários autenticados possam acessar e realizar operações em rotas protegidas. Isso inclui a criação, leitura, atualização e exclusão de registros de alunos. Com essa estrutura, busco garantir a segurança e a eficiência do sistema, facilitando o gerenciamento e a escalabilidade das funcionalidades.'
                    status='Status - Finalizado'
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
                    description='Este projeto inovador que utiliza a técnica de Pomodoro para aumentar a produtividade e melhorar a gestão do tempo. A técnica de Pomodoro é um método popular de gerenciamento do tempo que alterna períodos de trabalho focado com pequenos intervalos de descanso, ajudando a manter a concentração e evitar o cansaço mental.'
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
                    description='O validador de formulários, projetado para assegurar que todas as entradas do usuário sejam verificadas e validadas de forma eficaz. Utilizando TypeScript, manipulo o DOM para implementar as validações necessárias em tempo real, garantindo que os dados inseridos pelos usuários sejam precisos e seguros antes de serem enviados. Este projeto não apenas melhora a experiência do usuário ao fornecer feedback instantâneo sobre a validade das entradas, mas também ajuda a evitar erros comuns de preenchimento de formulários. Ao integrar esta ferramenta com diversas aplicações, posso garantir que os dados coletados sejam consistentes e corretos, facilitando o processo de coleta de informações e aumentando a eficiência dos sistemas que dependem desses dados.'
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