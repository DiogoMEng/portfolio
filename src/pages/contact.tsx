import { Footer } from "../components/Footer/Footer"
import { NavBar } from "../components/Navbar/Navbar"
import Forms from '../components/Forms/Forms'

export const Contact = () => {
    return (
        <>
            <NavBar />
            <section className="h-[calc(100vh-114px-20px)]">
                <Forms/>
            </section>
            <Footer />
        </>
    )
}