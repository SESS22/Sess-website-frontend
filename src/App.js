import React from 'react';
import { Route, Routes } from 'react-router-dom';

/*  Header & Footer Components   */
import Header from './Components/Header';
import Footer from './Components/Footer';

/*  PAGES   */
import HomePage from './pages/home-page';
import AboutPage, { AboutSection } from './pages/about-page';
import ServicePage from './pages/service-page';
import EventPage from './pages/event-page';
import ContactPage from './pages/contact-page';

// SUBPAGES
//import About, { AboutSection } from "./Components/AboutComponents/About";
import SESS from "./Components/AboutComponents/SESS";
import ExecutivePage from "./Components/AboutComponents/ExecutivePage";

const home =  <HomePage />;
const about = <AboutPage />;
const services = <ServicePage />;
const event =  <EventPage />;
const contact =  <ContactPage />;

function App() {
  return (
    <div>
      <Header />
      <Routes>

      <Route path="/about" element={about}>
          <Route index element={<SESS />} />
          <Route path="Sess" element={<SESS />} />
          <Route path="Executives" element={<ExecutivePage />} />
          <Route path="Policy" element={<AboutSection section="POLICY" />} />
        </Route>
        <Route path="/services" element={services} />
        <Route path="/event" element={event} />
        <Route path="/contact" element={contact} />
        <Route path="/" element={home} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
