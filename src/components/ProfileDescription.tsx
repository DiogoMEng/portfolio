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
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. At illum dignissimos animi hic, enim iusto quo, neque sint minus minima tempore voluptates, quos dolore eum vitae iste ab error illo.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam accusamus consequatur repellat porro? Repellendus inventore quo iste voluptatum, debitis expedita consectetur animi, totam asperiores sapiente explicabo eveniet, praesentium est magni.
                        lorem
                    </p>
                    <div>
                        <a href="https://www.linkedin.com/in/diogo-meng"><img src={socialLinkedin} width={50} height={50} alt="linkedin"/></a>
                        <a className="ml-3" href="https://github.com/DiogoMEng"><img src={socialGithub} width={50} height={50} alt="github"/></a>
                        <a className="ml-3" href="mailto:diogoeng19@gmail.com"><img src={socialEmail} width={50} height={50} alt="github"/></a>
                    </div>
                </div>
                <div>
                    <img src={perfil} width={300} className="float-right m-5" alt="user-perfil"/>
                    <div className="circle rounded-circle bg-light position-relative"></div>
                </div>
            </div>
        </section>
    )
};

export { ProfileDescription };