import { FaGithub } from "react-icons/fa"
import { LinkButton } from "../../interfaces/propCard"

const GithubButton = ({
  link,
  styleButton
}: LinkButton):JSX.Element => {
  return (
    <div className={`bg-slate-100 w-32 mt-5 px-4 py-2 rounded-md text-xl items-center ${styleButton}`}>
      <a 
        className="flex text-[#0b097e]" 
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        Github 
        <FaGithub className="ml-3 text-[#0b097e] text-2xl group-hover:animate-bounce"/>
      </a>
    </div>
  )
}

export default GithubButton;