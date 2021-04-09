import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap';

export class Banner extends Component {
    render() {
        return (
            <section
                className="banner position-relative d-none d-sm-block d-xl-block d-lg-block d-md-block">
                <div className="container">
                    <div
                        className="banner_content position-absolute"
                        title="Demo For ToolTip Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit dolorum ipsam nisi neque eum doloribus facere aperiam provident odit quidem!">
                        <h1 className="big_title">Virtual Staging for Real Estate</h1>
                        <p className="mini_text">We specialize in transforming photos of vacant
                            properties into beautiful, virtually staged homes that sells faster and for top
                            dollar.</p>
                        <a href="place-order.html" className="btn">Place Order</a>
                    </div>
                </div>
                {/* <div id="carouselExampleIndicators" className="carousel slide position-absolute" data-ride="carousel">
                    <ol className="carousel-indicators position-absolute">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="banner_bg"><img className="img-fluid" src="images/home_banner_bg1.png" alt="home_banner_bg1.png" /> </div>
                        </div>
                        <div className="carousel-item">
                            <div className="banner_bg"><img className="img-fluid" src="images/home_banner_bg1.png" alt="contact.png" /> </div>
                        </div>
                        <div className="carousel-item">
                            <div className="banner_bg"><img className="img-fluid" src="images/home_banner_bg1.png" alt="portfolio.jpg" /> </div>
                        </div>
                        <div className="carousel-item">
                            <div className="banner_bg"><img className="img-fluid" src="images/home_banner_bg1.png" alt="portfolio2.jpg" /> </div>
                        </div>
                    </div>
                </div> */}
                <Carousel className="carousel slide position-absolute">
                    <Carousel.Item>
                        <div className="banner_bg"><img
                            className="img-fluid"
                            src="/vendor/images/home_banner_bg1.png"
                            alt="home_banner_bg1.png"/>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="banner_bg"><img
                            className="img-fluid"
                            src="/vendor/images/home_banner_bg1.png"
                            alt="home_banner_bg1.png"/>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="banner_bg"><img
                            className="img-fluid"
                            src="/vendor/images/home_banner_bg1.png"
                            alt="home_banner_bg1.png"/>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="banner_bg"><img
                            className="img-fluid"
                            src="/vendor/images/home_banner_bg1.png"
                            alt="home_banner_bg1.png"/>
                        </div>
                    </Carousel.Item>
                </Carousel>

            </section>
        )
    }
}

export default Banner
