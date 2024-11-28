import { RiJavascriptFill } from "react-icons/ri"

const MainSkill = ():JSX.Element => {
  return (
    <section className="p-5">
      <h1 className="text-3xl text-center font-bold">
        <span>Principais Linguagens de Programação</span>
      </h1>
      <div>
        <ul>
          <li><RiJavascriptFill/></li>
        </ul>
      </div>
    </section>
  )
}

export default MainSkill;