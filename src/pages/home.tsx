import MainSkill from "../components/skills/MainSkill";
import ProfileDescription from "../components/ProfileDescription";
import ProjectList from "../components/project/ProjectList";

const Home = (): JSX.Element => {
  return(
    <>
      <ProfileDescription />
      <MainSkill />
      <ProjectList />
    </>
  );
};

export { Home };
