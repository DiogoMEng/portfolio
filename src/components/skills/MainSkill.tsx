import { RiJavascriptFill } from "react-icons/ri"
import { BiLogoTypescript } from "react-icons/bi";
import CardSkill from "./CardSkill";

const MainSkill = ():JSX.Element => {
  return (
    <section className="p-5">
      <div className="flex gap-5 w-3/4 mx-auto mt-10 justify-center max-sm:block max-sm:w-full *:max-sm:w-full">

          {/* Javascript skill */}
          <CardSkill
            nameSkill="JavaScript"
            skills={["Node.JS", "Express.JS", "NestJS"]}
            generalColor="amber"
          >
            <RiJavascriptFill className="text-9xl text-white duration-700 group-hover:text-amber-400" />
          </CardSkill>

          {/* TypeScript Skill */}
          <CardSkill
            nameSkill="TypeScript"
            skills={["Node.JS", "Express.JS", "NestJS"]}
            generalColor="cyan"
          >
            <BiLogoTypescript className="text-9xl text-white duration-700 group-hover:text-cyan-400" />
          </CardSkill>
      </div>
    </section>
  )
}

export default MainSkill;