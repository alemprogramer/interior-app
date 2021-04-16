import React from 'react';
import Banner from "../../components/banner/index";
import Blogger from "./blog";

function Blog() {
    let k = 0;
    const link = process.env.PUBLIC_URL;
    const person = {
        avatar: `${link}/vendor/images/blogger.png`,
        name: `Jhon Doe`
    };
    const blogs = {
        setA: {
            img: `${link}/vendor/images/partner.jpg`,
            title: `Meet our People - Marketing Team Leader Paul Wazouski`,
            avatar: `${link}/vendor/images/blogger.png`,
            writer: `Jhon Doe`,
            text: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
            slug: `${link}`,
            date: `24 September 2019`
        },
        setAB: {
            img: `${link}/vendor/images/partner.jpg`,
            title: `Meet our People - Marketing Team Leader Paul Wazouski`,
            avatar: `${link}/vendor/images/blogger.png`,
            writer: `Jhon Doe`,
            text: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
            slug: `${link}`,
            date: `24 September 2019`
        },
        setC: {
            img: `${link}/vendor/images/partner.jpg`,
            title: `Meet our People - Marketing Team Leader Paul Wazouski`,
            avatar: `${link}/vendor/images/blogger.png`,
            writer: `Jhon Doe`,
            text: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
            slug: `${link}`,
            date: `24 September 2019`
        },
        setD: {
            img: `${link}/vendor/images/partner.jpg`,
            title: `Meet our People - Marketing Team Leader Paul Wazouski`,
            avatar: `${link}/vendor/images/blogger.png`,
            writer: `Jhon Doe`,
            text: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
            slug: `${link}`,
            date: `24 September 2019`
        },
        setE: {
            img: `${link}/vendor/images/partner.jpg`,
            title: `Meet our People - Marketing Team Leader Paul Wazouski`,
            avatar: `${link}/vendor/images/blogger.png`,
            writer: `Jhon Doe`,
            text: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
            slug: `${link}`,
            date: `24 September 2019`
        }
    };
    const category = {
        cat1: `All`,
        cat2: `Tech`,
        cat3: `Design`,
        cat4: `Agent Outreach`,
        cat5: `Virtual Staging`,
        cat6: `3D Modelling`
    };
    const short = {
        set1: {
            value: `All`,
            text: `All`
        },
        set2: {
            value: `Bathroom 2`,
            text: `Bathroom 2`
        },
        set3: {
            value: `Bathroom`,
            text: `Bathroom`
        },
        set4: {
            value: `Living Room`,
            text: `Living Room`
        },
        set5: {
            value: `Dinning room`,
            text: `Dinning room`
        },
        set6: {
            value: `Bedroom`,
            text: `Bedroom`
        },
        set7: {
            value: `Kitchen`,
            text: `Kitchen`
        }
    };
    
    
    
    return (
           <section className="blog">

                <Banner
                    title="Virtual Home Staging"
                    miniTitle='Featured Blog'
                    text="We specialize in transforming photos of vacant properties into  beautiful, virtually staged homes that sells faster and for top dollar."
                    urlText='Read More'
                    img={`${link}/vendor/images/banner_banner_bg.jpg`}
                    url={link}
                    urlIcon='fa-long-arrow-alt-right'
                    blogger={person}/>

                <section
                    className="blog_parts d-none d-md-block d-sm-none d-lg-block d-xl-block">
                    <div className="blog_options main-nav">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 col-sm-12">
                                    <nav className="navbar filters navbar-expand-lg navbar-light">
                                        <span className="navbar-brand">Blog Categories</span>
                                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                            <ul className="navbar-nav filter_options ml-auto mr-auto">
                                                {Object
                                                    .keys(category)
                                                    .map(c => <li
                                                        key={k++}
                                                        className={c === `cat1`
                                                        ? 'nav-item active'
                                                        : 'nav-item'}>
                                                        <a className="nav-link" href={link}>{category[c]}</a>
                                                    </li>)}
                                            </ul>
                                            <div className="form-inline my-2 my-lg-0">
                                                <div className="form_sector options">
                                                    <div className="input">
                                                        <h6>
                                                            Sort by
                                                        </h6>
                                                    </div>
                                                    <select className="styled">
                                                        {Object
                                                            .keys(short)
                                                            .map(s => <option key={k++} value={short[s].value}>{short[s].text}</option>)}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blog_partitions">
                        <div className="container">
                            <div className="row">

                                {Object
                                    .keys(blogs)
                                    .map(b => <Blogger
                                        key={k++}
                                        date={blogs[b].date}
                                        slug={blogs[b].slug}
                                        text={blogs[b].text}
                                        writer={blogs[b].writer}
                                        avatar={blogs[b].avatar}
                                        title={blogs[b].title}
                                        img={blogs[b].img}/>)}
                            </div>
                            <div className="row">
                                <div className="col-md-12 col-sm-4 col-12">

                                        {/* Need Modification */}

                                    <div className="pagination_part">
                                        <nav aria-label="Page navigation example">
                                            <ul className="pagination justify-content-center">
                                                <li className="page-item disabled">
                                                    <a className="page-link arrows" href={link} tabIndex="-1" aria-disabled="true">
                                                        <span aria-hidden="true">
                                                            <i className="fas fa-long-arrow-alt-left"></i>
                                                        </span>Previous</a>
                                                </li>
                                                <li className="page-item active">
                                                    <a className="page-link" href={link}>1</a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href={link}>2</a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href={link}>3</a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link arrows" href={link}>Next<span aria-hidden="true">
                                                            <i className="fas fa-long-arrow-alt-right"></i>
                                                        </span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        )
}

export default Blog

