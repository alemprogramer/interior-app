import React, {Component} from 'react'

export class Mobile extends Component {
    render() {
        const { title, text, price, link, image } = this.props;
        return (
            <section className="mobile_design d-md-none d-xl-none d-lg-none d-sm-none d-block">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="banner_bg">
                                <img
                                    className="img-fluid"
                                    src={image}
                                    alt="banner_banner_bg.jpg"/>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="banner_content">
                                {/* <h1>Virtual Home <br /> Staging</h1> */}
                                <h1>{title}</h1>
                                <p className="text_area">{text}</p>
                                <div className="price_tag">
                                    <h3>$ {price}</h3>
                                    <p>per photo</p>
                                </div>
                                <div className="butn_part">
                                    <a href={link} className="place_btn">Place Order</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Mobile
