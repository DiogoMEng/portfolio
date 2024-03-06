import '../../static/css/navbar.css'
import logo from '../../static/img/logo.png'

const NavBar = (): JSX.Element => {
    return (
        <header id="menu">
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="" width="50" height="50" className="d-inline-block align-text-center" />
                        <span>Portfolio</span>
                    </a>
                </div>
                <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#project">Projetos</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export { NavBar };