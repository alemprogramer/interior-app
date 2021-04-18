import React from 'react';
import Banner from "./banner/bannerDesk";
import BannerMobile from "./banner/bannerMobile";
import Difference from "../../components/difference/difference";
import PreviousWork from "../../components/previousWork/index";
import DeskService from "./services";
import HowItWork from "../../components/HowItWork/index";
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
                rare={array[3]}/>
            <PreviousWork/>
            <DeskService/>
            <HowItWork title="How it works ?" object={array[4]}/>
            <Pricing/>
            <Agencies/>
            <Pertnership/>
        </section>
    )
}

export default Home
