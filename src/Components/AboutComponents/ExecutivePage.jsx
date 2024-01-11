import ContentPoint from "./ContentPoint";
import Executives from "./Executives";
import "../../assets/styles/aboutPageStyles/executives.css";
import { useEffect } from "react";


const ExecutivePage = () => {




// When the user scrolls down 20px from the top of the document, show the button

useEffect(() => {
  let scrollButton = document.getElementById("scrollButton");

  function scrollFunction(){
    if ( document.documentElement.scrollTop > 200 && document.documentElement.scrollTop <1450) {
      scrollButton.style.display = "block";
    } else {
      scrollButton.style.display = "none";
    }

  }
      window.addEventListener("scroll", scrollFunction);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  
})

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
  const execMembers = [
    {
      id: "daysonContainer",
      name: "Dayson Dong",
      position: "President",
      imageClassName: "dayson-photo",
      roleDetails:
        "  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
      roleResponsibilities: [
        "Providing broader vision and direction for the year",
        "Ensuring that everyone has what they need to achieve their goals",
        "Representing student interests/concerns to the faculty, university & beyond.",
      ],
    },
    {
      id: "kannavContainer",
      name: "Kannav Sethi",
      position: "VP Academics",
      imageClassName: "kannav-photo",
      roleDetails:
        "  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
      roleResponsibilities: [
        "Providing broader vision and direction for the year",
        "Ensuring that everyone has what they need to achieve their goals",
        "Representing student interests/concerns to the faculty, university & beyond.",
      ],
    },
    {
      id: "dennisContainer",
      name: "Dennis Audu",
      position: "VP Communication",
      imageClassName: "dennis-photo",
      roleDetails:
        "  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
      roleResponsibilities: [
        "Providing broader vision and direction for the year",
        "Ensuring that everyone has what they need to achieve their goals",
        "Representing student interests/concerns to the faculty, university & beyond.",
      ],
    },
    {
      id: "arianContainer",
      name: "Arian Amiri",
      position: "VP Finance",
      imageClassName: "arian-photo",
      roleDetails:
        "  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
      roleResponsibilities: [
        "Providing broader vision and direction for the year",
        "Ensuring that everyone has what they need to achieve their goals",
        "Representing student interests/concerns to the faculty, university & beyond.",
      ],
    },
    {
      id: "georgeContainer",
      name: "George Paul Robert",
      position: "VP Student Life",
      imageClassName: "george-photo",
      roleDetails:
        "  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
      roleResponsibilities: [
        "Providing broader vision and direction for the year",
        "Ensuring that everyone has what they need to achieve their goals",
        "Representing student interests/concerns to the faculty, university & beyond.",
      ],
    },
  ];
  return (
    <div className="executive-container">
      <div className="menu">
        <h3>MENU</h3>
        <hr></hr>
        <ul className="menu-items">
          <li>
            <a href="#daysonContainer">President</a>
          </li>
          <li>
            <a href="#kannavContainer">VP Academics</a>
          </li>
          <li>
            <a href="#dennisContainer">VP Communication</a>
          </li>
          <li>
            <a href="#arianContainer">VP Finance</a>
          </li>
          <li>
            <a href="#georgeContainer">VP Student Life</a>
          </li>
        </ul>
      </div>
      <div className="executive-members">
        <ContentPoint
          headingContent="SESS EXECUTIVE MEMBERS"
          paragraphDetails="Officers handle SESS's day-to-day operations and external relations at a high level. Each of them also oversee a group of Project Directors related to their portfolios. They are elected directly by all full-time and part-time engineering students. See below for information about them."
        />
        {execMembers.map((execMember, index) => (
          <Executives key={index} execInformation={execMember} />
        ))}
      </div>
      <button onClick={topFunction} id="scrollButton">
        <svg
          data-name="1-Arrow Up"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="white"
        >
          <path d="m26.71 10.29-10-10a1 1 0 0 0-1.41 0l-10 10 1.41 1.41L15 3.41V32h2V3.41l8.29 8.29z" />
        </svg>
      </button>
    </div>
  );
};

export default ExecutivePage;
