import React from 'react';
import CommonHead from "../../../components/headings/index";

function Partner() {
    const url = process.env.PUBLIC_URL;
    let k = 0;
    const image = `${url}/vendor/images/partner.jpg`;
    const obj = {
        setA: {
            img: image,
            title: `Reseller Program`,
            text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, provident!`,
            link: url
        },
        setB: {
            img: image,
            title: `Reseller Program`,
            text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ut a officiis nulla eos ea.`,
            link: url
        },
        setC: {
            img: image,
            title: `Reseller Program`,
            text: `Lorem ipsum dolor sit, amet, consectetur adipisicing elit. Rem, nostrum, minima? Eveniet dolor corrupti beatae et quasi excepturi vitae. Voluptas perspiciatis ex soluta accusantium harum.`,
            link: url
        }
    }
    return (
        <section className="partnership">
            <div className="container">
                <CommonHead title='Partnership Programs'/>
                <div className="row partner_slider">
                    {Object
                        .keys(obj)
                        .map(d =>
                        <div key = { k++ } className = "col-md-4 col-sm-8 offset-sm-2 offset-md-0 offset-lg-0 offset-0 offset-xl-0 col-12" >
                            <div className="partner_slide">
                                    <div className="partner_img">
                                        <img src={obj[d].img} alt="partner.jpg" className="img-fluid"/>
                                    </div>
                                    <div className="partner_text">

                                        <div className="title text-center text-capitalize">
                                            <h5>{obj[d].title}</h5>
                                        </div>

                                        <div className="text_part">
                                            <h6>
                                                {obj[d].text}
                                            </h6>
                                        </div>
                                        <a
                                            href={obj[d].link}
                                            className="mini_btn d-inline-block text-capitalize text-center">
                                            <h5>view more
                                            </h5>
                                            <i className="fas fa-long-arrow-alt-right"></i>
                                        </a>
                                    </div>
                                </div>
                        </div>
                    )}

                </div>
            </div>
        </section>
    )
}

export default Partner
