import React from 'react'
import {Accordion, Card} from 'react-bootstrap';
import CommonHead from "../../components/headings/index";
// import {MiniHead} from "../../components/headings/index";
import obj from "./data";
const Mobile = ({title, frequents, work}) => {
    return (
        <section className="hiw mobile">
            <div className="container">

                <CommonHead title={title}/> {/* <div className="row">
                        <div className="col-12">
                            <ul className="hiw_list">
                            {obj.map(h=><li key={h} className="hiw_items">
                                    <div className="hiw_img">
                                        <img src={h.image} className="img-fluid" alt="how.jpg"/>
                                    </div>
                                    <div className="content">

                                        <MiniHead title={h.title}/>

                                        <div className="texts">
                                            <p>
                                                {h.text}
                                            </p>
                                        </div>
                                    </div>
                                </li>)}
                            </ul>
                        </div>
                    </div> */}
                <div className="row">
                    <div className="col-12 p00">
                        <Accordion defaultActiveKey="0">
                            {obj.map((hit, k) => <Card key={k}>
                                <Accordion.Toggle className='card-header' as={Card.Header} eventKey={`${k}`}>
                                    <span className="content">
                                        <span className="texts">
                                            <p>
                                                {hit.head}
                                            </p>
                                        </span>
                                    </span>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey={`${k}`}>
                                    <Card.Body>
                                        <span className="detail_slide">
                                            <span className="text">
                                                <h6>
                                                    {hit.text}
                                                </h6>
                                            </span>
                                        </span>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>)}
                        </Accordion>
                    </div>
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
        </section>
    )

}

export default Mobile
