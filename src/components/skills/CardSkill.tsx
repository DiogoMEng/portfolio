import { useEffect, useRef, useState } from "react";
import { LinkButton, SkillProtocol } from "../../interfaces/propCard";
import observationPosition from "../../utils/observationPosition";
import GithubButton from "./GithubButton";

const CardSkill = ({ 
  nameSkill, 
  skills, 
  generalColor, 
  children,
  link,
  styleButton
}: SkillProtocol & LinkButton):JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    observationPosition(setIsVisible, cardRef)
  }, []);

  return (
      <div
        ref={cardRef} 
        className={
          `bg-[#0b097e] w-1/3 p-5 rounded-md border-2 duration-700 hover:border-${generalColor}-400 group max-md:mb-5 ${isVisible ? `max-md:border-${generalColor}-400` : ''}`
        }
        style={{
          transition: 'all 0.5s ease-in-out'
        }}
      >
        <div className="flex items-center">
          {children}
          <span className={`text-4xl font-bold duration-700 group-hover:text-${generalColor}-400`}>{nameSkill}</span>
        </div>
        <div className={`mt-3 duration-700 group-hover:text-${generalColor}-400`}>
          <span className="border-b-2 font-bold text-2xl">Frameworks Principais:</span>
          <ul className="mb-3 *:text-xl">
            {skills.map((value, index) => (
              <li key={index} className="mt-3 ml-8 list-disc">
                {value}
              </li>
            ))}
          </ul>
        </div>
        <GithubButton
          link={link}
          styleButton={styleButton}
        />
      </div>
  )
}

export default CardSkill;