import { useState } from "react";
import { FiBookOpen, FiExternalLink, FiMenu, FiType, FiX } from "react-icons/fi";
import { Styled } from "./styled";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    return (
        <Styled.Header>
            <div className="headerInner">
                <a className="brand" href="#top" onClick={closeMenu}>
                    <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Ashish Ranjan logo" />
                    <span>
                        <small>A2RP TOOL</small>
                        FontPair Studio
                    </span>
                </a>

                <button
                    type="button"
                    className="menuButton"
                    aria-expanded={menuOpen}
                    aria-controls="fontpair-navigation"
                    onClick={() => setMenuOpen((open) => !open)}
                >
                    {menuOpen ? <FiX /> : <FiMenu />}
                    <span>{menuOpen ? "Close" : "Menu"}</span>
                </button>

                <nav
                    id="fontpair-navigation"
                    className={menuOpen ? "navigation isOpen" : "navigation"}
                    aria-label="Main navigation"
                >
                    <a href="#pairs-start" onClick={closeMenu}><FiType /> Font pairs</a>
                    <a href="#shortlist" onClick={closeMenu}><FiBookOpen /> Shortlist</a>
                    <a href="https://fonts.google.com/" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                        <FiExternalLink /> Google Fonts
                    </a>
                </nav>
            </div>
        </Styled.Header>
    );
};

export default Header
