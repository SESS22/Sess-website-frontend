import React, {useRef, useState} from 'react';
import { Link,useNavigate, useMatch, useResolvedPath } from 'react-router-dom';
import logoImage from "../assets/images/SESS - logo.svg";

const Header = () => {
    
  const navigate=useNavigate();
  const handleImageClick=()=>{
    navigate("/");
  }

  const [active, setActive] = useState(false)

  const menuDropdownRef = useRef(null);
  const handleBurgerMenuClick = (e) => {
    e.preventDefault()
    const navBar = menuDropdownRef.current;
    console.log(navBar)
    setActive(true);
    console.log(navBar)//navBar.class.toggle("active");
  }

  const burgerMenuClassname = `header-dropMenu ${active === true? 'active' : ''}`

  return (
    <div className="header content-grid">
      <img src={logoImage} alt="sess-logo-black" id="sess-logo" onClick={handleImageClick}/>

      <div className="menuSelector" onClick={handleBurgerMenuClick}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <section className={burgerMenuClassname} ref={menuDropdownRef}>
        <ul>
          <PageLink to="/about">About</PageLink>
          <PageLink to="/event">Event</PageLink>
          <PageLink to="/services">Services</PageLink>
          <PageLink to="/contact">Contact</PageLink>
        </ul>
      </section>
    </div>
  );
};

 // D: Links in header component *
const PageLink = ({to, children, ...props}) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({path: resolvedPath.pathname, end: true})
  return (
    <li>
      <Link to={to} {...props} className={`link  ${isActive? 'currentPage' : ''}`} >{children}</Link>
    </li>
  )
};


export default Header;
