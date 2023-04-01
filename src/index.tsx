import React from 'react';
import ReactDOM from 'react-dom/client';
import './Sass/main.scss';
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Services from "./Components/Services";
import Tours from "./Components/Tours";
import reportWebVitals from './reportWebVitals';
import Footer from "./Components/Footer";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Tours />
        <Footer />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
