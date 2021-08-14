import React,{useState, useEffect, Suspense, lazy, useContext} from 'react';

import Difference from "../../components/difference/difference";
import PreviousWork from "../../components/previousWork/index";
import HowItWork from "../../components/HowItWork/index";
import Services from './services/main';
import Pricing from "./Pricing/Index";
import Agencies from "./Agencies";
import Pertnership from "./Pertnership";

import { loaders } from "../../App.js";

// Dummy Data

import { different, howItWork, services, previousWork, agency, partner } from "../../components/data/data";

const Banner=lazy(()=>import('./banner/main'))
function Home() {

const [dif, setDif] = useState([]);
const [hiw, setHiw] = useState([]);
const [serv, setServ] = useState([]);
const [prevWork, setprevWork] = useState([]);
const [agent, setAgent] = useState([]);
const [partnership, setPartnership] = useState([]);

// Global Loader

const loading = useContext(loaders);
const [loader, setLoader] = useState(loading);

useEffect(() => {
    setDif(different);
    setHiw(howItWork);
    setServ(services);
    setprevWork(previousWork);
    setAgent(agency);
    setPartnership(partner);
    setTimeout(() => {
        setLoader(false);
    }, 2000);
    return () => {
        setLoader(true);
    };
    // eslint-disable-next-line
}, []);

    return (
        <>
{loader===true ? 'Loading...':
        <section className="home_page">
        <Suspense fallback={<p>Please Wait...</p>}>
            <Banner/>
        </Suspense>
        <Difference
            title='What set us apart from other virtual staging companies'
                rare={dif}/>
            <PreviousWork data={prevWork}/>
            <Services data={serv} />
        {/* Incomplete Mobile Part */}
            <HowItWork title="How it works ?" work={hiw}/>
        <Pricing/>
            <Agencies data={agent} />
            <Pertnership data={partnership} />
        </section>
}
</>
    )
}

export default Home
