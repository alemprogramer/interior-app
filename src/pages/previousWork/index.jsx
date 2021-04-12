import React, {Component} from 'react';
import CommonHead from "../../components/headings/CommonHead";

export class PreviousWork extends Component {
    render() {
        const img = process.env.PUBLIC_URL + 'vendor/images/';
        let k = 0;
        const obj = {
            setA: {
                image: img + "previous.jpg",
                title: 'Hill View Apartments'
            },
            setB: {
                image: img + "previous2.jpg",
                title: 'Residential Apartments'
            }
        }
        return (
            <section className="previous_work">
                <div className="container">
                    <CommonHead title='Our Previous Work'/>
                    <div className="row">
                        {Object
                            .keys(obj)
                            .map(d => <div key={k++} className="col-md-6 col-sm-6 col-12">
                                <div className="content position-relative">
                                    <img src={obj[d].image} className="img-fluid" alt="previous.jpg"/>
                                    <div className="slogan position-absolute text-center text-capitalize">
                                        <h6>{obj[d].title}</h6>
                                    </div>
                                </div>
                            </div>)}
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <a
                                href={process.env.PUBLIC_URL}
                                className="mini_btn d-inline-block text-capitalize text-center">
                                <h5>view more
                                </h5>
                                <i className="fas fa-long-arrow-alt-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default PreviousWork
