import { RiJavascriptFill } from "react-icons/ri"
import { BiLogoTypescript } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import observationPosition from "../utils/observationPosition";

const MainSkill = ():JSX.Element => {
  return (
    <section className="p-5">
      <h1 className="text-4xl text-center font-bold max-sm:text-lg">
        <span className="p-2 bg-[#0b097e] border-l-8 border-b-4 rounded-md">Principais Linguagens de Programação</span>
      </h1>
      <div className="flex gap-5 w-3/4 mx-auto mt-10 justify-center max-sm:block max-sm:w-full *:max-sm:w-full">

          {/* Javascript skill */}
          <div className="bg-[#0b097e] w-1/3 p-5 rounded-md border-2 duration-700 hover:border-amber-400 group max-sm:mb-5">
            <div className="flex items-center">
              <RiJavascriptFill className="text-9xl text-white duration-700 group-hover:text-amber-400" />
              <span className="text-4xl font-bold duration-700 group-hover:text-amber-400">JavaScript</span>
            </div>
            <div className="mt-3 duration-700 group-hover:text-amber-400">
              <span className="border-b-2 font-bold text-2xl">Habilidades em:</span>
              <ul className="mb-3 *:text-xl">
                <li className="mt-3 ml-8 list-disc">Desenvolvimento Backend</li>
                <li className="ml-8 list-disc">Desenvolvimento Frontend Web</li>
              </ul>
              <span className="mt-5 border-b-2 font-bold text-2xl">Frameworks:</span>
              <ul className="mb-3 *:text-xl">
                <li className="mt-3 ml-8 list-disc">NodeJS</li>
                <li className="ml-8 list-disc">React</li>
              </ul>
            </div>
            <div className="bg-slate-100 w-32 mt-5 px-4 py-2 rounded-md text-xl items-center duration-700 group-hover:bg-amber-400">
              <a className="flex text-[#0b097e]" href="https://github.com/DiogoMEng/projetos-javascript">Github <FaGithub className="ml-3 text-[#0b097e] text-2xl group-hover:animate-bounce"/></a>
            </div>
          </div>

          {/* TypeScript Skill */}
          <div className="bg-[#0b097e] w-1/3 p-5 rounded-md border-2 duration-700 hover:border-cyan-400 group">
            <div className="flex items-center">
              <BiLogoTypescript className="text-9xl text-white duration-700 group-hover:text-cyan-400" />
              <span className="text-4xl font-bold duration-700 group-hover:text-cyan-400">TypeScript</span>
            </div>
            <div className="duration-700 group-hover:text-cyan-400">
              <span className="border-b-2 font-bold text-2xl">Habilidades em:</span>
              <ul className="mb-3 *:text-xl">
                <li className="mt-3 ml-8 list-disc">Desenvolvimento Backend</li>
                <li className="ml-8 list-disc">Desenvolvimento Frontend Web</li>
              </ul>
              <span className="mt-5 border-b-2 font-bold text-2xl">Frameworks:</span>
              <ul className="mb-3 *:text-xl">
                <li className="mt-3 ml-8 list-disc">NodeJS</li>
                <li className="ml-8 list-disc">React</li>
              </ul>
            </div>
            <div className="bg-slate-100 w-32 mt-5 px-4 py-2 rounded-md text-xl items-center duration-700 group-hover:bg-cyan-400">
              <a className="flex text-[#0b097e]" href="https://github.com/DiogoMEng/projetos-javascript">Github <FaGithub className="ml-3 text-[#0b097e] text-2xl group-hover:animate-bounce"/></a>
            </div>
          </div>
      </div>
    </section>
  )
}

export default MainSkill;