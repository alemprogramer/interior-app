import React, { useContext, useEffect, useState } from 'react';
import Banner from "../../components/banner/index";
import Referd from "../../components/referComps";
import CommonHead from "../../components/headings/index";

// Dummy Data
import imgUrl, { url as link, contact as data } from '../../components/data/data';

// Loader

import Loaders from "../../components/contexts/index";
import LoadingBanner from '../../components/loader/banner';

function Contact() {
    const { loader, updateLoader } = useContext(Loaders);
    const [info, setInfo] = useState([]);

    useEffect(() => {
        setInfo(data)
        setTimeout(() => {
            updateLoader(false);
        }, 2000);
        return () => {
            setInfo([])            
            updateLoader(true);
        };
        // eslint-disable-next-line
    }, []);
    return (
        <>
            {loader===false ?
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
                    <Referd Contact={info}/>
                </div>
            </section>
        </section>
    : <LoadingBanner/>}</>
    )
}

export default Contact
