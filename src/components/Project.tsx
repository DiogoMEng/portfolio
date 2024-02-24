import '../static/css/project.css';

import iconContactBook from '../static/img/contact-book.png';
import iconStudentRegistration from '../static/img/student-registration.png';
import iconPomodoroTimer from '../static/img/pomodoro-timer.png';
import iconFormValidator from '../static/img/form-validator.png';

const Project = (): JSX.Element => {
    return(
        <section id="project" className="container-sm d-flex flex-column mt-5">
            <div className="background-projects"></div>
            <h1 className="d-flex justify-content-center">Projetos</h1>
            <div className="d-flex text-dark mt-4">
                <div className="rounded w-50 h-25 bg-light ml-5 p-3">
                    <div className="d-flex align-items-center">
                        <img src={iconContactBook} width={50} height={50} alt="javascript icon"/>
                        <h3 className="ml-3">
                            <a href="https://github.com/DiogoMEng/contactDirectory">Contact Book</a>
                        </h3>
                    </div>
                    <p className="text-justify mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolores iste quam repellendus numquam esse repudiandae non ipsa, illum tempora sequi natus, ut laboriosam ducimus ullam, quisquam aliquid ipsam ipsum.</p>
                    <span className="bg-success p-1 rounded text-light font-weight-bold">Status - Finalizado</span>
                    <h6 className="border-bottom mt-4">Tecnologias</h6>
                    <ul className="skills d-flex position-relative">
                        <li><img src="https://skillicons.dev/icons?i=javascript" width={35} height={35} alt="JavaScript" title="JavaScript"/></li>
                        <li className="ml-2"><img src="https://skillicons.dev/icons?i=nodejs" width={35} height={35} alt="NodeJS" title="NodeJS"/></li>
                        <li className="ml-2"><img src="https://skillicons.dev/icons?i=expressjs" width={35} height={35} alt="Express" title="Express"/></li>
                        <li className="ml-2"><img src="https://skillicons.dev/icons?i=mongodb" width={35} height={35} alt="MongoDB Atlas" title="MongoDB Atlas"/></li>
                        <li className="ml-2"><img src="https://skillicons.dev/icons?i=html" width={35} height={35} alt="HTML" title="HTML"/></li>
                        <li className="ml-2"><img src="https://skillicons.dev/icons?i=css" width={35} height={35} alt="CSS" title="CSS"/></li>
                        <li className="ml-2"><img src="https://skillicons.dev/icons?i=bootstrap" width={35} height={35} alt="Bootstrap" title="Bootstrap"/></li>
                    </ul>
                </div>
                <div className="rounded w-50 bg-light ml-5 mr-5 p-3">
                    <div className="d-flex align-items-center">
                        <img src={iconStudentRegistration} width={50} height={50} alt="javascript icon"/>
                        <h3 className="ml-3">
                            <a href="https://github.com/DiogoMEng/student-registration">Student Registration</a>
                        </h3>
                    </div>
                    <p className="text-justify mt-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet vitae incidunt distinctio, voluptas voluptatum iste numquam repellat id harum eos sequi excepturi omnis totam porro qui mollitia quo consequatur enim.</p>
                    <span className="bg-warning p-1 rounded text-light font-weight-bold">Status - Em Aprimoramento</span>
                    <h6 className="border-bottom mt-4">Tecnologias</h6>
                    <ul className="skills d-flex position-relative">
                    <li><img src="https://skillicons.dev/icons?i=javascript" width={35} height={35} alt="JavaScript" title="JavaScript"/></li>
                        <li className="ml-2"><img src="https://skillicons.dev/icons?i=nodejs" width={35} height={35} alt="NodeJS" title="NodeJS"/></li>
                        <li className="ml-2"><img src="https://skillicons.dev/icons?i=expressjs" width={35} height={35} alt="Express" title="Express"/></li>
                        <li className="ml-2"><img src="https://skillicons.dev/icons?i=sequelize" width={35} height={35} alt="Sequelize" title="Sequelize"/></li>
                        <li className="ml-2"><img src="https://skillicons.dev/icons?i=mysql" width={35} height={35} alt="MySQL" title="MySQL"/></li>
                    </ul>
                </div>
            </div>
            <div className="d-flex text-dark mt-4">
                <div className="rounded w-50 h-25 bg-light ml-5 p-3">
                    <div className="d-flex align-items-center">
                        <img src={iconPomodoroTimer} width={50} height={50} alt="javascript icon"/>
                        <h3 className="ml-3">
                            <a href="https://github.com/DiogoMEng/Pomodoro-Timer">Pomodoro Timer</a>
                        </h3>
                    </div>
                    <p className="text-justify mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolores iste quam repellendus numquam esse repudiandae non ipsa, illum tempora sequi natus, ut laboriosam ducimus ullam, quisquam aliquid ipsam ipsum.</p>
                    <span className="bg-success p-1 rounded text-light font-weight-bold">Status - Finalizado</span>
                    <h6 className="border-bottom mt-4">Tecnologias</h6>
                    <ul className="skills d-flex position-relative">
                        <li><img src="https://skillicons.dev/icons?i=typescript" width={35} height={35} alt="TypeScript" title="TypeScript"/></li>
                        <li className="ml-2"><img src="https://skillicons.dev/icons?i=react" width={35} height={35} alt="React" title="React"/></li>
                        <li className="ml-2"><img src="https://skillicons.dev/icons?i=html" width={35} height={35} alt="HTML" title="HTML"/></li>
                        <li className="ml-2"><img src="https://skillicons.dev/icons?i=css" width={35} height={35} alt="CSS" title="CSS"/></li>
                        <li className="ml-2"><img src="https://skillicons.dev/icons?i=vite" width={35} height={35} title="Vite"/></li>
                    </ul>
                </div>
                <div className="rounded w-50 bg-light ml-5 mr-5 p-3">
                    <div className="d-flex align-items-center">
                        <img src={iconFormValidator} width={50} height={50} alt="javascript icon"/>
                        <h3 className="ml-3">
                            <a href="https://github.com/DiogoMEng/formValidator">Form Validator</a>
                        </h3>
                    </div>
                    <p className="text-justify mt-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet vitae incidunt distinctio, voluptas voluptatum iste numquam repellat id harum eos sequi excepturi omnis totam porro qui mollitia quo consequatur enim.</p>
                    <span className="bg-success p-1 rounded text-light font-weight-bold">Status - Finalizado</span>
                    <h6 className="border-bottom mt-4">Tecnologias</h6>
                    <ul className="skills d-flex position-relative">
                        <li><img src="https://skillicons.dev/icons?i=typescript" width={35} height={35} alt="TypeScript" title="TypeScript"/></li>
                        <li className="ml-2"><img src="https://skillicons.dev/icons?i=html" width={35} height={35} alt="HTML" title="HTML"/></li>
                        <li className="ml-2"><img src="https://skillicons.dev/icons?i=css" width={35} height={35} alt="CSS" title="CSS"/></li>
                    </ul>
                </div>
            </div>
        </section>
    )
};

export { Project };