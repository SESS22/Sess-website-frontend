import "../../assets/styles/aboutPageStyles/executives.css";

const Executives = ({ execInformation }) => {
  const {
    id,
    name,
    position,
    imageClassName,
    roleDetails,
    roleResponsibilities,
  } = execInformation;

  return (
    <div className="executive-information-container" id={id}>
      <div className="executive-information">
        <h2>{position}</h2>
        <p>{roleDetails}</p>
        <h4>Key Responsibilites</h4>
        <ul>
          {roleResponsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
      </div>
      <div className="executive-photo-container">
        // TODO use img in the div to display image
        <div className={`${imageClassName}`}></div>
        <div className="executive-photo-information">{name}</div>
        <div className="email-icon"></div>
      </div>
    </div>
  );
};

export default Executives;
