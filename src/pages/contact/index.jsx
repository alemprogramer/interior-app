import React from 'react';
import Banner from "../../components/banner/index";
import Referd from "../../components/referComps";
import CommonHead from "../../components/headings/CommonHead";

function Contact() {
    const link = process.env.PUBLIC_URL;
    const obj = {
        a: {
            image: `${link}/vendor/images/number.png`,
            text: `+91 - 9999999999`
        },
        b: {
            image: `${link}/vendor/images/email.png`,
            text: `yourbrand@email.com`
        },
        c: {
            image: `${link}/vendor/images/email.png`,
            text: `yourbrand@email.com`
        }
    }
    return (
        <section className="our_location">
            <Banner
                title='Bangalore, India'
                miniTitle='Office Location'
                text='112 E Pecan St. #1135, San Antonio, TX 78205'
                urlText='Show on Google Maps'
                img={`${link}/vendor/images/banner_banner_bg.jpg`}
                url={link}
                urlIcon='fa-long-arrow-alt-right'/>
            <section className="contact">
                <div className="container">
                    <CommonHead title='Reach out to'/>
                    <Referd Contact={obj}/>
                </div>
            </section>
        </section>
    )
}

export default Contact
