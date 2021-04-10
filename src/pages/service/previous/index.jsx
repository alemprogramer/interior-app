import React, {Component} from 'react'

export class Previous extends Component {
    render() {
        return (
            <section class="previous_work">
                <div class="container">

                    <div class="row">
                        <div class="col-md-12 col-sm-12 col-sm-12">
                            <div class="cmn_heading text-capitalize text-center">
                                <h3>
                                    Our Previous Work
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-6 col-sm-6 col-12">
                            <div class="content position-relative">
                                <img src="images/previous.jpg" class="img-fluid" alt="previous.jpg"/>
                                <div class="slogan position-absolute text-center text-capitalize">
                                    <h6>Hill View Apartments</h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-6 col-12">
                            <div class="content position-relative">
                                <img src="images/previous2.jpg" class="img-fluid" alt="previous2.jpg"/>
                                <div class="slogan position-absolute text-center text-capitalize">
                                    <h6>Hill View Apartments</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 col-sm-12">
                            <a href="#" class="mini_btn d-inline-block text-capitalize text-center">
                                <h5>view more</h5>
                                <i class="fas fa-long-arrow-alt-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Previous
