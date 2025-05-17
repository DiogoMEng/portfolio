
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Diogo Dias Mello</h3>
            <p className="mb-4 text-secondary-foreground/80">
              Desenvolvedor Backend especializado em criar soluções eficientes, escaláveis e seguras.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/DiogoMEng" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary-foreground/80 hover:text-primary transition-colors"
              >
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/diogo-meng" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary-foreground/80 hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a 
                href="mailto:diogoeng19@gmail.com"
                className="text-secondary-foreground/80 hover:text-primary transition-colors"
              >
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-secondary-foreground/80 hover:text-primary transition-colors">Início</a>
              </li>
              <li>
                <a href="#skills" className="text-secondary-foreground/80 hover:text-primary transition-colors">Habilidades</a>
              </li>
              <li>
                <a href="#projects" className="text-secondary-foreground/80 hover:text-primary transition-colors">Projetos</a>
              </li>
              <li>
                <a href="#education" className="text-secondary-foreground/80 hover:text-primary transition-colors">Formação</a>
              </li>
              <li>
                <a href="#contact" className="text-secondary-foreground/80 hover:text-primary transition-colors">Contato</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-primary" />
                <a href="mailto:diogoeng19@gmail.com" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  diogoeng19@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Linkedin size={16} className="text-primary" />
                <a href="https://www.linkedin.com/in/diogo-meng" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  linkedin.com/in/diogo-meng
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-secondary-foreground/10 mt-8 pt-6 text-center">
          <p className="text-secondary-foreground/60 text-sm">
            © {new Date().getFullYear()} Diogo Dias Mello. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
