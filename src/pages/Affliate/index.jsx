import React from 'react';
import Banner from "../../components/banner/index";
import HowItWork from "../../components/HowItWork/index";
// Dummy Data
import imgUrl, { url, faq } from '../../components/data/data';
function Reseller() {
    return (
        <section className="affliate">
            <Banner
                title="Affiliate Program"
                text="We specialize in transforming photos of vacant properties into  beautiful, virtually staged homes that sells faster and for top dollar."
                urlText='Sign Up'
                img={`${imgUrl}/banner_banner_bg.jpg`}
                url={url}
                urlIcon='fa-long-arrow-alt-right' />
            <HowItWork title="FAQ's" frequents={faq} />
        </section>
    )
}

export default Reseller
