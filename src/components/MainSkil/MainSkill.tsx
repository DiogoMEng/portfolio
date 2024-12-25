import { RiJavascriptFill } from "react-icons/ri"
import { BiLogoTypescript } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import observationPosition from "../../utils/observationPosition";
import { useEffect, useRef, useState } from "react";
import Skill from "./Skill";
import ButtonGithub from "./ButtonGithub";

const MainSkill = ():JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(observationPosition(setIsVisible, cardRef, 0.7), []);

  return (
    <section className="p-5">
      <h1 className="text-4xl text-center font-bold max-sm:text-lg">
        <span className="p-2 bg-[#0b097e] border-l-8 border-b-4 rounded-md">Principais Linguagens de Programação</span>
      </h1>
      <div className="flex gap-5 w-3/4 mx-auto mt-10 justify-center max-sm:block max-sm:w-full *:max-sm:w-full">

          {/* Javascript skill */}
          <div
            ref={cardRef}
            className={
              `bg-[#0b097e] w-1/3 p-5 rounded-md border-2 duration-700 hover:border-amber-400 *:hover:text-amber-400 group max-md:mb-5 ${isVisible ? 'max-md:border-amber-400 max-md:*:text-amber-400' : ''}`
            }
            style={{
              transition: 'all 0.5s ease-in-out'
            }}
          >
            <Skill nameSkill="JavaScript" frameworks={['Node.Js', 'Express.JS', 'NestJS']}>
              <RiJavascriptFill className={`text-9xl text-white duration-700 group-hover:text-amber-400 ${isVisible ? 'max-md:text-amber-400' : ''}`}/>
            </Skill>

            {/* button - redireciona para projetos */}
            <ButtonGithub style={`group-hover:bg-amber-400 ${isVisible ? `max-md:bg-amber-400` : ''}`}>
              <FaGithub className={`ml-3 text-[#0b097e] text-2xl group-hover:animate-bounce ${isVisible ? 'animate-bounce' : ''}`}/>
            </ButtonGithub>
          </div>

          {/* TypeScript Skill */}
          <div
            ref={cardRef} 
            className={
              `bg-[#0b097e] w-1/3 p-5 rounded-md border-2 duration-700 hover:border-cyan-400 *:hover:text-cyan-400 group max-md:mb-5 ${isVisible ? 'max-md:border-cyan-400 max-md:*:text-cyan-400' : ''}`
            }
            style={{
              transition: 'all 0.5s ease-in-out'
            }}
          >
            <Skill nameSkill="TypeScript" frameworks={['Node.Js', 'Express.JS', 'NestJS']}>
              <BiLogoTypescript className={`text-9xl text-white duration-700 group-hover:text-cyan-400 ${isVisible ? 'max-md:text-cyan-400' : ''}`} />
            </Skill>

            {/* button - redireciona para projetos */}
            <ButtonGithub style={`group-hover:bg-cyan-400 ${isVisible ? `max-md:bg-cyan-400` : ''}`}>
              <FaGithub className={`ml-3 text-[#0b097e] text-2xl group-hover:animate-bounce ${isVisible ? 'animate-bounce' : ''}`}/>
            </ButtonGithub>
          </div>
      </div>
    </section>
  )
}

export default MainSkill;