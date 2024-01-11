import SectionItem from "./SectionItem";


const SubSection = ({sectionDetails,content,sectionItemType}) => {
  return (
    <div className={`sub-section ${sectionDetails.sectionClass}`}>
      <div>
        <h2>{sectionDetails.heading}</h2>
        <hr></hr>
      </div>
      <div className="agenda-items">
      {content.map((item,index)=><SectionItem key={index} itemName={item.itemName} itemTypeClass={sectionItemType} paragraphDetails={item.paragraphDetails}/>)}
      </div>
    </div>
  );
};

export default SubSection;
