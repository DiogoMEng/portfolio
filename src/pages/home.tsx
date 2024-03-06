import { NavBar } from "../components/Navbar/Navbar";
import { ProfileDescription } from "../components/Profile/ProfileDescription";
import { Project } from "../components/Project/Project";
import { Button } from "../components/button/Button";


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
