import React from 'react';
import Banner from "./banner/bannerDesk";
import BannerMobile from "./banner/bannerMobile";
import Difference from "../difference/difference";
import PreviousWork from "../previousWork";
import DeskService from "./services";
import HowDesk from "../HowItWork/Desk";
import HowMobile from "../HowItWork/Mobile";
import Pricing from "./Pricing/Index";
import Agencies from "./Agencies";
import Pertnership from "./Pertnership";

import array from "../../components/Js";

function Home() {
    

    return (
        <section className="home_page">
            <Banner/>
            <BannerMobile/>
            <Difference
                title='What set us apart from other virtual staging companies'
                rare={differ}/>
            <PreviousWork/>
            <DeskService/>
            <HowDesk title="How it works ?" work={array[3]}/>
            <HowMobile title="How it works ?" work={array[3]}/>
            <Pricing/>
            <Agencies/>
            <Pertnership/>
        </section>
    )
}

export default Home
