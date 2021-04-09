import React, {Component} from 'react';
import CommonHead from "../../headings/CommonHead";
import MiniHead from "../../headings/MiniHead";

export class Desk extends Component {
    render() {
        let k = 0;
        const obj = {
            setA: {
                head: 'Virtual Home Staging',
                text: 'Upload photos ( please use professional high resolution photos, not the ones you' +
                        ' can take on your phone)'
            },
            setB: {
                head: 'Interior Design and Support',
                text: 'Upload photos (not the ones you can take on your phone)'
            },
            setC: {
                head: 'Virtual Home Staging',
                text: 'Upload photos ( please use professional high resolution photos, not the ones you' +
                        ' can take on your phone)'
            },
            setD: {
                head: 'Interior Design',
                text: 'Upload photos (not the ones you can take on your phone)'
            }
        }
        return (
            <section class="hiw d-lg-block d-xl-block d-md-block d-none d-sm-none">
                <div class="container">
                    <CommonHead title="How it works ?"/>
                    <div class="row">
                        <div class="col-md-4">
                            <ul class="nav_list">
                            {Object.keys(obj).map(s=><li key={k++} class="nav_items">
                                    <div class="content">

                                    <MiniHead title={obj[s].head}/>

                                        <div class="texts">
                                        <p>{obj[s].text}</p>
                                        </div>
                                    </div>
                                </li>)}
                                
                            </ul>
                        </div>
                        <div class="col-md-8">
                            <div class="image_slide">
                                <div class="slide_parts">
                                    <img
                                        src={process.env.PUBLIC_URL + "vendor/images/how.jpg"}
                                        alt="how.jpg"
                                        class="img-fluid"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Desk
