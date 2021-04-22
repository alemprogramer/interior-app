import React, {useState, useEffect} from 'react';
import Banner from "../../components/banner/index";
import Blogger from "./blog";
import Pagination from './pagination';

function Blog() {
    let k = 0;
    const [blog,
        blogPagi] = useState([]);
    const [loading,
        blogLoading] = useState(false);
    const [page,
        setPage] = useState(1);
    const [blogLimit] = useState(15);

    useEffect(() => {
        blogLoading(true);
        blogPagi([
            {
                img: `${link}/vendor/images/partner.jpg`,
                title: `Meet our People - Marketing Team Leader Paul Wazouski`,
                avatar: `${link}/vendor/images/blogger.png`,
                writer: `Jhon Doe1`,
                text: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
                slug: `${link}`,
                date: `24 September 2019`
            }, {
                img: `${link}/vendor/images/partner.jpg`,
                title: `Meet our People - Marketing Team Leader Paul Wazouski`,
                avatar: `${link}/vendor/images/blogger.png`,
                writer: `Jhon Doe12`,
                text: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
                slug: `${link}`,
                date: `24 September 2019`
            }, {
                img: `${link}/vendor/images/partner.jpg`,
                title: `Meet our People - Marketing Team Leader Paul Wazouski`,
                avatar: `${link}/vendor/images/blogger.png`,
                writer: `Jhon Doe123`,
                text: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
                slug: `${link}`,
                date: `24 September 2019`
            }, {
                img: `${link}/vendor/images/partner.jpg`,
                title: `Meet our People - Marketing Team Leader Paul Wazouski`,
                avatar: `${link}/vendor/images/blogger.png`,
                writer: `Jhon Doe1234`,
                text: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
                slug: `${link}`,
                date: `24 September 2019`
            }, {
                img: `${link}/vendor/images/partner.jpg`,
                title: `Meet our People - Marketing Team Leader Paul Wazouski`,
                avatar: `${link}/vendor/images/blogger.png`,
                writer: `Jhon Doe12345`,
                text: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
                slug: `${link}`,
                date: `24 September 2019`
            }, {
                img: `${link}/vendor/images/partner.jpg`,
                title: `Meet our People - Marketing Team Leader Paul Wazouski`,
                avatar: `${link}/vendor/images/blogger.png`,
                writer: `Jhon Doe123456`,
                text: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
                slug: `${link}`,
                date: `24 September 2019`
            }, {
                img: `${link}/vendor/images/partner.jpg`,
                title: `Meet our People - Marketing Team Leader Paul Wazouski`,
                avatar: `${link}/vendor/images/blogger.png`,
                writer: `Jhon Doe1234567`,
                text: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
                slug: `${link}`,
                date: `24 September 2019`
            }, {
                img: `${link}/vendor/images/partner.jpg`,
                title: `Meet our People - Marketing Team Leader Paul Wazouski`,
                avatar: `${link}/vendor/images/blogger.png`,
                writer: `Jhon Doe12345678`,
                text: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
                slug: `${link}`,
                date: `24 September 2019`
            }, {
                img: `${link}/vendor/images/partner.jpg`,
                title: `Meet our People - Marketing Team Leader Paul Wazouski`,
                avatar: `${link}/vendor/images/blogger.png`,
                writer: `Jhon Doe123456789`,
                text: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
                slug: `${link}`,
                date: `24 September 2019`
            }, {
                img: `${link}/vendor/images/partner.jpg`,
                title: `Meet our People - Marketing Team Leader Paul Wazouski`,
                avatar: `${link}/vendor/images/blogger.png`,
                writer: `Jhon Doe2`,
                text: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
                slug: `${link}`,
                date: `24 September 2019`
            }, {
                img: `${link}/vendor/images/partner.jpg`,
                title: `Meet our People - Marketing Team Leader Paul Wazouski`,
                avatar: `${link}/vendor/images/blogger.png`,
                writer: `Jhon Doe24`,
                text: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
                slug: `${link}`,
                date: `24 September 2019`
            }, {
                img: `${link}/vendor/images/partner.jpg`,
                title: `Meet our People - Marketing Team Leader Paul Wazouski`,
                avatar: `${link}/vendor/images/blogger.png`,
                writer: `Jhon Doe246`,
                text: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
                slug: `${link}`,
                date: `24 September 2019`
            }, {
                img: `${link}/vendor/images/partner.jpg`,
                title: `Meet our People - Marketing Team Leader Paul Wazouski`,
                avatar: `${link}/vendor/images/blogger.png`,
                writer: `Jhon Doe2468`,
                text: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
                slug: `${link}`,
                date: `24 September 2019`
            }, {
                img: `${link}/vendor/images/partner.jpg`,
                title: `Meet our People - Marketing Team Leader Paul Wazouski`,
                avatar: `${link}/vendor/images/blogger.png`,
                writer: `Jhon Doe1`,
                text: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
                slug: `${link}`,
                date: `24 September 2019`
            }, {
                img: `${link}/vendor/images/partner.jpg`,
                title: `Meet our People - Marketing Team Leader Paul Wazouski`,
                avatar: `${link}/vendor/images/blogger.png`,
                writer: `Jhon Doe13`,
                text: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
                slug: `${link}`,
                date: `24 September 2019`
            }, {
                img: `${link}/vendor/images/partner.jpg`,
                title: `Meet our People - Marketing Team Leader Paul Wazouski`,
                avatar: `${link}/vendor/images/blogger.png`,
                writer: `Jhon Doe135`,
                text: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
                slug: `${link}`,
                date: `24 September 2019`
            }, {
                img: `${link}/vendor/images/partner.jpg`,
                title: `Meet our People - Marketing Team Leader Paul Wazouski`,
                avatar: `${link}/vendor/images/blogger.png`,
                writer: `Jhon Doe1357`,
                text: `We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.`,
                slug: `${link}`,
                date: `24 September 2019`
            }
        ]);
        blogLoading(false);
    }, []);

    const lastBlogIndex = page * blogLimit;
    const firstBlogIndex = lastBlogIndex - blogLimit;
    const currentBlogs = blog.slice(firstBlogIndex, lastBlogIndex);

    const pageGo = (n) => { setPage(n); window.scrollTo(0, 650);} ;

    const link = process.env.PUBLIC_URL;
    const person = {
        avatar: `${link}/vendor/images/blogger.png`,
        name: `Jhon Doe13579`
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
                                                        Per Page
                                                    </h6>
                                                </div>
                                                <select className="styled">
                                                     <option value='5'>5</option>
                                                     <option value='15'>15</option>
                                                     <option value='25'>25</option>
                                                </select>
                                            </div>
                                        </div>
                                        {/* <div className="form-inline my-2 my-lg-0">
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
                                        </div> */}
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
                                    .keys(currentBlogs)
                                    .map(b => <Blogger
                                        key={k++}
                                        date={currentBlogs[b].date}
                                        slug={currentBlogs[b].slug}
                                        text={currentBlogs[b].text}
                                        writer={currentBlogs[b].writer}
                                        avatar={currentBlogs[b].avatar}
                                        title={currentBlogs[b].title}
                                        img={currentBlogs[b].img}
                                            loading={loading}
                                        />)}
                            {/* <Blogger post={currentBlogs} load={loading}/> */}
                        </div>
                        <div className="row">
                            <div className="col-md-12 col-sm-4 col-12">

                                {/* Need Modification */}

                                <div className="pagination_part">
                                    <Pagination totalBlogs={blog.length} currentPages={page} paginate={pageGo} blogPerPage={blogLimit} />
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
