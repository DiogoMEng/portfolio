
import React from 'react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title">Formação Acadêmica</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Minha jornada educacional na área de tecnologia.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-full md:w-32 h-32 flex items-center justify-center bg-primary/10 rounded-full p-4">
                <div className="text-center">
                  <span className="block text-2xl font-bold text-primary">2020</span>
                  <span className="text-sm text-muted-foreground">2026</span>
                </div>
              </div>
              
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold">Engenharia da Computação</h3>
                <p className="text-primary font-medium mb-2">Centro Universitário do Estado do Pará</p>
                <p className="text-muted-foreground">
                  Formação que uniu fundamentos de computação e práticas de engenharia de software, com foco em desenvolvimento backend. Durante o curso, participei de projetos que transformaram problemas reais em soluções digitais eficientes, consolidando minha paixão por criar sistemas robustos e escaláveis.
                </p>
                
                <div className="mt-4 inline-flex items-center gap-x-1.5 rounded-full px-3 py-1 text-sm font-medium bg-primary/20 dark:text-[#fdfdfd] text-black">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  Em andamento
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
