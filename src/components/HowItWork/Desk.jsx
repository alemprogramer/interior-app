import React, {Component} from 'react';
import CommonHead from "../../components/headings/CommonHead";
import MiniHead from "../../components/headings/MiniHead";

export class Desk extends Component {
    render() {
        let k = 0;
        const {title, work, frequents} = this.props;
        let obj = {
            ...work,
            ...frequents
        };
        return (
            <section className='hiw d-lg-block d-xl-block d-md-block d-none d-sm-none'>
                <div className="container">
                    <CommonHead title={title}/>
                    <div className="row">
                        <div
                            className={frequents
                            ? "col-md-6"
                            : "col-md-4"}>
                            <ul className="nav_list">
                                {Object
                                    .keys(obj)
                                    .map(s =>< li className = "nav_items" key = {
                                        k++
                                    } > <div className="content">

                                        {work
                                            ? <MiniHead title={obj[s].head}/>
                                            : ''}

                                        <div className="texts">
                                            <p>{work
                                                    ? obj[s].text
                                                    : obj[s].head}</p>
                                        </div>
                                        {frequents
                                            ? <span>
                                                    <i className="fas fa-angle-right"></i>
                                                </span>
                                            : ''}
                                    </div> </li>)}

                            </ul>
                        </div>

                        <div
                            className={frequents
                            ? "col-md-6"
                            : "col-md-8"}>

                            {frequents
                                ? <div className="image_list">
                                        {Object
                                            .keys(obj)
                                            .map(s => <div key={k++} className="detail_slide">
                                                <div className="head">
                                                    <h5>
                                                        {obj[s].head}
                                                    </h5>
                                                </div>
                                                <div className="text">
                                                    <h6>
                                                        {obj[s].text}
                                                    </h6>
                                                </div>
                                            </div>)}
                                    </div>
                                : <div className="image_slide">

                                    <div className="slide_parts">
                                    <img
                                        src={process.env.PUBLIC_URL + "vendor/images/how.jpg"}
                                        alt="how.jpg"
                                        className="img-fluid"/>
                                        </div>
                                </div>}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Desk
