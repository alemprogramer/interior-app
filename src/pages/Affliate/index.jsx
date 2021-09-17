import React, {useState, useEffect, useContext } from 'react';
import Banner from "../../components/banner/index";
import HowItWork from "../../components/HowItWork/index";
// Dummy Data
import imgUrl, { url, faq } from '../../components/data/data';
import Loaders from '../../components/contexts';
import LoadingBanner from '../../components/loader/banner';

function Reseller() {
    const [data, setData] = useState([])
    const { loader, updateLoader } = useContext(Loaders)
    useEffect(() => {
        setData(faq);
        setTimeout(() => {
            updateLoader(false)
        }, 2000);
        return () => {
           updateLoader(true) 
        };
        // eslint-disable-next-line
    }, []);
    return ( <>
        {loader===false ?
        <section className="affliate">
            <Banner
                title="Affiliate Program"
                text="We specialize in transforming photos of vacant properties into  beautiful, virtually staged homes that sells faster and for top dollar."
                urlText='Sign Up'
                // Banner Image
                img={`${imgUrl}/img-09.jpg`}
                url={url}
                urlIcon='fa-long-arrow-alt-right' />
            <HowItWork title="FAQ's" frequents={data} />
        </section>: <LoadingBanner/>}
    </>
    )
}

export default Reseller
