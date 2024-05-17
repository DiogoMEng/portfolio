import logo from '../../static/img/logo.png'

const NavBar = (): JSX.Element => {
    return (
        <nav className="flex items-center justify-between px-5 bg-black text-white">
            {/* <!-- LOGO --> */}
            <div className="logo">Green Route</div>

            {/* <!-- LINKS --> */}
            <div>
                    {/* <!-- NAVEGAÇÃO MENU --> */}
                    <ul className="nav-links">
                        {/* <!-- CHECKBOX --> */}
                        <input type="checkbox" id="checkbox_toggle" />
                        <label htmlFor="checkbox_toggle" className="hamburger">&#9776; </label>
                        {/* <!-- NAVEGAÇÃO MENUS --> */}
                        <div className="menu">
                            <li><a href="/ways/">Início</a></li>
                            <li><a href="#">Sobre</a></li>
                            <li><a href="#">Serviços</a></li>
                            <li><a href="#">Contato</a></li>
                        </div>
                    </ul>
            </div>
        </nav>
    );
};

export { NavBar };