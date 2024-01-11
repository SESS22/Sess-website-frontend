import React, {useState, useEffect} from 'react';
import api from "../../data/api.js"

const HomeBanner = () =>{
    //Objects: announcement = {title:"", article:"", link:"", hasLink:(true/false)}
    const [content, setContent] = useState(true);
    const [announcementData, setAnnouncementData] = useState([]);
    useEffect(()=>{
        const fetchAnnoucementData = async () => {
            try {
                const response = await api.get("/home/announcementData");
                setAnnouncementData(response.data[response.data.length  - 1]); // D: displays a single announcement (most recent)
            } catch (error) {
                console.log(error)
            }      
        }

        fetchAnnoucementData();
    }, [])

    const selectPage = (page) => {
        const _page = page.currentTarget.id;
        _page === "_landingPage"? setContent(true) : setContent(false);
    }

    useEffect(()=>{
        setContent(true)
    }, [])

    return(
        <>
            <div className='nav-div-container content-grid'>
                    <div id='nav-div'>
                        <div className='nav-div-option' id='_landingPage' style={{borderRight: '1px solid rgba(0, 0, 0, 0.2)'}} onClick={selectPage}>
                            <p>Home</p>
                        </div>
                        
                        <div className='nav-div-option' id='_annoucePage' onClick={selectPage}>
                            <p>Announcement</p>
                        </div>
                    </div>
                </div>
                
                <section className={content? 'homePage-banner' : 'announcement-banner'}>
                    {
                        content? 
                        (
                            <div className=' homePage-banner-container content-grid'>
                                <div id='titleBar'>
                                    <p>Welcome to SESS</p>
                                </div>    
                            </div>
                        ) : (
                            <div>
                                <div className='slider-container content-grid'>
                                    <div className='slider-content'>
                                        <h2>{announcementData.title}</h2>
                                        <p>{announcementData.desc}</p>
                                        {/* D: if announcementData.link is null, button is not displayed */}
                                        <button className={`btn-style ${(announcementData.link !== "")? '' : 'slider-content-btn-inactive'}`} 
                                                onClick={()=>window.open(`${announcementData.link}`)}>
                                                Learn More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </section>
        </>
    )
};

export default HomeBanner;