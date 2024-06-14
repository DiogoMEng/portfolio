import { Footer } from "../components/Footer/Footer";
import { NavBar } from "../components/Navbar/Navbar";
import { ProfileDescription } from "../components/Profile/ProfileDescription";
import { Project } from "../components/Project/Project";

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
