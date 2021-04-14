import React from 'react';
import CommonHead from "../../../components/headings/CommonHead";

function Agencies() {
    let url = process.env.PUBLIC_URL;
    let image = url + `vendor/images/`;
    const obj = {
        setA: {
            img: `${image}/logo.png`
        },
        setB: {
            img: `${image}/logo2.png`
        },
        setC: {
            img: `${image}/logo3.png`
        },
        setD: {
            img: `${image}/logo4.png`
        },
        setE: {
            img: `${image}/logo5.png`
        },
        setF: {
            img: `${image}/logo6.png`
        }
    }
    let k = 0;
    return (
        <section className="agencies d-none d-md-block d-lg-block d-xl-block">
            <div className="container">
                <CommonHead title="Our trusted agencies"/>
                <div className="row">
                    <div className="col-md-12">
                        <div className="logos">
                            <div className="row">
                                {Object
                                    .keys(obj)
                                    .map(s => <div key={k++} className="col-md-2">
                                        <div className="sliding_parts">
                                            <img src={obj[s].img} alt="logo.png" className="img-fluid"/>
                                        </div>
                                    </div>)}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Agencies
