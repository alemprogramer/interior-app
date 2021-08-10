import React, {useState, useEffect} from 'react';
// dummy data
import { services } from '../../../components/data/data';
import CommonHead from "../../../components/headings/index";

function Mobile() {
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(services);
    }, []);
    return (
        <section
            className="services position-relative">
            <div className="container-fluid">
                <CommonHead title='Our Services'/>
                <div className="row">
                    <div className="col-md-12">
                        <div className="service_sliders">
                            <div className="serv_slide">
                                <div className="content">
                                    <div className="image">
                                        <img src="images/service.png" alt="images/service.png" className="img-fluid"/>
                                    </div>
                                    <div className="texts">
                                        {/* this is mini heading */}
                                        <div className="title text-center text-capitalize">
                                            <h4>Virtual Home Staging</h4>
                                        </div>
                                        {/* mini heading ends here */}
                                        <div className="text_part">
                                            <h6>PadStyler is the only Photorealistic 3D Visual Marketing Platform backed by
                                                research to help you sell or rent properties faster</h6>
                                        </div>
                                        <a href="link" className="mini_btn d-inline-block text-capitalize text-center">
                                            <h5>Learn More</h5>
                                            <i className="fas fa-long-arrow-alt-right"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Mobile
