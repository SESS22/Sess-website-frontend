import calendarIcon from "../../assets/images/calendar.svg";
import timeIcon from "../../assets/images/time.svg";
import locationIcon from "../../assets/images/location.svg";

function UpcomingEventContainer({
  id,
  title,
  placeholderImage,
  date,
  time,
  location,
  desc,
  activeId,
  toggleActiveId,
}) {
  return (
    <div>
      <div className="content-container">
        <div className="picture">
          <img src={placeholderImage} alt={placeholderImage} />
        </div>
        <div className="content">
          <h1>{title}</h1>
          <div className="content-div">
            <div className="time-div">
              <img src={calendarIcon} alt={calendarIcon} />
              <p>{date}</p>
            </div>
            <div className="time-div">
              <img src={timeIcon} alt={timeIcon}/>
              <p>{time}</p>
            </div>
            <div className="time-div">
              <img src={locationIcon} alt={locationIcon} />
              <p>{location}</p>
            </div>
          </div>
          <div className="button">
            <button onClick={() => toggleActiveId(id)}>Learn More</button>
          </div>
        </div>
      </div>
      {id === activeId && (
        <div className="description">
          <div>
            <p>{desc}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default UpcomingEventContainer;
