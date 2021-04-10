import React, {Component} from 'react'
import {CommonHead} from "../../../components/headings/CommonHead";
import {MiniHead} from "../../../components/headings/MiniHead";
export class Mobile extends Component {
    render() {
        let k = 0;
        let url=process.env.PUBLIC_URL;
        let image = url +`vendor/images/how.jpg`;
        const obj = {
            setA: {
                head: 'Virtual Home Staging',
                text: `Upload photos ( please use professional high resolution photos, not the ones you can take on your phone)`,
                img:image,
            },
            setB: {
                head: 'Interior Design and Support',
                text: `Upload photos (not the ones you can take on your phone)`,
                img:image,
            },
            setC: {
                head: 'Virtual Home Staging',
                text: `Upload photos ( please use professional high resolution photos, not the ones you  can take on your phone)`,
                img:image,
            },
            setD: {
                head: 'Interior Design',
                text: `Upload photos (not the ones you can take on your phone)`,
                img:image,
            }
        }
        return (
            <section class="hiw d-lg-none d-xl-none d-md-none d-block d-sm-block">
                <div class="container">

                    <CommonHead title="How it works ?"/>

                    <div class="row">
                        <div class="col-12">
                            <ul class="hiw_list">
                            {Object.keys(obj).map(h=><li key={k++} class="hiw_items">
                                    <div class="hiw_img">
                                        <img src={obj[h].image} class="img-fluid" alt="how.jpg"/>
                                    </div>
                                    <div class="content">

                                        <MiniHead title={obj[h].title}/>

                                        <div class="texts">
                                            <p>
                                                {obj[h].text}
                                            </p>
                                        </div>
                                    </div>
                                </li>)}
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Mobile
