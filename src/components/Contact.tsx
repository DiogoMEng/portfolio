
import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, User, MessageSquare, Phone } from 'lucide-react';
import { toast } from "@/hooks/use-toast";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [formErrors, setFormErrors] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateName = (name: string) => {
    const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
    return nameRegex.test(name);
  };
  
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  const validatePhone = (phone: string) => {
    const phoneRegex = /^\+55\s\d{2}\s9\d{8}$/;
    return phoneRegex.test(phone);
  };
  
  const validateSubject = (subject: string) => {
    const subjectRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ0-9\s?!.\-$]+$/;
    return subjectRegex.test(subject);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: '' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors = {
      fullName: !validateName(formData.fullName) ? 'Nome não deve conter números ou caracteres especiais' : '',
      email: !validateEmail(formData.email) ? 'Email inválido' : '',
      phone: !validatePhone(formData.phone) ? 'Formato: +55 DDD 9XXXXXXXX' : '',
      subject: !validateSubject(formData.subject) ? 'Caracteres especiais permitidos: ?!.-$' : '',
      message: formData.message.trim() === '' ? 'Mensagem é obrigatória' : ''
    };
    setFormErrors(errors);

    if (!Object.values(errors).some(error => error)) {
      setIsSubmitting(true);
      try {
        const response = await fetch("https://dinastia-n8n-webhook.zsvbai.easypanel.host/webhook/5ccc81b9-8b9c-43f8-8191-d940e12730d4", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            fullName: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            subject: formData.subject,
            message: formData.message
          })
        });

        if (!response.ok) throw new Error('Falha ao enviar mensagem.');

        toast({
          title: "Mensagem enviada!",
          description: "Sua mensagem foi enviada com sucesso.",
        });

        setFormData({
          fullName: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } catch (error) {
        toast({
          title: "Falha ao enviar mensagem",
          description: "Ocorreu um erro ao enviar sua mensagem. Tente novamente.",
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const inputClasses = "w-full px-4 py-3 rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all";
  const errorClasses = "text-destructive text-sm mt-1";
  
  return (
    <section id="contact" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title">Entre em Contato</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tem uma pergunta ou proposta, ou apenas quer dizer olá? Entre em contato.
          </p>
        </div>
        
        <div className="grid md:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          <div className="md:col-span-5 space-y-8">
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Informações de Contato</h3>
              
              <div className="space-y-4">
                <a href="mailto:diogoeng19@gmail.com" className="flex items-center gap-3 group">
                  <div className="bg-primary/10 text-primary p-3 rounded-md group-hover:bg-primary group-hover:text-white transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <p className="text-muted-foreground">diogoeng19@gmail.com</p>
                  </div>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/diogo-meng" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <div className="bg-primary/10 text-primary p-3 rounded-md group-hover:bg-primary group-hover:text-white transition-colors">
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium">LinkedIn</p>
                    <p className="text-muted-foreground">linkedin.com/in/diogo-meng</p>
                  </div>
                </a>
                
                <a 
                  href="https://github.com/DiogoMEng" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <div className="bg-primary/10 text-primary p-3 rounded-md group-hover:bg-primary group-hover:text-white transition-colors">
                    <Github size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium">GitHub</p>
                    <p className="text-muted-foreground">github.com/DiogoMEng</p>
                  </div>
                </a>
              </div>
            </div>
            
            <a 
              href="https://docs.google.com/document/d/1g9ukbPhRK2xWP2IXXM3TurvuEtr5ybw9byn_zPds5JY/edit?tab=t.0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block bg-primary text-primary-foreground text-center py-3 px-6 rounded-md hover:bg-primary/90 transition-colors"
            >
              Visualizar Currículo
            </a>
          </div>
          
          <div className="md:col-span-7">
            <form onSubmit={handleSubmit} className="bg-card p-6 rounded-lg shadow-sm space-y-6">
              <div>
                <div className="relative">
                  <User className="absolute left-3 top-3.5 text-muted-foreground" size={20} />
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Nome Completo"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`${inputClasses} pl-10 ${formErrors.fullName ? 'border-destructive' : ''}`}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                {formErrors.fullName && <p className={errorClasses}>{formErrors.fullName}</p>}
              </div>

              <div>
                <div className="relative">
                  <Mail className="absolute left-3 top-3.5 text-muted-foreground" size={20} />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`${inputClasses} pl-10 ${formErrors.email ? 'border-destructive' : ''}`}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                {formErrors.email && <p className={errorClasses}>{formErrors.email}</p>}
              </div>
              
              <div>
                <div className="relative">
                  <Phone className="absolute left-3 top-3.5 text-muted-foreground" size={20} />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Telefone (+55 DDD 9XXXXXXXX)"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`${inputClasses} pl-10 ${formErrors.phone ? 'border-destructive' : ''}`}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                {formErrors.phone && <p className={errorClasses}>{formErrors.phone}</p>}
              </div>

              <div>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3.5 text-muted-foreground" size={20} />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Assunto"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`${inputClasses} pl-10 ${formErrors.subject ? 'border-destructive' : ''}`}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                {formErrors.subject && <p className={errorClasses}>{formErrors.subject}</p>}
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Sua mensagem"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`${inputClasses} ${formErrors.message ? 'border-destructive' : ''}`}
                  required
                  disabled={isSubmitting}
                ></textarea>
                {formErrors.message && <p className={errorClasses}>{formErrors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-md hover:bg-primary/90 transition-colors font-medium"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

