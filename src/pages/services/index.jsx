import React, {useState, useEffect, useContext} from 'react';
import Banner from "../../components/banner/index";
import Difference from "../../components/difference/difference";
import PreviousWork from "../../components/previousWork/index";
import HowItWork from "../../components/HowItWork/index";
// Dummy Data
import imgUrl, { url, give, take, faq, previousWork} from "../../components/data/data";
import Loaders from '../../components/contexts';
import LoadingBanner from '../../components/loader/banner';

function Services() {

    const [accept,
        setAccept] = useState([]);
    const [provide,
        setProvides] = useState([]);
    const [faqs,
        setFaqs] = useState([]);
    const [pervWork, setPervWork] = useState([]);

    const {loader, updateLoader} = useContext(Loaders);

    useEffect(() => {
        setAccept(give);
        setProvides(take);
        setFaqs(faq);
        setPervWork(previousWork)
        setTimeout(() => {
            updateLoader(false)
        }, 2000);
        return () => {
            updateLoader(true)
        };
        // eslint-disable-next-line
    }, []);

    return ( <> {loader===true ? <LoadingBanner/> : <section className="service_page">
        <Banner
            title='Virtual Home Staging'
            text='We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.'
            price='500'
            img={`${imgUrl}/img-11.jpg`}
            url={url}
            buttonText='Place Order'/>
        <Difference title="What we need" need={accept}/>
        <Difference title="What will you receive" receive={provide}/>
        <PreviousWork data={pervWork}/>
        <HowItWork title="FAQ's" frequents={faqs}/>
    </section>}  </>
    )
}

export default Services