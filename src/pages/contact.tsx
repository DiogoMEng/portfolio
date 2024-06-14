import dev from '../static/img/desenvolvimento.png'

import { Footer } from "../components/Footer/Footer"
import { NavBar } from "../components/Navbar/Navbar"

export const Contact = () => {
    return (
        <>
            <NavBar />
            <section className="h-[calc(100vh-70px-24px)]">
                <div className='flex flex-col w-2/4 mx-auto items-center'>
                    <span className='bg-[#5755e2] mt-10 p-2 rounded-md font-bold'>Em Construção</span>
                    <img className='w-3/6' src={dev} alt="pagina em contrução" title='Página em Construção'/>
                </div>
            </section>
            <Footer />
        </>
    )
}