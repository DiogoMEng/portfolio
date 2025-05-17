
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Desenvolvedor Backend';
  const typingSpeed = 100;
  const typingDelay = 1500;

  useEffect(() => {
    let currentIndex = 0;
    let typingTimeout: number;

    const typeText = () => {
      if (currentIndex < fullText.length) {
        setTypedText(fullText.substring(0, currentIndex + 1));
        currentIndex++;
        typingTimeout = window.setTimeout(typeText, typingSpeed);
      } else {
        typingTimeout = window.setTimeout(resetTyping, typingDelay);
      }
    };

    const resetTyping = () => {
      let eraseTimeout: number;
      const eraseText = () => {
        if (currentIndex > 0) {
          setTypedText(fullText.substring(0, currentIndex - 1));
          currentIndex--;
          eraseTimeout = window.setTimeout(eraseText, typingSpeed / 2);
        } else {
          typingTimeout = window.setTimeout(typeText, typingDelay / 2);
        }
      };
      eraseTimeout = window.setTimeout(eraseText, 100);
    };

    typingTimeout = window.setTimeout(typeText, typingDelay);

    return () => {
      clearTimeout(typingTimeout);
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-secondary/5 z-0"></div>
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'grayscale(100%)',
        }}
      ></div>
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in">
            <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
              Expertise em Backend
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Diogo Dias Mello
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-primary typing-cursor">
              {typedText}
            </h2>
            <p className="text-muted-foreground max-w-lg">
              Transformando lógica em soluções robustas. Especializado em arquiteturas
              escaláveis, APIs de alto desempenho e bancos de dados otimizados. Meu foco
              é construir a espinha dorsal de aplicações que suportam milhares de usuários,
              mantendo segurança e eficiência.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#contact"
                className="px-6 py-3 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors font-medium"
              >
                Entre em contato
              </a>
              <a
                href="#projects"
                className="px-6 py-3 bg-secondary text-secondary-foreground rounded hover:bg-secondary/90 transition-colors font-medium"
              >
                Ver projetos
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative w-full aspect-square max-w-md mx-auto animate-scale">
              <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80"
                  alt="Código de desenvolvimento backend"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-full flex items-center justify-center text-white font-bold animate-pulse-slow">
                <span className="text-center">Backend Dev</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Role para baixo</span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
