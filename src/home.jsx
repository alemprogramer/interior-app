import React, {Component} from 'react'
import Banner from "./banner/bannerDesk";
import BannerMobile from "./banner/bannerMobile";
import Difference from "./difference/difference";

export class Home extends Component {
    render() {
        return (
            <section className="home_page">
                <Banner/>
                <BannerMobile/>
                <Difference/>
            </section>
        )
    }
}

export default Home
