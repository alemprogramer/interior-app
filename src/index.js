import React,{Suspense,lazy} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./vendor/css/all.min.css";
import "./vendor/css/menu2.css";
import "./vendor/css/style.css";
import reportWebVitals from './reportWebVitals';
import RouteTop, { ScrollToTop} from './components/scrollToTop';
import NavBar from './components/navbar/main';
const Footer = lazy(()=> import('./components/footer/Footer'));

ReactDOM.render(
    <React.StrictMode>
    <Router>
    <RouteTop />
    <ScrollToTop/>
    <NavBar/>
    <App/>
    <Suspense fallback={<p>Please wait...</p>} >
    <Footer/>
    </Suspense>
    </Router>

</React.StrictMode>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function to
// log results (for example: reportWebVitals(console.log)) or send to an
// analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
