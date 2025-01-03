import { RiJavascriptFill } from "react-icons/ri"
import { BiLogoTypescript } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import observationPosition from "../../utils/observationPosition";
import { useEffect, useRef, useState } from "react";
import CardSkill from "./CardSkill";
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
          <CardSkill
            nameSkill="JavaScript"
            frameworks={['Node.Js', 'Express.JS', 'NestJS']}
            colorContainer="amber"
          >
            <RiJavascriptFill className={`text-9xl text-white duration-700 group-hover:text-amber-400 ${isVisible ? 'max-md:text-amber-400' : ''}`} />
          </CardSkill>

          {/* TypeScript Skill */}
          <CardSkill
            nameSkill="TypeScript"
            frameworks={['Node.Js', 'Express.JS', 'NestJS']}
            colorContainer="cyan"
          >
            <BiLogoTypescript className={`text-9xl text-white duration-700 group-hover:text-cyan-400 ${isVisible ? 'max-md:text-cyan-400' : ''}`} />
          </CardSkill>
      </div>
    </section>
  )
}

export default MainSkill;