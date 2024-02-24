import '../static/css/profileDescription.css'

import perfil from '../static/img/perfil.png';
import socialLinkedin from '../static/img/social-linkedin.png';
import socialGithub from '../static/img/social-github.png';
import socialEmail from '../static/img/sociel-email.png';

const ProfileDescription = (): JSX.Element => {
    return(
        <section className="user-section container">
            <div className="container d-flex mt-3">
                <div className="w-100 m-5 d-flex flex-column align-items-center text-justify">
                    <h2>Olá, me chamo Diogo Mello</h2>
                    <h6 className="p-1 mb-3 bg-light text-dark border rounded">Desenvolvedor Back-end</h6>
                    <p>
                    Tenho 22 anos e estou atualmente cursando Engenharia da Computação. Desde os primeiros semestres da faculdade, fui cativado pelo mundo da programação e do desenvolvimento de software. Minha paixão por desenvolvimento começou com os primeiros códigos em C e C++, e desde então venho explorando diferentes linguagens e tecnologias. A capacidade de criar sistemas robustos e escaláveis que impulsionam as aplicações para frente é algo que me fascina profundamente no desenvolvimento Back-end. Ao longo dos anos, venho aprimorando as minhas habilidades técnicas e desenvolvendo uma compreensão sólida dos princípios fundamentais de engenharia de software. Estou constantemente buscando aprender e me desafiar, sempre em busca de novos conhecimentos e habilidades que possam contribuir para o meu crescimento profissional.
                    </p>
                    <div>
                        <a href="https://www.linkedin.com/in/diogo-meng"><img src={socialLinkedin} width={50} height={50} alt="linkedin"/></a>
                        <a className="ml-3" href="https://github.com/DiogoMEng"><img src={socialGithub} width={50} height={50} alt="github"/></a>
                        <a className="ml-3" href="mailto:diogoeng19@gmail.com"><img src={socialEmail} width={50} height={50} alt="github"/></a>
                    </div>
                </div>
                <div className='mt-5'>
                    <img src={perfil} width={300} className="float-right m-5" alt="user-perfil"/>
                    <div className="circle rounded-circle bg-light position-relative"></div>
                </div>
            </div>
        </section>
    )
};

export { ProfileDescription };