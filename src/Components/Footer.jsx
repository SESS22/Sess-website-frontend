import { useNavigate } from "react-router-dom";
import logoImage from "../assets/images/SESS - logo.svg";
import instagramLogo from "../assets/images/instagram.svg";
import twitterLogo from "../assets/images/twitter.svg"
import mailLogo from "../assets/images/mail.svg"

const Footer = () => {
    const navigate = useNavigate();
    const handleImageClick = () => {
        navigate("/")
    }

    return (
        <footer>
            <section className="footer-section">
                <section className="sess-footer-logo" >
                    <img src={logoImage} alt="" onClick={handleImageClick}/>
                </section>

                <div className="footer-links content-grid">
                    <ul className="head-text">
                        <p>SESS</p>
                        
                        <FooterLink href={"#"}>Announcement</FooterLink>
                    </ul>

                    <ul className="head-text">
                        <p>About</p>
                        <FooterLink href={"#"}>Club info</FooterLink>
                        <FooterLink href={"#"}>Executives</FooterLink>
                        <FooterLink href={"#"}>Policy</FooterLink>
                        
                    </ul>

                    <ul className="head-text">
                        <p>Event</p>
                        <FooterLink href={"#"}>Upcoming Events</FooterLink>
                        <FooterLink href={"#"}>Media Vault</FooterLink>
                    </ul>

                    <ul className="head-text">
                        <p>Service</p>
                        <FooterLink href={"#"}>Store</FooterLink>
                        <FooterLink href={"#"}>Mentorship Program</FooterLink>
                        <FooterLink href={"#"}>Exam Bank</FooterLink>
                    </ul>

                    <ul className="head-text">
                        <p>Feedback?</p>
                        <FooterLink href={"#"}>Send us a message</FooterLink>
                    </ul>
                </div>
            </section>

            <section className="end-footer content-grid">
                <div className="logo-wrapper">
                    <img src={instagramLogo} alt="" className="logo" onClick={()=>window.open('#')} />
                    <img src={twitterLogo} alt="" className="logo" onClick={()=>window.open('#')}/>
                    <img src={mailLogo} alt="" className="logo" onClick={()=>window.open('#')}/>
                </div>
                <p>© 2023 Seneca Engineering Student Society</p>
            </section>
        </footer>)
}

const FooterLink = ({href, children, ...props}) =>{
    return (
        <li><a href={href}>{children}</a></li>
    )
};

export default Footer;