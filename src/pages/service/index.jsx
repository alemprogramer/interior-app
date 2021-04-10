import React from 'react';
import Banner from "./banner/index";
import Difference from "../difference/difference";

function Services() {
    const url = process.env.PUBLIC_URL;
    let image = `${url}/vendor/images/vacant.png`;
    const take = {
        setA: {
            title: 'Vacant Photos',
            img: image,
            text: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
            importance: 2,
        },
        setB: {
            title: 'Floor Plans',
            img: image,
            text: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
            importance: 2,
        },
        setC: {
            title: 'Dimensions',
            img: image,
            text: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
            importance: 1,
        }
    };
    const give = {
        setA: {
            title: 'Digitally Staged Photos',
            text: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
            img: image
        },
        setB: {
            title: 'Same Size',
            text: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
            img: image
        },
        setC: {
            title: 'Top Notch Support',
            text: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
            img: image
        }
    }
    return (
        <section className="service_page">
            <Banner/>
            <Difference title="What we need" need={take} />
            <Difference title="What will you receive" receive={give} />
        </section>
    )
}

export default Services
