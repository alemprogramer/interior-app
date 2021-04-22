import React, {Component} from 'react'
import CommonHead from "../../../components/headings/CommonHead";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class DeskService extends Component {
    constructor(props) {
        super(props);
        this.next = this
            .next
            .bind(this);
        this.previous = this
            .previous
            .bind(this);
    }
    next() {
        this
            .slider
            .slickNext();
    }
    previous() {
        this
            .slider
            .slickPrev();
    }
    render() {
        const url = process.env.PUBLIC_URL;
        const img = url + 'vendor/images/service.png';
        let k = 0;

        const obj = {
            setA: {
                image: img,
                title: 'Virtual Home Staging',
                text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, provident!`,
                link: '/service'
            },
            setB: {
                image: img,
                title: 'Virtual Interior Design',
                text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ut a officiis nulla eos ea.`,
                link: '/service'
            },
            setC: {
                image: img,
                title: 'Virtual Staging',
                text: `Lorem ipsum dolor sit, amet, consectetur adipisicing elit. Rem, nostrum, minima? Eveniet dolor corrupti beatae et quasi excepturi vitae. Voluptas perspiciatis e x soluta accusantium harum.`,
                link: '/service'
            },
            ssetA: {
                image: img,
                title: 'Virtual Home Staging',
                text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, provident!`,
                link: '/service'
            },
            seftB: {
                image: img,
                title: 'Virtual Interior Design',
                text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ut a officiis nulla eos ea.`,
                link: '/service'
            },
            sestC: {
                image: img,
                title: 'Virtual Staging',
                text: `Lorem ipsum dolor sit, amet, consectetur adipisicing elit. Rem, nostrum, minima? Eveniet dolor corrupti beatae et quasi excepturi vitae. Voluptas perspiciatis e x soluta accusantium harum.`,
                link: '/service'
            },
            seetA: {
                image: img,
                title: 'Virtual Home Staging',
                text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, provident!`,
                link: '/service'
            },
            setwB: {
                image: img,
                title: 'Virtual Interior Design',
                text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ut a officiis nulla eos ea.`,
                link: '/service'
            },
            setgC: {
                image: img,
                title: 'Virtual Staging',
                text: `Lorem ipsum dolor sit, amet, consectetur adipisicing elit. Rem, nostrum, minima? Eveniet dolor corrupti beatae et quasi excepturi vitae. Voluptas perspiciatis e x soluta accusantium harum.`,
                link: '/service'
            }
        }

        var settings = {
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 500,
            infinite: true,
            swipeToSlide: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                }, {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }, {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        return (
            <section
                className="services d-lg-block d-xl-block d-md-block d-none d-sm-none position-relative">
                <div className="slide_icon icon_right position-absolute">
                    <span className="right swiper-button-next" onClick={this.next}>
                        <i className="fas fa-chevron-right"></i>
                    </span>
                </div>
                <div className="slide_icon icon_left position-absolute">
                    <span className="left swiper-button-prev" onClick={this.previous}>
                        <i className="fas fa-chevron-left"></i>
                    </span>
                </div>
                <div className="container">
                    <CommonHead title='Our Services'/>
                    <div className="row">
                        <Slider ref={c => (this.slider = c)} {...settings}>
                            {Object
                                .keys(obj)
                                .map(m => <div key={k++} className='col-xl-12'>
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
                                </div>)}
                        </Slider>
                    </div>

                </div>
            </section>
        )
    }
}

export default DeskService
