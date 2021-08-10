import React, {Component} from 'react'
import {Link} from 'react-router-dom';

class Blogger extends Component {
    render() {
        const {
            date,
            link,
            text,
            writer,
            avatar,
            title,
            img,
            loading
        } = this.props;
        if (loading) {
            return <h2>Loading...</h2>
        }
        return (
            <div className="col-md-4 col-sm-4 col-12">
                <div className="partner_slide">
                    <div className="partner_img">
                        <img src={img} alt="partner.jpg" className="img-fluid"/>
                    </div>
                    <div className="partner_text">

                        <div className="title text-center text-capitalize">
                            <h5>
                                {title}
                            </h5>
                        </div>

                        <div className="blogger">
                            <div className="imgs float-left">
                                <img src={avatar} alt="blogger.png" className="img-fluid"/>
                            </div>
                            <h6>{writer}</h6>
                            <p>
                                {new Date(date).toLocaleDateString()}
                            </p>
                        </div>
                        <div className="text_part">
                            <h6>
                                {text}
                            </h6>
                        </div>
                        <Link to={`/blog-open/${link}`} className="mini_btn d-inline-block text-capitalize text-center">
                            <h5>view more
                            </h5>
                            <i className="fas fa-long-arrow-alt-right"></i>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Blogger
