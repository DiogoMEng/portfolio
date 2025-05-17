
import React, { useState } from 'react';
import { Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  stack: string[];
  github: string;
  image: string;
}

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'API RESTful',
      description: 'Segurança e eficiência no gerenciamento de cadastros de alunos. Este projeto simula um sistema de cadastro com MariaDB, usando uma API organizada pela arquitetura MVC. Ele permite criar, ler, atualizar e excluir registros, com rotas protegidas que garantem acesso apenas a usuários autenticados, focando em escalabilidade e fácil manutenção.',
      stack: ['JavaScript', 'Node.js', 'Express', 'MySQL', 'Sequelize', 'JsonWebToken', 'EsLint'],
      github: 'https://github.com/DiogoMEng/projetos-javascript/tree/main/api_rest',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'Agenda Contatos',
      description: 'Agenda de contatos que permite armazenar, gerenciar e organizar informações de forma prática. Usuários podem adicionar, editar e remover contatos com facilidade, mantendo dados como nome, telefone, e-mail e endereço sempre atualizados. A interface intuitiva garante acesso rápido e eficiente aos seus contatos.',
      stack: ['JavaScript', 'Node.js', 'Express', 'MongoDB', 'EJS', 'Validator', 'Webpack'],
      github: 'https://github.com/DiogoMEng/projetos-javascript/tree/main/agendaContatos',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'Toughts',
      description: 'O projeto desenvolvido duranto o cursor da Udemy busca apresentar um blog onde usuários podem compartilhar seus pensamentos. A criação do projeto buscou aplicar os conceitos abordados durante o curso de NodeJS e as principais ferramentes utilizadas em aplicações reais.',
      stack: ['JavaScript', 'Node.js', 'Express', 'MySQL', 'Sequelize'],
      github: 'https://github.com/DiogoMEng/projetos-javascript/tree/main/Tougths',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      title: 'Finances',
      description: 'Aplicação web de gestão financeira que facilita o controle de receitas e despesas, com relatórios claros para uma visão completa dos gastos e saldo. Ideal para organizar suas finanças e tomar decisões mais inteligentes sobre seu dinheiro.',
      stack: ['TypeScript', 'Node.js', 'Express', 'MySQL', 'Sequelize'],
      github: 'https://github.com/DiogoMEng/projetos-typescript/tree/main/finances',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 5,
      title: 'Validador de Formulários',
      description: 'Validação em tempo real para garantir precisão e segurança. Este validador de formulários, desenvolvido com TypeScript, verifica as entradas do usuário no momento, proporcionando feedback instantâneo e prevenindo erros. A solução assegura dados consistentes e corretos, melhorando a experiência do usuário e a eficiência de sistemas que dependem dessas informações.',
      stack: ['TypeScript', 'Webpack', 'Validator', 'Eslint'],
      github: 'https://github.com/DiogoMEng/projetos-typescript/tree/main/formValidator',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title">Projetos</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Soluções backend que demonstram minhas habilidades em desenvolvimento de software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <h3 className="text-white font-bold text-xl p-4">{project.title}</h3>
                </div>
              </div>
              <div className="p-5 flex-grow flex flex-col">
                <div className="flex-grow">
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.slice(0, 4).map((tech, index) => (
                      <span 
                        key={index} 
                        className="px-2 py-1 text-xs font-medium bg-secondary/10 dark:text-[#fdfdfd] text-[#474747] rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 4 && (
                      <span className="px-2 py-1 text-xs font-medium bg-secondary/10 dark:text-[#fdfdfd] text-[#474747] rounded">
                        +{project.stack.length - 4}
                      </span>
                    )}
                  </div>
                </div>
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:underline mt-2"
                >
                  <Github size={16} />
                  Ver no GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
