import { Footer } from "../components/Footer";
import { NavBar } from "../components/Navbar";
import { ProfileDescription } from "../components/ProfileDescription";
import { Project } from "../components/ProjectList";

const Home = (): JSX.Element => {
  return(
    <>
      <NavBar />
      <ProfileDescription />
      <Project />
      <Footer />
    </>
  );
};

export { Home };
