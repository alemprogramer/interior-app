import React, {Component} from 'react';
import CommonHead from "../headings/CommonHead";

export class FaqDesk extends Component {

    render() {
        let k = 0;
        const {title, obj} = this.props;
        return (
            <section className='hiw d-lg-block d-xl-block d-md-block d-none d-sm-none'>
                <div className="container">
                    <CommonHead title={title}/>
                    <div className="row">
                        <div className="col-md-6">
                            <ul className="nav_list">
                                {Object
                                    .keys(obj)
                                    .map(s => <li className="nav_items" key={k++}>
                                        <div className="content">

                                            <div className="texts">
                                                <p>{obj[s].head}</p>
                                            </div>
                                            <span>
                                                <i className="fas fa-angle-right"></i>
                                            </span>

                                        </div>
                                    </li>)}

                            </ul>
                        </div>

                        <div className="col-md-6">

                            <div className="image_list">
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

                        </div>

                    </div>
                </div>
            </section>
        )
    }
}

export default FaqDesk
