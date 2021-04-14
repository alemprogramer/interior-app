import React from 'react';
import Banner from "../banner/index";
import Difference from "../difference/difference";
import PreviousWork from "../previousWork/index";
import HowDesk from "../HowItWork/Desk";
import HowMobile from "../HowItWork/Mobile";

import array from "../../components/Js";

function Services() {
    return (
        <section className="service_page">
            <Banner title='Virtual Home Staging' text='We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.' price='500' img={`${process.env.PUBLIC_URL}/vendor/images/banner_banner_bg.jpg`} url={process.env.PUBLIC_URL} buttonText='Place Order' />
            <Difference title="What we need" need={array[0]} />
            <Difference title="What will you receive" receive={array[1]} />
            <PreviousWork/>
            <HowDesk title="FAQ's" frequents={array[2]} />
            <HowMobile title="FAQ's" frequents={array[2]} />
        </section>
    )
}

export default Services
