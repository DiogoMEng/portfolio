
import React, { useState } from 'react';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  description: string;
  skills: Skill[];
}

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('backend');

  const categories: Record<string, SkillCategory> = {
    backend: {
      title: 'Backend',
      description: 'Desenvolvimento de APIs robustas e eficientes, com foco em padrões arquiteturais, segurança e escalabilidade.',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'APIs RESTful', level: 95 },
        { name: 'GraphQL', level: 80 },
        { name: 'Design Patterns', level: 85 },
        { name: 'Arquitetura de Software', level: 90 },
        { name: 'Testes Automatizados', level: 85 },
        { name: 'Versionamento de Código', level: 90 },
        { name: 'Segurança de APIs', level: 85 },
        { name: 'Boas Práticas de Código', level: 90 },
      ]
    },
    database: {
      title: 'Banco de Dados',
      description: 'Modelagem e otimização de bancos de dados relacionais e não-relacionais, focando em performance e integridade.',
      skills: [
        { name: 'SQL Avançado', level: 90 },
        { name: 'Modelagem de Dados', level: 85 },
        { name: 'NoSQL', level: 80 },
        { name: 'Query Performance', level: 85 },
        { name: 'Migrations e Versionamento', level: 90 },
        { name: 'Normalização/Desnormalização', level: 85 },
      ]
    },
    devops: {
      title: 'DevOps',
      description: 'Implementação de pipelines CI/CD, conteinerização e gerenciamento de infraestrutura em ambientes de nuvem.',
      skills: [
        { name: 'Docker', level: 90 },
        { name: 'CI/CD', level: 85 },
        { name: 'Gerenciamento de Ambientes', level: 80 },
        { name: 'Gerenciamento de Servidores', level: 75 },
        { name: 'AWS', level: 85 },
        { name: 'GCP', level: 80 },
      ]
    }
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title">Habilidades Técnicas</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conhecimentos e tecnologias que domino para desenvolver soluções backend robustas e escaláveis.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-secondary/5 rounded-lg p-1">
            {Object.keys(categories).map((key) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  activeCategory === key
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'text-foreground hover:bg-secondary/10'
                }`}
              >
                {categories[key].title}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="bg-card rounded-xl p-6 shadow-sm">
            <h3 className="text-2xl font-bold mb-2 text-primary">
              {categories[activeCategory].title}
            </h3>
            <p className="text-muted-foreground mb-8">
              {categories[activeCategory].description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              {categories[activeCategory].skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium">{skill.name}</h4>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-secondary/20 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full transform origin-left transition-all duration-1000" 
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${index * 100}ms` 
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
