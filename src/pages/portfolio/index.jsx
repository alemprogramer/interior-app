import React from 'react'

function Portfolio() {
    let k = 0;
    const url = process.env.PUBLIC_URL;
    const select = {
        setA: {
            value: `All`,
            text: `All`
        },
        setB: {
            value: `Kitchen`,
            text: `Kitchen`
        },
        setC: {
            value: `Bedroom`,
            text: `Bedroom`
        },
        as: {
            value: `Dinning room`,
            text: `Dinning room`
        },
        cda: {
            value: `Living Room`,
            text: `Living Room`
        },
        gffd: {
            value: `Bathroom`,
            text: `Bathroom`
        },
        tb: {
            value: `Kitchen`,
            text: `Kitchen`
        },
        er: {
            value: `Kitchen`,
            text: `Kitchen`
        },
        wef: {
            value: `Bedroom`,
            text: `Bedroom`
        },
        asdsa: {
            value: `Bedroom`,
            text: `Bedroom`
        },
        bfgn: {
            value: `Bedroom`,
            text: `Bedroom`
        }
    }

    const item={
        setA:{
            image:`${url}/vendor/images/portfolio.jpg`,
            text:`Hill View Apartments`,
            url,
        },
        setb:{
            image:`${url}/vendor/images/portfolio9.jpg`,
            text:`Hill View Apartments`,
            url,
        },
        setc:{
            image:`${url}/vendor/images/portfolio2.jpg`,
            text:`Hill View Apartments`,
            url,
        },
        setd:{
            image:`${url}/vendor/images/portfolio3.jpg`,
            text:`Hill View Apartments`,
            url,
        },
        setbe:{
            image:`${url}/vendor/images/portfolio4.jpg`,
            text:`Hill View Apartments`,
            url,
        },
        setcf:{
            image:`${url}/vendor/images/portfolio5.jpg`,
            text:`Hill View Apartments`,
            url,
        },
        setAd:{
            image:`${url}/vendor/images/portfolio7.jpg`,
            text:`Hill View Apartments`,
            url,
        },
        setbs:{
            image:`${url}/vendor/images/portfolio8.jpg`,
            text:`Hill View Apartments`,
            url,
        },
        setcv:{
            image:`${url}/vendor/images/portfolio9.jpg`,
            text:`Hill View Apartments`,
            url,
        },
    }

    return (
        <section className="portfolio">
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
                                                {Object
                                                    .keys(select)
                                                    .map(d => <option key={k++} value={select[d].value}>{select[d].text}</option>)}
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
                                                {Object
                                                    .keys(select)
                                                    .map(d => <option key={k++} value={select[d].value}>{select[d].text}</option>)}
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
                       {Object.keys(item).map(m=>  
                            <div key={k++} className="col-md-4 col-sm-6">
                                <a href={url} className="filter_item">
                                    <span className="img_part">
                                        <img src={item[m].image} className="img-fluid" alt="portfolio3.jpg"/>
                                    </span>
                                    <span className="texts">
                                        <h6>{item[m].text}</h6>
                                    </span>
                                </a>
                            </div>
                        ) }
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
    )
}

export default Portfolio
