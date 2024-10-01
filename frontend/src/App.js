import './App.css';
import { Navbar } from './componnents/Navbar/Navbar';
import { Hero } from './componnents/Hero/Hero';
import { Section2 } from './componnents/Section2/Section2';
import { Section3 } from './componnents/Section3/Section3';
import { Section4 } from './componnents/Section4/Section4';
import { Section5 } from './componnents/Section5/Section5';
import { Section6 } from './componnents/Section6/Section6';
import { Section7 } from './componnents/Section7/Section7';
import { Section8 } from './componnents/Section8/Section8';
import Section9 from './componnents/Section9/Section9';
import { Section10 } from './componnents/Section10/Section10';
import { Foooter } from './componnents/Footer/Foooter';
import { About } from './componnents/About/About';
import { ContactUs } from './componnents/ContactUs/ContactUs';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Define the Home component that contains all the sections
const Home = () => {
  return (
    <>
      <Hero />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 />
    </>
  );
};

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />            
            <Route path="/about" element={<About />} />      
            <Route path="/ContactUs" element={<ContactUs/>} />
          </Routes>
        </main>
        <Foooter />
      </Router>
    </div>
  );
}

export default App;
