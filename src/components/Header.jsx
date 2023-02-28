import ImgLogo  from '../assets/img/menu.png';

const Header = () => {
    return(
        <header className="header">
            <img className='logo' src={ImgLogo} alt="Logo"  />

            <ul className="lista">
                <li>Home</li>
                <li>Quem Somos</li>
                <li>Contato</li>
            </ul>
        </header>
    )}

export default Header;