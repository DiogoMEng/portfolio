import { SkillProtocol } from "../../interfaces/propCard";
import { useEffect, useRef, useState } from "react";
import observationPosition from "../../utils/observationPosition";

const Skill = ({children, frameworks, nameSkill, colorContainer}: SkillProtocol):JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(observationPosition(setIsVisible, cardRef, 0.7), []);

  return (
    <div
      ref={cardRef}
      className={
        `bg-[#0b097e] w-1/3 p-5 rounded-md border-2 duration-700 hover:border-${colorContainer}-400 *:hover:text-${colorContainer}-400 group max-md:mb-5 ${isVisible ? `max-md:border-${colorContainer}-400 max-md:*:text-${colorContainer}-400` : ''}`
      }
      style={{
        transition: 'all 0.5s ease-in-out'
      }}
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
    </div>
  )
}

export default Skill;