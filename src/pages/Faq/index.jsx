import React, {useState, useEffect, useContext } from 'react';
import Banner from "../../components/banner/index";
import CommonHead from "../../components/headings/index";
import HowItWork from "../../components/HowItWork/index";
// Dummy Data
import imgUrl, {url, faq} from '../../components/data/data';
import Loaders from '../../components/contexts';
import LoadingBanner from '../../components/loader/banner';

function Faq() {
    const [state, setstate] = useState([])
    const { loader, updateLoader } = useContext(Loaders)
    useEffect(() => {
        setstate(faq)
        setTimeout(() => {
            updateLoader(false)
        }, 2000);
        return () => {
            updateLoader(true)
        }
        // eslint-disable-next-line
    }, [])  

    return (
        <> {loader===false ?
        <section className="faq">
            <Banner
                title="What is virtual Staging?"
                miniTitle="FAQ"
                text="We specialize in transforming photos of vacant properties into  beautiful, virtually staged homes that sells faster and for top dollar."
                urlText='Sign Up'
                // Banner Image
                img={`${imgUrl}/img-09.jpg`}
                url={url}
                urlIcon='fa-long-arrow-alt-right'/>

            <section className="contact">
                <div className="container">

                    <CommonHead title='Send us your query and we will  contact you'/>

                    <div className="row">
                        <div className="col-md-8 col-sm-12 offset-md-2">
                            <div className="contact_form">
                                <form>
                                    <div className="form-row">
                                        <div className="form-group pr36 col-12 col-md-6 col-sm-6">
                                            <label htmlFor="NameInput">Your Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="NameInput"
                                                placeholder="Your Name"/>
                                        </div>
                                        <div className="form-group col-12 col-md-6 col-sm-6">
                                            <label htmlFor="inputEmail4">Work E-mail</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="your@example.com"
                                                id="inputEmail4"/>
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

            <HowItWork title="FAQ's" frequents={state}/>
        </section>
    : <LoadingBanner/>}</>
    )
}

export default Faq
