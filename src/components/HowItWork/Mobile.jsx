import React, {Component} from 'react'
import {CommonHead} from "../../components/headings/CommonHead";
import {MiniHead} from "../../components/headings/MiniHead";
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
            <section className="hiw d-lg-none d-xl-none d-md-none d-block d-sm-block">
                <div className="container">

                    <CommonHead title="How it works ?"/>

                    <div className="row">
                        <div className="col-12">
                            <ul className="hiw_list">
                            {Object.keys(obj).map(h=><li key={k++} className="hiw_items">
                                    <div className="hiw_img">
                                        <img src={obj[h].image} className="img-fluid" alt="how.jpg"/>
                                    </div>
                                    <div className="content">

                                        <MiniHead title={obj[h].title}/>

                                        <div className="texts">
                                            <p>
                                                {obj[h].text}
                                            </p>
                                        </div>
                                    </div>
                                </li>)}
                            </ul>
                        </div>
                    </div>
                    {/* <div className="row">
                        <div className="col-12 p00">
                            <div className="accordion" id="accordionExample">
                                <div className="card">
                                    <a className="card-header" id="FirstCard" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <span className="content">
                                            <span className="texts">
                                                <p>
                                                    What are the pricing packages for the virtual staging service?
                                            </p>
                                            </span>
                                        </span>
                                    </a>
                                    <div id="collapseOne" className="collapse show" aria-labelledby="FirstCard" data-parent="#accordionExample">
                                        <div className="card-body">
                                            <span className="detail_slide">
                                                <span className="text">
                                                    <h6>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat, lectus quis efficitur consectetur, turpis erat porta magna, quis tincidunt mi sem in enim. Integer cursus eu metus non eleifend. Maecenas vel euismod enim. Morbi dignissim dolor justo, eu dignissim mauris pellentesque nec. Quisque leo nulla, suscipit sed sem in, pulvinar tristique enim. In non placerat neque. Duis pharetra velit in sapien feugiat, vitae viverra ligula condimentum. Proin eget mauris leo.
                                                </h6>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <a className="collapsed card-header" id="SecondCard" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        <span className="content">
                                            <span className="texts">
                                                <p>
                                                    What are the pricing packages for the virtual staging service?
                                            </p>
                                            </span>
                                        </span>
                                    </a>
                                    <div id="collapseTwo" className="collapse" aria-labelledby="SecondCard" data-parent="#accordionExample">
                                        <div className="card-body">
                                            <span className="detail_slide">
                                                <span className="text">
                                                    <h6>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat, lectus quis efficitur consectetur, turpis erat porta magna, quis tincidunt mi sem in enim. Integer cursus eu metus non eleifend. Maecenas vel euismod enim. Morbi dignissim dolor justo, eu dignissim mauris pellentesque nec. Quisque leo nulla, suscipit sed sem in, pulvinar tristique enim. In non placerat neque. Duis pharetra velit in sapien feugiat, vitae viverra ligula condimentum. Proin eget mauris leo.
                                                </h6>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </section>
        )
    }
}

export default Mobile
