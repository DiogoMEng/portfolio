import { ProfileDescription } from "../components/ProfileDescription";
import { Project } from "../components/ProjectList";

const Home = (): JSX.Element => {
  return(
    <>
      <ProfileDescription />
      <Project />
    </>
  );
};

export { Home };
