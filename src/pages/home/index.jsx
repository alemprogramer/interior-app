import React from 'react';
import Banner from "./banner/bannerDesk";
import BannerMobile from "./banner/bannerMobile";
import Difference from "../difference/difference";
import PreviousWork from "../previousWork";
import DeskService from "./services";
import HowDesk from "./HowItWork/Desk";
import HowMobile from "./HowItWork/Mobile";
import Pricing from "./Pricing/Index";
import Agencies from "./Agencies";
import Pertnership from "./Pertnership";

function Home() {
    const imgs = `${process.env.PUBLIC_URL}/vendor/images/user.png`
    const item = {
        a: {
            icon: imgs,
            title: 'Professional Home Stagers',
            text: 'We specialize in transfcascasorming photos of vacant properties into beautiful, virtua' +
                'lly staged homes that sells faster and for top dollar.'
        },
        b: {
            icon: imgs,
            title: 'Professasascional Home Stagers',
            text: 'We specialize in trascascansforming photos of vacant properties into beautiful, virtua' +
                'lly staged homes that sells faster and for top dollar.'
        },
        c: {
            icon: imgs,
            title: 'Professional Hocasme Stagers',
            text: 'We specialize in transforming photos of vacant properties into beautiful, virtua' +
                'lly staged homes that sells faster and for top dollar.'
        },
        d: {
            icon: imgs,
            title: 'Professional Home Staascgers',
            text: 'We specialize in transforming photos of vacant properties into beautiful, virtua' +
                'lly staged homes that sells faster and for top dollar.'
        },
        e: {
            icon: imgs,
            title: 'Professional Home Stagers',
            text: 'We specialize in transforming photos of vacant properties into beautiful, virtua' +
                'lly staged homescbf that sells faster and for top dollar.'
        },
        f: {
            icon: imgs,
            title: 'Profesgfdsional Home Stagers',
            text: 'We specialnfgnfgize in transforming photos of vacant properties into beautiful, virtua' +
                'lly staged homes that sells faster and for top dollar.'
        }
    }
        return (
            <section className="home_page">
                <Banner/>
                <BannerMobile/>
                <Difference title='What set us apart from other virtual staging companies' rare={item} />
                <PreviousWork/>
                <DeskService/>
                <HowDesk/>
                <HowMobile/>
                <Pricing/>
                <Agencies/>
                <Pertnership/>
            </section>
        )
}

export default Home
