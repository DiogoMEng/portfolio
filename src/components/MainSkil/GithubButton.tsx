import { FaGithub } from "react-icons/fa"
import { LinkButtonProtocol } from "../../interfaces/propCard";

const GithubButton = ({ 
  colorButton, 
  link 
}: LinkButtonProtocol):JSX.Element => {
  return (
    <div className={
      `${colorButton} w-32 mt-5 px-4 py-2 rounded-md text-xl items-center`
    }>
      <a className="flex text-[#0b097e]" href={link}>
        Github 
        <FaGithub className={`ml-3 text-[#0b097e] text-2xl`}/>
      </a>
    </div>
  )
}

export default GithubButton;