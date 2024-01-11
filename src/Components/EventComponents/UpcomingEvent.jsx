import React, { useState } from "react";
import Wrapper from "../../assets/styles/EventWrappers/UpcomingEvents";

import UpcomingEventContainer from "./UpcomingEventContainer";
import { useEffect } from "react";
import api from "../../data/api.js"


function UpcomingEvent() {
  const [activeId, setActiveId] = useState(null);
  const [upcomingEvents, setUpcomingEvents] = useState([])

  const toggleActiveId = (id) => {
    const newActiveId = activeId === id ? null : id;
    setActiveId(newActiveId);
  };

  useEffect(()=>{
    const fetchUpcomingEventData = async() =>{
      try {
        const response = await api.get("/event/upcomingEvents");
        setUpcomingEvents(response.data)
      } catch (error) {
        
      }
    }
    fetchUpcomingEventData();
  }, [])
  return (
    <Wrapper className="content-grid">
      <div className="title">
        <p>Upcoming Event</p>
        <hr />
      </div>
      <div className="container">
        {upcomingEvents.map((event) => {
          return (
            <UpcomingEventContainer key={event.id} {...event} toggleActiveId={toggleActiveId} activeId={activeId}/>
          );
        })}
      </div>
    </Wrapper>
  );
}

export default UpcomingEvent;
