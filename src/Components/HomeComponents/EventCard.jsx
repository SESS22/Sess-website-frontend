import React, {useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom"
import calendarIcon from '../../assets/images/calendar.svg'
import timeIcon from '../../assets/images/time.svg'
import locationIcon from '../../assets/images/location.svg'
import api from "../../data/api.js"

const EventCard = () =>{
    //Object: event = {title:"", desc:"", date:"", time:"", location:"", link:""}
    const [upcomingEventData, setUpcomingEventData] = useState({});
    useEffect(()=>{
        const fetchUpcomingEventData = async () => {
            try {
                const response = await api.get("/home/upcomingEvent");
                setUpcomingEventData(response.data[0])
            } catch (error) {
                
            }
        }
        fetchUpcomingEventData();
    }, [])
    
    const navigate = useNavigate();
    const handleLearnMore = () => {
        navigate("/event"); // D: navigates to event page
    }

    return(
        <div className='eventSection'>

            {/* //TODO - make div take image path */}
            <div className='image-container'>
                <img src={upcomingEventData.placeholderImage} />
            </div>

            <div className='infoCard'>
                <p id='infoCard-event-title'>{upcomingEventData.title}</p>
                <p id='infoCard-article'>{upcomingEventData.desc}</p>

                <section className='time-date-container'>
                    <div className='time-date-div'>
                        <img src={calendarIcon} alt="calendar icon" />
                        <p>{upcomingEventData.date}</p>  
                    </div>

                    <div className='time-date-div'>
                        <img src={timeIcon} alt="time icon" />
                        <p>{upcomingEventData.time}</p>  
                    </div>

                    <div className='time-date-div'>
                        <img src={locationIcon} alt="location icon" />
                        <p>{upcomingEventData.location}</p>  
                    </div>
                </section>
                <button className='btn-style' onClick={handleLearnMore}>Learn More</button>
            </div>
        </div>
    )
};

export default EventCard;