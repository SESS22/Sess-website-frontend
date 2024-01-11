import BannerImage from "../Components/BannerImage";
import { Outlet, NavLink} from "react-router-dom";
import "../assets/styles/aboutPageStyles/linkBar.css"

export const AboutSection = ({ section }) => {
    return <h1>{section} Section</h1>;
};

const AboutPage = () => {

    return (
        <>
            <BannerImage customClass="bannerClass" bannerHeading="About Us" bannerContent="Take A Dive into SESS and Understand what it represents"/>
            <div className="link-container">
                <ul>
                {/* <li>
                    <NavLink
                    to="/about/Sess"
                    className={({ isActive }) => {
                        const linkClasses = ["link-wrapper"];
                        if (isActive) linkClasses.push("active-link");
                        return linkClasses.join(" ");
                    }}
                    activeClassName="active-link"
                    >
                    SESS
                    </NavLink>
                </li> */}
                {/* <li>
                    <NavLink
                    to="/about/Executives"
                    className={({ isActive }) => {
                        const linkClasses = ["link-wrapper"];
                        if (isActive) linkClasses.push("active-link");
                        return linkClasses.join(" ");
                    }}
                    activeClassName="active-link"
                    >
                    EXECUTIVES
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to="/about/Policy"
                    className={({ isActive }) => {
                        const linkClasses = ["link-wrapper"];
                        if (isActive) linkClasses.push("active-link");
                        return linkClasses.join(" ");
                    }}
                    activeClassName="active-link"
                    >
                    POLICY
                    </NavLink>
                </li> */}
                </ul>
            </div>
            <Outlet />
        </>
    )
        
  };
  
  export default AboutPage;
