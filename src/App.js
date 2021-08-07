import React, {Suspense, lazy} from 'react';
import {Switch, Route,BrowserRouter as Router} from "react-router-dom";
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

function App() {
    return ( 
    <>
        <Router>
            <RouteTop/>
            <ScrollToTop/>
            <NavBar/>
            <Switch>

                <Route path='/' exact component={Home}/>
                <Route path='/service' component={Service}/>
                <Route path='/contact' component={Contact}/>
                <Route path='/refer' component={Refer}/>
                <Route path='/affliate' component={Affliate}/>
                <Route path='/faq' component={Faq}/>
                <Route path='/portfolio' component={Portfolio}/>
                <Route path='/blog' component={Blog}/>
                <Route path='/blog-open/:url' exact>
                    <BlogOpen/>
                </Route>
                <Route path='/reseller' component={Reseller}/>
            </Switch>
            <Suspense fallback={< p > Please wait ...</p>}>
                <Footer/>
            </Suspense>
        </Router> 
    </>
    )
}

export default App;