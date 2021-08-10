import React from 'react';
import Banner from "../../components/banner/index";
import Referd from "../../components/referComps";
import CommonHead from "../../components/headings/CommonHead";
import imgUrl, { url as link, contact } from '../../components/data/data';

function Contact() {
    return (
        <section className="our_location">
            <Banner
                title='Bangalore, India'
                miniTitle='Office Location'
                text='112 E Pecan St. #1135, San Antonio, TX 78205'
                urlText='Show on Google Maps'
                img={`${imgUrl}/banner_banner_bg.jpg`}
                url={link}
                urlIcon='fa-long-arrow-alt-right'/>
            <section className="contact">
                <div className="container">
                    <CommonHead title='Reach out to'/>
                    <Referd Contact={contact}/>
                </div>
            </section>
        </section>
    )
}

export default Contact
