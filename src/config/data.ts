import {ProjectProtocol} from "../interfaces/propCard";

const data: ProjectProtocol[] = [
    {
        projectName: 'Finances',
        projectLink: 'https://github.com/DiogoMEng/projetos-typescript/tree/main/finances',
        description: 'Aplicação web de gestão financeira que facilita o controle de receitas e despesas, com relatórios claros para uma visão completa dos gastos e saldo. Ideal para organizar suas finanças e tomar decisões mais inteligentes sobre seu dinheiro.',
        status: 'Status - Em Aprimoramento',
        technologies: {
            img: [
                "https://skillicons.dev/icons?i=typescript", 
                "https://skillicons.dev/icons?i=nodejs",
                "https://skillicons.dev/icons?i=expressjs",
                "https://skillicons.dev/icons?i=mysql",
                "https://skillicons.dev/icons?i=react",
                "https://skillicons.dev/icons?i=tailwind"
            ],
            alt: ["TypeScript", "NodeJS", "Express", "MySql", "React", "HTML", "Tailwindcss"],
            title: ["TypeScript", "NodeJS", "Express", "MySql", "React", "HTML", "Tailwindcss"]
        },
    },
    {
        projectName: 'Tought',
        projectLink: 'https://github.com/DiogoMEng/projetos-javascript/tree/main/Tougths',
        description: 'O projeto desenvolvido duranto o cursor da Udemy busca apresentar um blog onde usuários podem compartilhar seus pensamentos. A criação do projeto buscou aplicar os conceitos abordados durante o curso de NodeJS e as principais ferramentes utilizadas em aplicações reais.',
        status: 'Status - Finalizado',
        technologies: {
            img: [
                "https://skillicons.dev/icons?i=javascript", 
                "https://skillicons.dev/icons?i=nodejs",
                "https://skillicons.dev/icons?i=expressjs",
                "https://skillicons.dev/icons?i=mysql",
                "https://skillicons.dev/icons?i=sequelize",
                "https://skillicons.dev/icons?i=html",
                "https://skillicons.dev/icons?i=css",
            ],
            alt: ["JavaScript", "NodeJS", "Express", "MySQL", "Sequelize", "HTML", "CSS"],
            title: ["JavaScript", "NodeJS", "Express", "MySQL", "Sequelize", "HTML", "CSS"]
        }
    },
    {
        projectName:'Student Registration',
        projectLink:'https://github.com/DiogoMEng/projetos-javascript/tree/main/api_rest',
        description:'Segurança e eficiência no gerenciamento de cadastros de alunos. Este projeto simula um sistema de cadastro com MariaDB, usando uma API organizada pela arquitetura MVC. Ele permite criar, ler, atualizar e excluir registros, com rotas protegidas que garantem acesso apenas a usuários autenticados, focando em escalabilidade e fácil manutenção.',
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
        projectName: 'Contact Book',
        projectLink: 'https://github.com/DiogoMEng/projetos-javascript/tree/main/agendaContatos',
        description: 'Agenda de contatos que permite armazenar, gerenciar e organizar informações de forma prática. Usuários podem adicionar, editar e remover contatos com facilidade, mantendo dados como nome, telefone, e-mail e endereço sempre atualizados. A interface intuitiva garante acesso rápido e eficiente aos seus contatos.',
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
        projectName: 'Search Astar Dijkstra',
        projectLink: 'https://github.com/DiogoMEng/projetos-typescript/tree/main/search_Astar_Dijkstra',
        description: 'Este projeto é uma ferramenta de visualização de algoritmo de pathfinding criada com Svelte e TypeScript. Ele permite que os usuários visualizem interativamente o algoritmo A* usando três funções heurísticas diferentes (Euclidiana, Manhattan e Diagonal) e o algoritmo Dijkstra. Seja você um aluno aprendendo sobre algoritmos de pathfinding ou um desenvolvedor procurando uma representação visual desses algoritmos, esta ferramenta fornece uma maneira útil de entender e explorar como eles funcionam.',
        status: 'Status - Finalizado',
        technologies: {
            img: [
                "https://skillicons.dev/icons?i=typescript", 
                "https://skillicons.dev/icons?i=svelte",
                "https://skillicons.dev/icons?i=tailwind",
            ],
            alt: ["Typescript", "Svelte", "Tailwind"],
            title: ["Typescript", "Svelte", "Tailwind"]
        },
    },
    {
        projectName:'Form Validator',
        projectLink:'https://github.com/DiogoMEng/projetos-typescript/tree/main/formValidator',
        description:'Validação em tempo real para garantir precisão e segurança. Este validador de formulários, desenvolvido com TypeScript, verifica as entradas do usuário no momento, proporcionando feedback instantâneo e prevenindo erros. A solução assegura dados consistentes e corretos, melhorando a experiência do usuário e a eficiência de sistemas que dependem dessas informações.',
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