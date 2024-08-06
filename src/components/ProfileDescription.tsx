import { useEffect, useState } from 'react';
import perfil from '../assets/img/perfil.png';

const ProfileDescription = (): JSX.Element => {
    const [knowMore, setKnowMore] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const currentData = new Date();

    function handleKnowMoreToggle (): void {
        
        setKnowMore(!knowMore);

    }

    useEffect(() => {

        const handleResize = (): void => {
            setIsSmallScreen(window.innerWidth <= 768);
        }

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }

    }, []);

    return (
        <section className="w-full py-10">

            <article className="flex mx-auto w-9/12 p-5 bg-[#0b097e] rounded-md items-center justify-items-center max-md:grid max-md:w-10/12">

                <img src={perfil} className="w-1/3 max-sm:w-3/4" alt="user-perfil" />
                {/* descrição de perfil */}
                <div className="w-2/3 max-md:w-5/6">
                    <h2 className="text-3xl text-center font-bold">Olá, me chamo Diogo Mello</h2>
                    <h3 className="text-center"><span className="text-xl inline-block mb-3 border-solid border-b-2">Desenvolvedor Back-end</span></h3>
                    <p className="text-justify">
                        Tenho {currentData.getFullYear() - 2002} anos e estou atualmente cursando Engenharia da Computação. Desde os primeiros semestres da faculdade, fui cativado pelo mundo da programação e do desenvolvimento de software. Minha paixão por desenvolvimento começou com os primeiros códigos em C e C++, e desde então venho explorando diferentes linguagens e tecnologias. {(!isSmallScreen || knowMore) && (
                            <>
                                A capacidade de criar sistemas robustos e escaláveis que impulsionam as aplicações para frente é algo que me fascina profundamente no desenvolvimento Back-end. Ao longo dos anos, venho aprimorando as minhas habilidades técnicas e desenvolvendo uma compreensão sólida dos princípios fundamentais de engenharia de software. Estou constantemente buscando aprender e me desafiar, sempre em busca de novos conhecimentos e habilidades que possam contribuir para o meu crescimento profissional.  
                            </>
                        )}
                    </p>
                    {isSmallScreen && (
                        <button className='mb-4 font-bold duration-75 hover:border-b-2 hover:border-solid' onClick={handleKnowMoreToggle}>
                            {knowMore ? 'Mostrar menos' : 'Mostrar mais'}
                        </button>
                    )}

                    {/* redes sociais */}
                    <div className="flex justify-center">
                        <a href="https://www.linkedin.com/in/diogo-meng"><img src="https://skillicons.dev/icons?i=linkedin" width={50} height={50} alt="Linkedin" title="Linkedin" /></a>
                        <a className="ml-3" href="https://github.com/DiogoMEng"><img src="https://skillicons.dev/icons?i=github" width={50} height={50} alt="Github" title="Github" /></a>
                    </div>
                </div>

            </article>
        </section>
    )
};

export { ProfileDescription };