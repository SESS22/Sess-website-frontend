import React from 'react';
import BannerImage from '../Components/BannerImage';
import Wrapper from "../assets/styles/ContactWrappers/Contact";
import ContactForm from '../Components/ContactComponents.jsx/ContactForm';
import ContactLinks from '../Components/ContactComponents.jsx/ContactLinks';


const ContactPage = () => {

    return (
        <>
            <BannerImage customClass="eventClass" bannerHeading="Contact" bannerContent="Do you have any questions? Don't hesitate to contact us."/>
            <Wrapper>
                <ContactForm />
                <ContactLinks />
            </Wrapper>
        </>
    )
        
};

export default ContactPage;