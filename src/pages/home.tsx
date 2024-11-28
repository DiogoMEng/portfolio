import MainSkill from "../components/MainSkill";
import ProfileDescription from "../components/ProfileDescription";
import ProjectList from "../components/ProjectList";

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
