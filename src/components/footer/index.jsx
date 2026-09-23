import { createElement } from "react";
import { FaCodepen, FaFacebookF, FaGithub, FaLinkedinIn, FaPatreon, FaYoutube } from "react-icons/fa";
import { FiCoffee, FiGlobe, FiHeart, FiMail } from "react-icons/fi";
import { Styled } from "./styled";

const footerLinks = [
    { label: "Portfolio", href: "https://www.ashishranjan.net/", icon: FiGlobe },
    { label: "GitHub", href: "https://github.com/a2rp", icon: FaGithub },
    { label: "CodePen", href: "https://codepen.io/ash1198", icon: FaCodepen },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/aashishranjan", icon: FaLinkedinIn },
    { label: "Facebook", href: "https://www.facebook.com/theash.ashish/", icon: FaFacebookF },
    { label: "YouTube", href: "https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1", icon: FaYoutube },
    { label: "Email", href: "mailto:ash.ranjan09@gmail.com", icon: FiMail },
    { label: "Support", href: "https://a2rp-donation-page.netlify.app/", icon: FiHeart },
    { label: "Buy Me a Coffee", href: "https://buymeacoffee.com/a2rp", icon: FiCoffee },
    { label: "Patreon", href: "https://www.patreon.com/a2rp", icon: FaPatreon },
];

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <Styled.Footer>
            <div className="footerGrid">
                <div className="footerIntro">
                    <img src={`${import.meta.env.BASE_URL}images/logo_ar.png`} alt="Ashish Ranjan logo" />
                    <div>
                        <strong>FontPair Studio</strong>
                        <p>Practical typography pairings for real interfaces.</p>
                    </div>
                </div>

                <div className="footerSupport">
                    <p>Explore a pairing, copy the CSS and keep building.</p>
                    <img src={`${import.meta.env.BASE_URL}images/upi-qr.png`} alt="UPI support QR code" />
                </div>
            </div>

            <div className="footerBottom">
                <p>
                    Copyright &copy; {year}{" "}
                    <a href="https://www.ashishranjan.net/" target="_blank" rel="noopener noreferrer">
                        Ashish Ranjan
                    </a>
                </p>

                <nav className="footerLinks" aria-label="Social and support links">
                    {footerLinks.map(({ label, href, icon }) => (
                        <a
                            key={label}
                            href={href}
                            target={href.startsWith("mailto:") ? undefined : "_blank"}
                            rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                            aria-label={label}
                            title={label}
                        >
                            {createElement(icon, { "aria-hidden": true })}
                        </a>
                    ))}
                </nav>
            </div>
        </Styled.Footer>
    );
};

export default Footer;
