import React, {useContext, useEffect, useState} from 'react';
import Loaders from '../../components/contexts';

// Dummy Data

import {url, select, item} from '../../components/data/data';
import LoadingBanner from '../../components/loader/banner';

function Portfolio() {
    const [options,
        setOptions] = useState([]);
    const [data,
        setData] = useState([]);
    const {loader, updateLoader} = useContext(Loaders);

    useEffect(() => {
        setData(item);
        setOptions(select);
        setTimeout(() => {
            updateLoader(false)
        }, 2000);
        return () => {
            updateLoader(true)
        }
        // eslint-disable-next-line
    }, [])

    return ( <> {
        loader === false ? <section className="portfolio">
                <div className="filter_options main-nav">

                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12">
                                <div className="row">
                                    <div className="col-12 col-md-6 col-sm-6">
                                        <div className="used_services">
                                            <div className="form_sector options">
                                                <div className="input">
                                                    <h6>
                                                        Service Used
                                                    </h6>
                                                </div>
                                                <select className="styled">
                                                    {options.map((d, k) => <option key={k++} value={d.value}>{d.text}</option>)}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-sm-6">
                                        <div className="used_services">
                                            <div className="form_sector options">
                                                <div className="input category">
                                                    <h6>
                                                        Categories
                                                    </h6>
                                                </div>
                                                <select className="styled">
                                                    {options.map((d, k) => <option key={k++} value={d.value}>{d.text}</option>)}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="filtering_part">
                    <div className="container">
                        <div className="row">
                            {data.map((m, k) => <div key={k++} className="col-md-4 col-sm-6">
                                <a href={url} className="filter_item">
                                    <span className="img_part">
                                        <img src={m.image} className="img-fluid" alt="portfolio3.jpg"/>
                                    </span>
                                    <span className="texts">
                                        <h6>{m.text}</h6>
                                    </span>
                                </a>
                            </div>)}
                        </div>
                    </div>
                </div>
                <div className="load_btn">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-sm-4 offset-sm-4 offset-md-4">
                                <a href={url} className="btn">Load More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    : <LoadingBanner/>} </>
    )
}

export default Portfolio