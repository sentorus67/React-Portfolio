import {Link, useLocation} from 'react-router-dom';

function Navigation(){
    const currentPage = useLocation().pathname;

    return(
        <ul class='navbar-nav mx-3 me-auto navbar-text fs-2'>
            <li class='nav-item nav-link'>
                <Link to="/Aboutme" className={currentPage == '/Aboutme' ? 'nav-link active':'nav-link'}>
                About-Me
                </Link>
            </li>

            <li class='nav-item nav-link'>
                <Link to="/Contact" className={currentPage == '/Aboutme' ? 'nav-link active':'nav-link'}>
                Contact
                </Link>
            </li>

            <li class='nav-item nav-link'>
                <Link to="/Portfolio" className={currentPage == '/Aboutme' ? 'nav-link active':'nav-link'}>
                Portfolio
                </Link>
            </li>

            <li class='nav-item nav-link'>
                <Link to="/Resume" className={currentPage == '/Aboutme' ? 'nav-link active':'nav-link'}>
                Resume
                </Link>
            </li>
        </ul>
    );
}

export default Navigation;