import PropCard from "../interfaces/propCard";

const data: PropCard[] = [
    {
        projectName: 'Finances',
        projectLink: 'https://github.com/DiogoMEng/projetos-typescript/tree/main/finances',
        description: 'Aplicação web de gestão financeira proporciona uma maneira simples e eficiente de controlar suas finanças pessoais. Com ela, você pode facilmente inserir suas receitas e despesas, visualizar relatórios claros sobre seus gastos e saldo, e fazer alterações nos dados sempre que necessário. É a ferramenta ideal para manter suas finanças organizadas e tomar decisões mais informadas sobre seu dinheiro.',
        status: 'Status - Em Aprimoramento',
        technologies: {
            img: [
                "https://skillicons.dev/icons?i=typescript", 
                "https://skillicons.dev/icons?i=nodejs",
                "https://skillicons.dev/icons?i=expressjs",
                "https://skillicons.dev/icons?i=mysql",
                "https://skillicons.dev/icons?i=react",
                "https://skillicons.dev/icons?i=html",
                "https://skillicons.dev/icons?i=tailwind"
            ],
            alt: ["TypeScript", "NodeJS", "Express", "MySql", "React", "HTML", "Tailwindcss"],
            title: ["TypeScript", "NodeJS", "Express", "MySql", "React", "HTML", "Tailwindcss"]
        },
    },
    {
        projectName: 'Contact Book',
        projectLink: 'https://github.com/DiogoMEng/projetos-javascript/tree/main/agendaContatos',
        description: 'agenda de contatos que permite armazenar, gerenciar e organizar informações de contatos de cada usuário. Com esta agenda, os usuários podem adicionar, editar e remover contatos facilmente, além de incluir detalhes importantes como nome, telefone, e-mail e endereço. A interface é intuitiva e amigável, garantindo que todos possam utilizar a ferramenta sem dificuldades. Meu objetivo é criar uma solução prática e eficiente para que as pessoas possam manter seus contatos sempre atualizados e acessíveis, facilitando a comunicação e o gerenciamento das suas redes de relacionamento.',
        status: 'Status - Finalizado',
        technologies: {
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
        },
    },
    {
        projectName:'Student Registration',
        projectLink:'https://github.com/DiogoMEng/projetos-javascript/tree/main/api_rest',
        description:'O projeto simula um sistema de cadastro simples, onde posso salvar os dados dos alunos em um banco de dados MariaDB. A API criada utiliza a arquitetura MVC como base, o que proporciona uma melhor organização e padronização do código, além de facilitar futuras manutenções e melhorias. A API oferece funcionalidades específicas para gerenciar contas cadastradas, garantindo que somente usuários autenticados possam acessar e realizar operações em rotas protegidas. Isso inclui a criação, leitura, atualização e exclusão de registros de alunos. Com essa estrutura, busco garantir a segurança e a eficiência do sistema, facilitando o gerenciamento e a escalabilidade das funcionalidades.',
        status:'Status - Finalizado',
        technologies:{
            img: [
                "https://skillicons.dev/icons?i=javascript", 
                "https://skillicons.dev/icons?i=nodejs",
                "https://skillicons.dev/icons?i=expressjs",
                "https://skillicons.dev/icons?i=sequelize",
                "https://skillicons.dev/icons?i=mysql",
            ],
            alt: ["JavaScript", "NodeJS", "Express", "Sequelize", "MySQL"],
            title: ["Javascript", "NodeJS", "Express", "Sequelize", "MySQL"]
        }
    },
    {
        projectName:'Form Validator',
        projectLink:'https://github.com/DiogoMEng/projetos-typescript/tree/main/formValidator',
        description:'O validador de formulários, projetado para assegurar que todas as entradas do usuário sejam verificadas e validadas de forma eficaz. Utilizando TypeScript, manipulo o DOM para implementar as validações necessárias em tempo real, garantindo que os dados inseridos pelos usuários sejam precisos e seguros antes de serem enviados. Este projeto não apenas melhora a experiência do usuário ao fornecer feedback instantâneo sobre a validade das entradas, mas também ajuda a evitar erros comuns de preenchimento de formulários. Ao integrar esta ferramenta com diversas aplicações, posso garantir que os dados coletados sejam consistentes e corretos, facilitando o processo de coleta de informações e aumentando a eficiência dos sistemas que dependem desses dados.',
        status:'Status - Finalizado',
        technologies:{
            img: [
                "https://skillicons.dev/icons?i=typescript", 
                "https://skillicons.dev/icons?i=html",
                "https://skillicons.dev/icons?i=css"
            ],
            alt: ["Typescript", "HTML", "CSS"],
            title: ["Typescript", "HTML", "CSS"]
        }
    }
]

export default data;