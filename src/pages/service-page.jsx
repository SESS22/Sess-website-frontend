import React from 'react';
import BannerImage from '../Components/BannerImage';
import consImage from '../assets/images/construction.jpg'


const styles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    fontSize: '2rem',
    margin: '15px 0 15px 0'
};

const Imgstyles = {
    height: "30%",
    width:'30%',   
}
    


const ServicePage = () => {

    return (
        <>
            <BannerImage customClass="bannerClass" bannerHeading="Service" bannerContent="See what we offer"/>
            <div style={styles}>
               <p>Under Construction</p> 
               <img src={consImage} style={Imgstyles} />
            </div>
        </>
    )
        
};

export default ServicePage;