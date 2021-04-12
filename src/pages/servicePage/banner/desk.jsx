import React, {Component} from 'react'

export class Banner extends Component {
    render() {
        const { title, text, price, link, image}=this.props;
        return (
            <section className="banner d-none d-sm-block d-xl-block d-lg-block d-md-block">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-6">
                            <div className="banner_content">
                                <h1>{title}</h1>
                                <p className="text_area">{text}</p>
                                <div className="price_tag">
                                    <h3>$ {price}</h3>
                                    <p>per photo</p>
                                </div>
                                <a href={link} className="place_btn ">Place Order</a>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="banner_bg">
                                <img
                                    className="img-fluid"
                                    src={image}
                                    alt="banner_banner_bg.jpg"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Banner
