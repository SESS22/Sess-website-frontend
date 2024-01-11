import React, {useState, useEffect} from 'react';
import '../assets/styles/home-page-styles.css'

// ICONS
import bookIcon from '../assets/images/book.svg';
import circleIcon from '../assets/images/circles.svg'
import hatIcon from '../assets/images/hardhat.svg'
import sunIcon from '../assets/images/icons8-sun.svg'

// DATA

import api from "../data/api.js"

// COMPONENETS
import ImageSlider from '../Components/HomeComponents/ImageSlider';
import EventCard from '../Components/HomeComponents/EventCard';
import FeaturePlaque from '../Components/HomeComponents/FeaturePlague';
import HomeBanner from '../Components/HomeComponents/HomeBanner';


const HomePage = () => {
    const plaque_data = [
        // Get data from upcomingEventsData -> Temp
        {
            icon: sunIcon, 
            title:"Fall Intro", 
            article:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,  molestiae quas vel sint 
            commodi repudiandae consequuntur voluptatum`, 
            link:""
        },
        {
            icon: circleIcon, 
            title:"NEM Event", 
            article:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,  molestiae quas vel sint 
            commodi`, 
            link:""
        },
        {
            icon: hatIcon, 
            title:"Hackathon", 
            article:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,  molestiae quas vel sint 
            commodi`, 
            link:""
        },
        {
            icon: bookIcon, 
            title:"Mentorship", 
            article:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,  molestiae quas vel sint 
            commodi repudiandae consequuntur voluptatum`, 
            link:""
        },
       
    ];
       
    return (
        <>
            <div className='home-body'>
                <HomeBanner />
            </div>
            
            <div className=' home-body-content'>

                <article className='intro-article content-grid' >

                    <p>Our story</p>
                    <article>
                    Welcome to Seneca engineering students’ society! We are a dynamic and inclusive community of passionate engineering students, 
                    dedicated to exploring and expanding our knowledge in various disciplines. Through engaging activities such as hackathons, 
                    competitions, and technical sessions, we strive to enhance our skills and stay updated with the latest advancements. 
                    Our club also offers mentorship programs, career guidance, and industry partnerships, ensuring a well-rounded engineering education. 
                    Come join us as we embark on an exciting journey of learning, innovation, and professional growth!
                    </article>
                    <div></div>

                </article>

                <section className='featuredSection content-grid'>
                        <p>Events & Service</p>
                        <div className='featureDiv-container'> 
                            {
                                plaque_data.map((item, idx)=>(
                                    <FeaturePlaque plaqueData={item} key={idx} />
                                ))                             
                            }
                            
                        </div>           
                </section>

                <PageSection title={"upcoming events "} WrappedComponent={() => <EventCard />}/>
                <PageSection title={"Highlights From Previous Events"} WrappedComponent={()=>  <ImageSlider /> } />

            </div>
        </>
    )
        
};

const PageSection = ({title, WrappedComponent}) =>{
    return(
        <section className='pageSection'>
            <div className='content-grid'>
                <div className='title-underline'>
                    <p>{title} </p>
                    <div></div>
                </div>
        
                <WrappedComponent />
            </div>       
        </section>
    );
    
};

export default HomePage;