import MainSkill from "../components/MainSkil/MainSkill";
import ProfileDescription from "../components/ProfileDescription";
import ProjectList from "../components/projects/ProjectList";

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
