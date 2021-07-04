import React from 'react';
import Banner from "../../components/banner/index";
import CommonHead from "../../components/headings/CommonHead";
import HowItWork from "../../components/HowItWork/index";
import array from "../../components/Js/index";

function Faq() {
    const link = process.env.PUBLIC_URL;

    return (
        <section className="faq">
            <Banner
                title="What is virtual Staging?"
                miniTitle="FAQ"
                text="We specialize in transforming photos of vacant properties into  beautiful, virtually staged homes that sells faster and for top dollar."
                urlText='Sign Up'
                img={`${link}/vendor/images/banner_banner_bg.jpg`}
                url={link}
                urlIcon='fa-long-arrow-alt-right' />
            
            <section className="contact">
                <div className="container">
                   
                <CommonHead title='Send us your query and we will  contact you' />
                     
                <div className="row">
                        <div className="col-md-8 col-sm-12 offset-md-2">
                            <div className="contact_form">
                                <form>
                                    <div className="form-row">
                                        <div className="form-group pr36 col-12 col-md-6 col-sm-6">
                                            <label htmlFor="NameInput">Your Name</label>
                                            <input type="text" className="form-control" id="NameInput" placeholder="Your Name"/>
                                    </div>
                                            <div className="form-group col-12 col-md-6 col-sm-6">
                                                <label htmlFor="inputEmail4">Work E-mail</label>
                                                <input type="email" className="form-control" placeholder="your@example.com" id="inputEmail4"/>
                                    </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="Query">Your query</label>
                                        <textarea className="form-control" id="Query" defaultValue=""/>
                                            </div>
                                            <button type="submit" className="btn btn-primary">Send Query</button>
                            </form>
                                    </div>
                    </div>
                            </div>
                        </div>
        </section>

            <HowItWork title="FAQ's" frequents={array[2]} />
        </section>
    )
}

export default Faq
