import React from 'react';
import Banner from "../../components/banner/index";
import Difference from "../../components/difference/difference";
import PreviousWork from "../../components/previousWork/index";
import HowItWork from "../../components/HowItWork/index";


import imgUrl, { url,give,take,faq } from "../../components/data/data.js";

function Services() {
    return (
        <section className="service_page">
            <Banner title='Virtual Home Staging' text='We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.' price='500' img={`${imgUrl}/banner_banner_bg.jpg`} url={url} buttonText='Place Order' />
            <Difference title="What we need" need={take} />
            <Difference title="What will you receive" receive={give} />
            <PreviousWork/>
            <HowItWork title="FAQ's" frequents={faq} />
        </section>
    )
}

export default Services
