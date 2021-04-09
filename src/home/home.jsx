import React, {Component} from 'react'
import Banner from "./banner/bannerDesk";
import BannerMobile from "./banner/bannerMobile";
import Difference from "./difference/difference";
import PreviousWork from "./previousWork/";
import DeskService from "./services/";
import HowDesk from "./HowItWork/Desk";
import HowMobile from "./HowItWork/Mobile";
import Pricing from "./Pricing/Index";

export class Home extends Component {
    render() {
        return (
            <section className="home_page">
                <Banner/>
                <BannerMobile/>
                <Difference/>
                <PreviousWork/>
                <DeskService/>
                <HowDesk/>
                <HowMobile/>
                <Pricing/>
            </section>
        )
    }
}

export default Home
