import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/navbar/Navbar';
import HeroSection from './component/navbar/HeroSection';
import Footer from './component/navbar/Footer';
import Reservation from './component/navbar/Reservation';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <HeroSection/>
    <Footer/>
    <Reservation/>
  </React.StrictMode>
);


