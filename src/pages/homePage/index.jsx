import React,{Suspense,lazy} from 'react';


import Difference from "../../components/difference/difference";
import PreviousWork from "../../components/previousWork/index";
import DeskService from "./services";
import HowItWork from "../../components/HowItWork/index";

/* import Desk from "./Desk";
import Desk from "./Desk"; */
import Pricing from "./Pricing/Index";
import Agencies from "./Agencies";
import Pertnership from "./Pertnership";

import array from "../../components/Js";

const Banner=lazy(()=>import('./banner/main'))
function Home() {

    return (
        <section className="home_page">
        <Suspense fallback={<p>Please Wait...</p>}>
            <Banner/>
        </Suspense>
            {/* <BannerMobile/> */}
            <Difference
                title='What set us apart from other virtual staging companies'
                rare={array[3]}/>
            <PreviousWork/>
            <DeskService/>
            {/* Incomplete Mobile Part */}
            <HowItWork title="How it works ?" work={array[4]}/>
            <Pricing/>
            <Agencies/>
            <Pertnership/>
        </section>
    )
}

export default Home
