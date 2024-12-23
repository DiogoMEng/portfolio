import SkillProtocol from "../../interfaces/Skill";

const Skill = (prop: SkillProtocol):JSX.Element => {
  return (
    <>
      <div className="flex items-center">
        {prop.children}
        <span className="text-4xl font-bold duration-700">JavaScript</span>
      </div>
      <div className="mt-3 duration-700">
        <span className="border-b-2 font-bold text-2xl">Frameworks Principais:</span>
        <ul className="mb-3 *:text-xl">
          <li className="mt-3 ml-8 list-disc">Node.js</li>
          <li className="ml-8 list-disc">Express.js</li>
          <li className="ml-8 list-disc">NestJS</li>
        </ul>
      </div>
    </>
  )
}

export default Skill;