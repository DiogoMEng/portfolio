import { RiJavascriptFill } from "react-icons/ri"
import { BiLogoTypescript } from "react-icons/bi";
import observationPosition from "../../utils/observationPosition";
import { useEffect, useRef, useState } from "react";
import CardSkill from "./CardSkill";

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
            colorContainer="border-amber-400 *:text-amber-400"
            colorButton="bg-amber-400"
            link="https://github.com/DiogoMEng/projetos-javascript"
          >
            <RiJavascriptFill className={`text-9xl text-amber-400`} />
          </CardSkill>

          {/* TypeScript Skill */}
          <CardSkill
            nameSkill="TypeScript"
            frameworks={['Node.Js', 'Express.JS', 'NestJS']}
            colorContainer="border-cyan-400 *:text-cyan-400"
            colorButton="bg-cyan-400"
            link="https://github.com/DiogoMEng/projetos-typescript"
          >
            <BiLogoTypescript className={`text-9xl text-cyan-400`} />
          </CardSkill>
      </div>
    </section>
  )
}

export default MainSkill;