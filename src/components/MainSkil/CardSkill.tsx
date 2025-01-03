import { LinkButtonProtocol, SkillProtocol } from "../../interfaces/propCard";
import GithubButton from "./GithubButton";

const Skill = ({
  children, 
  frameworks, 
  nameSkill, 
  colorContainer,
  colorButton,
  link
}: SkillProtocol & LinkButtonProtocol):JSX.Element => {

  return (
    <div
      className={
        `bg-[#0b097e] w-1/3 p-5 rounded-md border-2 duration-700 ${colorContainer} max-md:mb-5`
      }
    >
      <div className="flex items-center">
        {children}
        <span className="text-4xl font-bold duration-700">{nameSkill}</span>
      </div>
      <div className="mt-3 duration-700">
        <span className="border-b-2 font-bold text-2xl">Frameworks Principais:</span>
        <ul className="mb-3 list-disc list-insider *:text-xl">
          {
            frameworks!.map((value, index) => (
              <li key={index} className={index === 0 ? "mt-3 ml-8" : "ml-8"}>{value}</li>
            )
          )}
        </ul>
      </div>
      <GithubButton 
        colorButton={colorButton}
        link={link}
      />
    </div>
  )
}

export default Skill;