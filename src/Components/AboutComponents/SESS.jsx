import "../../assets/styles/aboutPageStyles/sess.css";
import ContentPoint from "./ContentPoint";
import SubSection from "./SubSection";


const contentList = [
  {
    heading: "GOVERNANCE STRUCTURE",
    paragraph:
      "The Engineering Society is run by volunteers in a wide variety ofpositions. It would be impossible to list everyone who contributesto its operation, but this page includes information about many ofthose volunteers. To read more about each role, what that persondoes, and how you can contact them, expand one of the categoriesbelow. For a pretty infographic on our governance structure, please click here",
  },
  {
    heading: "OFFICERS",
    paragraph:
      " Officers handle EngSoc's day-to-day operations and external relations at a high level. Each of them also oversee a group of Project Directors related to their portfolios. They are elected directly by all full-time and part-time engineering students. Visit the officers page to see a list of officers and their contact information",
  },
  {
    heading: "BOARD OF DIRECTORS",
    paragraph:
      "he Board of Directors is the highest level of governance and oversees all of the operations of the Engineering Society, as well as the activities of the Officers. Board of Directors Representatives vote on major decisions concerning changes to EngSoc's services, methods of representation, and bylaws. The Board holds the Officers and Directors of the Society accountable for their actions, and ultimately ensures that the Engineering Society acts in the best interests of its Members. They are elected directly by all full-time and part-time engineering students in each of their constituencies. Visit the governing members",
  },
  {
    heading: "PROJECT DIRECTORS",
    paragraph:
      "Project Directors each manage a particular service or initiative, from managing a cafÃ© to teaching high school students about engineering. Many of them form committees or teams open to anyone at Skuleâ„¢ to achieve their goals for the year. They are elected by the outgoing EngSoc Council members near the end of their terms. See the Project Directors page for more details",
  },
  {
    heading: "ASSOCIATED ENTITIES",
    paragraph:
      "Associated Entities are non-EngSoc organizations who are considered part of Council because of their contributions to the Skuleâ„¢ community. The method by which they are elected or appointed varies based on their position. For mor information, please visit the Associated Entities page",
  },
  {
    heading: "CLASS REPRESENTATIVES",
    paragraph:
      "Class Representatives are members of each discipline and year who represent the concerns and values of their classmates to Discipline Clubs, EngSoc, and the Faculty of Applied Science and Engineering. They are elected directly by all full-time and part-time engineering students in each of their constituencies. Visit the governing members page to see a list of class representatives and their contact information.",
  },
];
const agendaList = [
  {
    itemName: "item1",
    paragraphDetails: {
      paragraph:
        "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. .",
    },
  },
  {
    itemName: "item2",
    paragraphDetails: {
      paragraph:
        "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. .",
    },
  },
  {
    itemName: "item3",
    paragraphDetails: {
      paragraph:
        "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. .",
    },
  },
];
const partnerList = [
  {
    itemName: "partner1",
    paragraphDetails: {
      paragraph:
        "ESSCO is an association that represents engineering societies from 16 universities across Ontario and acts as the link between engineering students and professional associations, academia, and government. Since its creation in 1987, ESSCO’s goal has been to promote unity, continuity, and visibility among Ontario engineering students. ",
      link: "https://essco.ca/",
    },
  },
  {
    itemName: "partner2",
    paragraphDetails: {
      paragraph:
        "The Canadian Federation of Engineering Students (CFES) (Fédération canadienne étudiante de génie in French) is the national association of undergraduate engineering student societies in Canada and exists to organize activities, provide services and interact with professional and other bodies at the national and international level for the benefit of Canadian engineering students.",
      link: "https://cfes.ca/",
    },
  },
];

const SESS = () => {

  
  return (
    <div className="sess-section">
      <div className="content-section">
        <div className="sess-content">
          <h1 className="subHeading">SENECA ENGINEERING STUDENT'S SOCIETY</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
            semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
            porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
            ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra
            nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
            Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies
            nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget
            condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem
            neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar,
            hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.
            Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante.
            Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
            fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed
            consequat, leo eget bibendum sodales, augue velit cursus nunc,
          </p>
        </div>
        <div className="imageDiv"></div>
      </div>
      <div className="club-points">
        {contentList.map((content, index) => (
          <ContentPoint
            paragraphDetails={content.paragraph}
            headingContent={content.heading}
            key={index}
          />
        ))}
      </div>
      <SubSection
        sectionDetails={{
          heading: "Club Agenda",
          sectionClass: "agenda-section",
        }}
        content={agendaList}
        sectionItemType="agenda-item"
      />
      <SubSection
        sectionDetails={{
          heading: "Our Partners",
          sectionClass: "partner-section",
        }}
        content={partnerList}
        sectionItemType="partner-item"
      />
    </div>
  );
};

export default SESS;
