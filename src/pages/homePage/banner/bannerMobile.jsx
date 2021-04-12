import React, {Component} from 'react'

export class BannerMobile extends Component {
    render() {
        return (
            <section class="mobile_design d-md-none d-xl-none d-lg-none d-sm-none d-block">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="banner_bg">
                                <img
                                    class="img-fluid"
                                    src="/vendor/images/banner_banner_bg.jpg"
                                    alt="banner_banner_bg.jpg"/>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="banner_content">
                                <h1 class="big_text">Virtual Staging for Real Estate</h1>
                                <p class="text_area">We specialize in transforming photos of vacant properties
                                    into beautiful, virtually staged homes that sells faster and for top dollar.</p>
                                <a href={'/'} class="place_btn">Place Order</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default BannerMobile
