import React from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const contactLinks = [
  {
    icon: <LocationOnOutlinedIcon className="toggle-icon" />,
    title: "Visit us",
    href: "",
  },
  {
    icon: <EmailOutlinedIcon className="toggle-icon" />,
    title: "Email",
    href: "",
  },
  {
    icon: <InstagramIcon className="toggle-icon" />,
    title: "Instagram",
    href: "",
  },
  {
    icon: <TwitterIcon className="toggle-icon" />,
    title: "Twitter",
    href: "",
  },
];

function ContactLinks() {
  return (
    <div className="link-form">
      <div className="link-container">
        {contactLinks.map((link, index) => {
          const { icon, title, href } = link;
          return (
            <>
              <div key={index} className="toggle-link">
                <button>{icon}</button>
                <a href={href}>{title}</a>
              </div>
              {index !== contactLinks.length - 1 ? (
                <div className="link-line"></div>
              ) : null}
            </>
          );
        })}
      </div>
    </div>
  );
}

export default ContactLinks;
