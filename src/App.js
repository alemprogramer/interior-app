import React, {Suspense, lazy, createContext} from 'react';
import {Switch, Route, BrowserRouter as Router} from "react-router-dom";
import Home from "./pages/homePage";
import Service from "./pages/services";
import Contact from "./pages/contact";
import Refer from "./pages/referrer";
import Affliate from "./pages/Affliate/index";
import Faq from "./pages/Faq/index";
import Portfolio from "./pages/portfolio/index";
import Blog from "./pages/blog/index";
import BlogOpen from "./pages/blogOpen/index";
import Reseller from "./pages/reseller/index";
import RouteTop, {ScrollToTop} from './components/scrollToTop';
import NavBar from './components/navbar/main';
const Footer = lazy(() => import ('./components/footer/Footer'));

const loaders= createContext(true);
function App() {
    return ( <> 
    <Router>
        <RouteTop/>
        <ScrollToTop/>
        <NavBar/>
        <Switch>
            <Route path='/' exact>
            <Home/>
            </Route>
            <Route path='/service'>
            <Service/>
            </Route>
            <Route path='/contact'>
            <Contact/>
            </Route>
            <Route path='/refer'>
            <Refer/>
            </Route>
            <Route path='/affliate'>
            <Affliate/>
            </Route>
            <Route path='/faq'>
            <Faq/>
            </Route>
            <Route path='/portfolio'>
            <Portfolio/>
            </Route>
            <Route path='/blog'>
            <Blog/>
            </Route>
            <Route path='/blog-open/:url' exact>
                <BlogOpen/>
            </Route>
            <Route path='/reseller'>
            <Reseller/>
            </Route>
        </Switch>
        <Suspense fallback={< p > Please wait ...</p>}>
            <Footer/>
        </Suspense>
    </Router> 
    </>
    )
}

export default App;

export {loaders};