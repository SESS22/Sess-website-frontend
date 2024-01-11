import {React, useEffect} from 'react';
import BannerImage from '../Components/BannerImage';
import styled from "styled-components";
import UpcomingEvent from '../Components/EventComponents/UpcomingEvent';
import MediaVault from '../Components/EventComponents/MediaVault';


const EventPage = () => {
    // Scroll to top when the component mounts
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <BannerImage customClass="bannerClass" bannerHeading="Events" bannerContent="Explore SESS's  events aimed to build innovation and help socialize"/>
            <Wrapper>
                <UpcomingEvent />
                <MediaVault/>
            </Wrapper>
        </>
    )
        
};
const Wrapper = styled.section`
  .content-grid {
    margin: 0 15vw 0 15vw;
    transition: 0.2s;
  }
`;

export default EventPage;