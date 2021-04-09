import React, {Component} from 'react'
import { CommonHead } from "../../headings/CommonHead";
import { MiniHead } from "../../headings/MiniHead";
export class Mobile extends Component {
    render() {
        return (
            <section class="hiw d-lg-none d-xl-none d-md-none d-block d-sm-block">
                <div class="container">

                    <CommonHead title="How it works ?"/>

                    <div class="row">
                        <div class="col-12">
                            <ul class="hiw_list">
                                <li class="hiw_items">
                                    <div class="hiw_img">
                                        <img src="images/how.jpg" class="img-fluid" alt="how.jpg"/>
                                    </div>
                                    <div class="content">

                                        <MiniHead title="Virtual Home Staging" />

                                        <div class="texts">
                                            <p>
                                                Upload photos (please use professional high resolution photos, not the ones you
                                                can take on your phone)
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li class="hiw_items">
                                    <div class="hiw_img">
                                        <img src="images/how.jpg" class="img-fluid" alt="how.jpg"/>
                                    </div>
                                    <div class="content">

                                        <MiniHead title="Virtual Home Staging" />

                                        <div class="texts">
                                            <p>
                                                Upload photos (please use professional high resolution photos, not the ones you
                                                can take on your phone)
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li class="hiw_items">
                                    <div class="hiw_img">
                                        <img src="images/how.jpg" class="img-fluid" alt="how.jpg"/>
                                    </div>
                                    <div class="content">

                                        <MiniHead title="Virtual Home Staging" />

                                        <div class="texts">
                                            <p>
                                                Upload photos (please use professional high resolution photos, not the ones you
                                                can take on your phone)
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Mobile
