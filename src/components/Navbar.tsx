import '../static/css/navbar.css'
import logo from '../static/img/logo.png'

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

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#project">Projetos</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export { NavBar };