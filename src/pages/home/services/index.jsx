import React, {Component} from 'react';
import CommonHead from "../../../components/headings/CommonHead";

export class DeskService extends Component {
    render() {
        const url = process.env.PUBLIC_URL;
        const img = url + 'vendor/images/service.png';
        let k = 0;
        const obj = {
            setA: {
                image: img,
                title: 'Virtual Home Staging',
                text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, provident!',
                link: url,
            },
            setB: {
                image: img,
                title: 'Virtual Interior Design',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ut a officiis nulla eos ea.',
                link: url,
            },
            setC: {
                image: img,
                title: 'Virtual Staging',
                text: 'Lorem ipsum dolor sit, amet, consectetur adipisicing elit. Rem, nostrum, minima? Eveniet dolor corrupti beatae et quasi excepturi vitae. Voluptas perspiciatis ex soluta accusantium harum.',
                link: url,
            }
        }

        return (
            <section
                className="services d-lg-block d-xl-block d-md-block d-none d-sm-none position-relative">
                <div className="slide_icon icon_right position-absolute">
                    <span className="right swiper-button-next">
                        <i className="fas fa-chevron-right"></i>
                    </span>
                </div>
                <div className="slide_icon icon_left position-absolute">
                    <span className="left swiper-button-prev">
                        <i className="fas fa-chevron-left"></i>
                    </span>
                </div>
                <div className="container">
                    <CommonHead title='Our Services'/>
                    <div className="row">
                    {Object.keys(obj).map(m=> <div key={k++} className="col-xl-4">
                            <div className="content">
                                <div className="image">
                                    <img src={obj[m].image} alt="service.png" className="img-fluid"/>
                                </div>
                                <div className="texts">

                                    <div className="title text-center text-capitalize">
                                        <h4>{obj[m].title}</h4>
                                    </div>

                                    <div className="text_part">
                                    <h6>{obj[m].text}</h6>
                                    </div>
                                    <a
                                    href={obj[m].link}
                                        className="mini_btn d-inline-block text-capitalize text-center">
                                        <h5>Learn more</h5>
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
}

export default DeskService
