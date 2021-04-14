import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LargeNavbar from "./components/navbar/LargeNavbar";
import SmallNavbar from "./components/navbar/SmallNavbar";
import Footer from "./components/footer/Footer";
/*
import Home from "./pages/homePage"; 
import Service from "./pages/services";
import Contact from "./pages/contact";
import Refer from "./pages/referrer";
import Reseller from "./pages/reseller/index";
import Affliate from "./pages/Affliate/index";
*/
import Faq from "./pages/Faq/index";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./vendor/css/all.min.css";
import "./vendor/css/menu2.css";
import "./vendor/css/style.css";

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
    <LargeNavbar/>
    <SmallNavbar/> 
    {/*
    <Home/>
    <Service/>
    <Contact/>
      <Refer/>
    <Reseller/>
    <Affliate/>
    <Faq/>
      */}
    <App/>
    <Footer/>

</React.StrictMode>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function to
// log results (for example: reportWebVitals(console.log)) or send to an
// analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
