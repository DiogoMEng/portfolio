import { NavBar } from "../components/Navbar";
import { ProfileDescription } from "../components/ProfileDescription";
import { Project } from "../components/Project";
import { Button } from "../components/Button";


const Home = (): JSX.Element => {
  return(
    <>
      <NavBar />
      <ProfileDescription />
      <Project />
      <Button />
    </>
  );
};

export { Home };
