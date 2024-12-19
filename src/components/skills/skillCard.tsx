const IconJavascript = (RiJavascriptFill, isVisible):JSX.Element => {
  return (
    <div className="flex items-center">
        <RiJavascriptFill className={`text-9xl text-white duration-700 group-hover:text-amber-400 ${isVisible ? 'max-md:text-amber-400' : ''}`} />
        <span className="text-4xl font-bold duration-700">JavaScript</span>
    </div>
  )
}

const IconGithub = (FaGithub, isVisible):JSX.Element => {
  return (
    <div className={`bg-slate-100 w-32 mt-5 px-4 py-2 rounded-md text-xl items-center duration-700 group-hover:bg-amber-400 ${isVisible ? 'max-md:bg-amber-400' : ''}`}>
        <a className="flex text-[#0b097e]" href="https://github.com/DiogoMEng/projetos-javascript">Github <FaGithub className={`ml-3 text-[#0b097e] text-2xl group-hover:animate-bounce ${isVisible ? 'animate-bounce' : ''}`}/></a>
    </div>
  )
}

const SkillCard = (cardRef, isVisible) => {
  return (
    <div
      ref={cardRef}
      className={
        `bg-[#0b097e] w-1/3 p-5 rounded-md border-2 duration-700 hover:border-amber-400 *:hover:text-amber-400 group max-md:mb-5 ${isVisible ? 'max-md:border-amber-400 max-md:*:text-amber-400' : ''}`
      }
      style={{
        transition: 'all 0.5s ease-in-out'
      }}
    >
      <IconJavascript />
      <div className="mt-3 duration-700">
        <span className="border-b-2 font-bold text-2xl">Frameworks Principais:</span>
        <ul className="mb-3 *:text-xl">
          <li className="mt-3 ml-8 list-disc">Node.js</li>
          <li className="ml-8 list-disc">Express.js</li>
          <li className="ml-8 list-disc">NestJS</li>
        </ul>
      </div>
    
      {/* button - redireciona para projetos */}
      <IconGithub />
    </div>
  )
}

export default SkillCard;