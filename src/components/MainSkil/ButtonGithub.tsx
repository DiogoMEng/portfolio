import SkillProtocol from "../../interfaces/Skill";

const ButtonGithub = (prop: SkillProtocol):JSX.Element => {
  return (
    <div className={`bg-slate-100 w-32 mt-5 px-4 py-2 rounded-md text-xl items-center duration-700 group-hover:${prop.bgHover} ${prop.statusIsVisible ? `max-md:${prop.bgHover}` : ''}`}>
      <a className="flex text-[#0b097e]" href="https://github.com/DiogoMEng/projetos-javascript">Github {prop.children}</a>
    </div>
  )
}

export default ButtonGithub;