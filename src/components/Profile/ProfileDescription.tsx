import '../../static/css/profileDescription.css'

import perfil from '../../static/img/perfil.jpeg';

const ProfileDescription = (): JSX.Element => {
    return(
        <section className="user-section container">

            <article className="container d-flex mt-3">

                {/* descrição de perfil */}
                <div className="w-100 m-5 d-flex flex-column align-items-center text-justify">
                    <h2>Olá, me chamo Diogo Mello</h2>
                    <h6 className="p-1 mb-3 bg-light text-dark border rounded">Desenvolvedor Back-end</h6>
                    <p>
                    Tenho 22 anos e estou atualmente cursando Engenharia da Computação. Desde os primeiros semestres da faculdade, fui cativado pelo mundo da programação e do desenvolvimento de software. Minha paixão por desenvolvimento começou com os primeiros códigos em C e C++, e desde então venho explorando diferentes linguagens e tecnologias. A capacidade de criar sistemas robustos e escaláveis que impulsionam as aplicações para frente é algo que me fascina profundamente no desenvolvimento Back-end. Ao longo dos anos, venho aprimorando as minhas habilidades técnicas e desenvolvendo uma compreensão sólida dos princípios fundamentais de engenharia de software. Estou constantemente buscando aprender e me desafiar, sempre em busca de novos conhecimentos e habilidades que possam contribuir para o meu crescimento profissional.
                    </p>
                    
                    {/* redes sociais */}
                    <div>
                        <a href="https://www.linkedin.com/in/diogo-meng"><img src="https://skillicons.dev/icons?i=linkedin" width={50} height={50} alt="Linkedin" title="Linkedin"/></a>
                        <a className="ml-3" href="https://github.com/DiogoMEng"><img src="https://skillicons.dev/icons?i=github" width={50} height={50} alt="Github" title="Github"/></a>
                        <a className="ml-3" href="mailto:diogoeng19@gmail.com"><img src="https://skillicons.dev/icons?i=gmail" width={50} height={50} alt="Gmail" title="Gmail"/></a>
                    </div>
                </div>

                {/* imagem de perfil */}
                <div className='mt-5'>
                    <img src={perfil} width={300} height={350} className="float-right rounded-circle m-5" alt="user-perfil"/>
                    <div className="circle rounded-circle bg-light position-relative"></div>
                </div>
            </article>
        </section>
    )
};

export { ProfileDescription };