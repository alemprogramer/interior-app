import React, {Component} from 'react';
import CommonHead from "../../components/headings/CommonHead";
import MiniHead from "../../components/headings/MiniHead";

export class Desk extends Component {
    render() {
        let k = 0;
        const { title, obj} = this.props;

        return (
            <section className='hiw d-lg-block d-xl-block d-md-block d-none d-sm-none'>
                <div className="container">
                    <CommonHead title={title}/>
                    <div className="row">
                        <div className="col-md-4">
                            <ul className="nav_list">
                                {Object
                                    .keys(obj)
                                    .map(s =>
                                    <li className = "nav_items" key={k++}>
                                        <div className="content">
                                            <MiniHead title={obj[s].head}/>
                                            <div className="texts">
                                                <p>{ obj[s].text }</p>
                                            </div>
                                        </div>
                                    </li>
                                )}
                            </ul>
                        </div>

                        <div className="col-md-8">
                            <div className="image_slide">
                                <div className="slide_parts">
                                    {Object
                                        .keys(obj)
                                        .map(s =>
                                            <img key={k++}
                                                src={obj[s].image}
                                                alt="how.jpg"
                                                className="img-fluid"/>
                                        )}
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
