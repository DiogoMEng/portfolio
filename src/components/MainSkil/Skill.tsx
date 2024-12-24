import SkillProtocol from "../../interfaces/Skill";

const Skill = (prop: SkillProtocol):JSX.Element => {
  return (
    <>
      <div className="flex items-center">
        {prop.children}
        <span className="text-4xl font-bold duration-700">{prop.nameSkill}</span>
      </div>
      <div className="mt-3 duration-700">
        <span className="border-b-2 font-bold text-2xl">Frameworks Principais:</span>
        <ul className="mb-3 list-disc list-insider *:text-xl">
          {prop.frameworks!.map((value, index) => (
            <li key={index} className={index === 0 ? "mt-3 ml-8" : "ml-8"}>{value}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Skill;