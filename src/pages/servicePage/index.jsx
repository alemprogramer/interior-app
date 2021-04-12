import React from 'react';
import Banner from "./banner/index";
import Difference from "../difference/difference";
import PreviousWork from "../previousWork/index";
import HowDesk from "../HowItWork/Desk";
import HowMobile from "../HowItWork/Mobile";

import array from "../../components/Js";

function Services() {
    return (
        <section className="service_page">
            <Banner/>
            <Difference title="What we need" need={array[0]} />
            <Difference title="What will you receive" receive={array[1]} />
            <PreviousWork/>
            <HowDesk title="FAQ's" frequents={array[2]} />
            <HowMobile title="FAQ's" frequents={array[2]} />
        </section>
    )
}

export default Services
