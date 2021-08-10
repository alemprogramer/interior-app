import React,{Suspense,lazy} from 'react';


import Difference from "../../components/difference/difference";
import PreviousWork from "../../components/previousWork/index";
import HowItWork from "../../components/HowItWork/index";
import Services from './services/main';
import Pricing from "./Pricing/Index";
import Agencies from "./Agencies";
import Pertnership from "./Pertnership";

import { different, howItWork } from "../../components/data/data";

const Banner=lazy(()=>import('./banner/main'))
function Home() {

    return (
        <section className="home_page">
        <Suspense fallback={<p>Please Wait...</p>}>
            <Banner/>
        </Suspense>
        <Difference
            title='What set us apart from other virtual staging companies'
                rare={different}/>
        <PreviousWork/>
            <Services/>
        {/* Incomplete Mobile Part */}
            <HowItWork title="How it works ?" work={howItWork}/>
        <Pricing/>
        <Agencies/>
        <Pertnership/>
        </section>
    )
}

export default Home
