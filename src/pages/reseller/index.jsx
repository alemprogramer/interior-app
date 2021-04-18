import React from 'react';
import Banner from "../../components/banner/index";
import CommonHead from "../../components/headings/CommonHead";
import HowItWork from "../../components/HowItWork/index";
import array from "../../components/Js/index";

function Reseller() {
    const link = process.env.PUBLIC_URL;

    function context() {
        return {__html: "<p>As a VSS reseller you'll be in excellent hands. We have a strategic process with an in-house design team that allows us to create high quality, ultra-realistic virtually staged photos quickly. <br/> <br/> This means that we can scale with your business, whether you're just starting out or need several thousand photos completed. We provide virtual staging fulfillment services for the majority of the virtual staging industry. <br/> <br/> With nearly a decade of research behind us, we've developed a design strategy that will provide your customers with the best virtually staged photos, a high quality furniture database, fast turn around times and most importantly photos that provide results.</p>"};
    }

    return (
        <section className="reseller">
            <Banner
                title="Reseller Program"
                text="We specialize in transforming photos of vacant properties into  beautiful, virtually staged homes that sells faster and for top dollar."
                urlText='Contact Us'
                img={`${link}/vendor/images/banner_banner_bg.jpg`}
                url={link}
                urlIcon='fa-long-arrow-alt-right'/>
            <section className="contact">
                <div className="container">
                    <CommonHead
                        title={[
                        `Why choose our reseller`, <br key= '150'/>,
                        ` program?`
                    ]}/>
                    <div className="row">
                        <div className="col-md-8 col-sm-8 offset-md-2">
                            <div className="contact_form" dangerouslySetInnerHTML={context()}></div>
                        </div>
                    </div>
                </div>
            </section>
            <HowItWork title="How to become a reseller?" frequents={array[2]} />
        </section>
    )
}

export default Reseller
