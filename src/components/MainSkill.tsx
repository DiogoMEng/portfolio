import { RiJavascriptFill } from "react-icons/ri"
import { BiLogoTypescript } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import observationPosition from "../utils/observationPosition";
import { useEffect, useRef, useState } from "react";
import { SkillProtocol } from "../interfaces/propCard";

const CardSkill = (prop: SkillProtocol):JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(observationPosition(setIsVisible, cardRef), []);

  return (
      <div
        ref={cardRef} 
        className={
          `bg-[#0b097e] w-1/3 p-5 rounded-md border-2 duration-700 hover:border-${prop.generalColor}-400 group max-md:mb-5 ${isVisible ? `max-md:border-${prop.generalColor}-400` : ''}`
        }
        style={{
          transition: 'all 0.5s ease-in-out'
        }}
      >
        <div className="flex items-center">
          {prop.children}
          <span className={`text-4xl font-bold duration-700 group-hover:text-${prop.generalColor}-400`}>{prop.nameSkill}</span>
        </div>
        <div className={`mt-3 duration-700 group-hover:text-${prop.generalColor}-400`}>
          <span className="border-b-2 font-bold text-2xl">Frameworks Principais:</span>
          <ul className="mb-3 *:text-xl">
            <li className="mt-3 ml-8 list-disc">Node.js</li>
            <li className="ml-8 list-disc">Express.js</li>
            <li className="ml-8 list-disc">NestJS</li>
          </ul>
        </div>
        <div className={`bg-slate-100 w-32 mt-5 px-4 py-2 rounded-md text-xl items-center duration-700 group-hover:bg-${prop.generalColor}-400`}>
          <a className="flex text-[#0b097e]" href="https://github.com/DiogoMEng/projetos-javascript">Github <FaGithub className="ml-3 text-[#0b097e] text-2xl group-hover:animate-bounce"/></a>
        </div>
      </div>
  )
}

const MainSkill = ():JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(observationPosition(setIsVisible, cardRef), []);

  return (
    <section className="p-5">
      <div className="flex gap-5 w-3/4 mx-auto mt-10 justify-center max-sm:block max-sm:w-full *:max-sm:w-full">

          {/* Javascript skill */}
          <CardSkill
            nameSkill="JavaScript"
            generalColor="amber"
          >
            <RiJavascriptFill className="text-9xl text-white duration-700 group-hover:text-amber-400" />
          </CardSkill>
          {/* <div
            ref={cardRef} 
            className={
              `bg-[#0b097e] w-1/3 p-5 rounded-md border-2 duration-700 hover:border-amber-400 group max-md:mb-5 ${isVisible ? 'max-md:border-amber-400' : ''}`
            }
            style={{
              transition: 'all 0.5s ease-in-out'
            }}
          >
            <div className="flex items-center">
              <RiJavascriptFill className="text-9xl text-white duration-700 group-hover:text-amber-400" />
              <span className="text-4xl font-bold duration-700 group-hover:text-amber-400">JavaScript</span>
            </div>
            <div className="mt-3 duration-700 group-hover:text-amber-400">
              <span className="border-b-2 font-bold text-2xl">Frameworks Principais:</span>
              <ul className="mb-3 *:text-xl">
                <li className="mt-3 ml-8 list-disc">Node.js</li>
                <li className="ml-8 list-disc">Express.js</li>
                <li className="ml-8 list-disc">NestJS</li>
              </ul>
            </div>
            <div className="bg-slate-100 w-32 mt-5 px-4 py-2 rounded-md text-xl items-center duration-700 group-hover:bg-amber-400">
              <a className="flex text-[#0b097e]" href="https://github.com/DiogoMEng/projetos-javascript">Github <FaGithub className="ml-3 text-[#0b097e] text-2xl group-hover:animate-bounce"/></a>
            </div>
          </div> */}

          {/* TypeScript Skill */}
          <CardSkill
            nameSkill="TypeScript"
            generalColor="cyan"
          >
            <BiLogoTypescript className="text-9xl text-white duration-700 group-hover:text-cyan-400" />
          </CardSkill>
          {/* <div className="bg-[#0b097e] w-1/3 p-5 rounded-md border-2 duration-700 hover:border-cyan-400 group">
            <div className="flex items-center">
              <BiLogoTypescript className="text-9xl text-white duration-700 group-hover:text-cyan-400" />
              <span className="text-4xl font-bold duration-700 group-hover:text-cyan-400">TypeScript</span>
            </div>
            <div className="mt-3 duration-700 group-hover:text-cyan-400">
              <span className="border-b-2 font-bold text-2xl">Frameworks Principais:</span>
              <ul className="mb-3 *:text-xl">
                <li className="mt-3 ml-8 list-disc">Node.js</li>
                <li className="ml-8 list-disc">Express.js</li>
                <li className="ml-8 list-disc">NestJS</li>
              </ul>
            </div>
            <div className="bg-slate-100 w-32 mt-5 px-4 py-2 rounded-md text-xl items-center duration-700 group-hover:bg-cyan-400">
              <a className="flex text-[#0b097e]" href="https://github.com/DiogoMEng/projetos-javascript">Github <FaGithub className="ml-3 text-[#0b097e] text-2xl group-hover:animate-bounce"/></a>
            </div>
          </div> */}
      </div>
    </section>
  )
}

export default MainSkill;