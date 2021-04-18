import React from 'react';
import Banner from "../../components/banner/index";
import FrequentComp from "../../components/FrequentComp/index";
import array from "../../components/Js/index";

function Reseller() {
    const link = process.env.PUBLIC_URL;

    return (
        <section className="affliate">
            <Banner
                title="Affiliate Program"
                text="We specialize in transforming photos of vacant properties into  beautiful, virtually staged homes that sells faster and for top dollar."
                urlText='Sign Up'
                img={`${link}/vendor/images/banner_banner_bg.jpg`}
                url={link}
                urlIcon='fa-long-arrow-alt-right' />
            <FrequentComp title="FAQ's" object={array[2]} />
        </section>
    )
}

export default Reseller
