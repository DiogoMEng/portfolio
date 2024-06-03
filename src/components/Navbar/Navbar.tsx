import logo from '../../static/img/logo.png'

const NavBar = (): JSX.Element => {
    return (
        <nav className="flex bg-gradient-to-r from-[#000000] to-[#1a18a4] items-center justify-between px-5 text-white">
            <div className="flex items-center text-3xl"><img src={logo} alt="logo do site" width={70} height={70} />Portfolio</div>

            <div>
                    <ul className="nav-links">
                        <input className='hidden' type="checkbox" id="checkbox_toggle"/>
                        <label htmlFor="checkbox_toggle" className="hidden text-2xl max-md:block">&#9776; </label>
                        <div className="menu flex gap-4 text-lg max-md:hidden max-md:absolute max-md:bg-black max-md:inset-x-0 max-md:text-center max-md:py-4 max-md:px-0">
                            <li className='py-1 px-3.5 hover:bg-slate-200 duration-700 max-md:hover:inline-block max-md:mt-3'><a href="#">Início</a></li>
                            <li className='py-1 px-3.5 hover:bg-slate-200 duration-700 max-md:hover:inline-block max-md:mt-3'><a href="#">Sobre</a></li>
                            <li className='py-1 px-3.5 hover:bg-slate-200 duration-700 max-md:hover:inline-block max-md:mt-3'><a href="#">Serviços</a></li>
                            <li className='py-1 px-3.5 hover:bg-slate-200 duration-700 max-md:hover:inline-block max-md:mt-3'><a href="#">Contato</a></li>
                        </div>
                    </ul>
            </div>
        </nav>
    );
};

export { NavBar };