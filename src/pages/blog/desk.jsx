import React, { useState, useEffect } from 'react';
import Banner from "../../components/banner/index";
import Blogger from "./blog";
import Pagination from './pagination';

import imgUrl,{ url as link, tags } from '../../components/data/data';

function Desk({data}) {
    const person = {
        avatar: `${imgUrl}/blogger.png`,
        name: `Jhon Doe13579`
    };

    const [blog,
        setBlog] = useState([]);
    const [loading,
        blogLoading] = useState(false);
    const [page,
        setPage] = useState(1);
    const [blogLimit,
        limitChange] = useState(15);
    const [loader,
        setLoader] = useState(false);

    // Used For Post Data Rendering
    useEffect(() => {
        blogLoading(true);
        setBlog(data);
        setTimeout(() => {
            blogLoading(false);
        }, 1000);
        // eslint-disable-next-line 
    }, []);

    useEffect(() => {
        return () => {
        setBlog([])
        };
    }, []);

    // Filter Method
    const filtering = (t) => {
        let rslt = []
        setLoader(true)
        data.forEach((e) => {
            let value = e
                .tags
                .find((d) => {
                    return d === t;
                })
            if (value) {
                return rslt.push(e);
            }
        })
        setTimeout(() => {
            setLoader(false)
            return setBlog(rslt)
        }, 1000);
    };

    // Pagination Method
    const pageGo = (n) => {
        setLoader(true)
        setTimeout(() => {
            setPage(n);
            setLoader(false)
            window.scrollTo({ top: 650, left: 0 });
        }, 1000);
    };

    // View Limit
    const lastBlogIndex = page * blogLimit;
    const firstBlogIndex = lastBlogIndex - blogLimit;
    const currentBlogs = blog.slice(firstBlogIndex, lastBlogIndex);
    const limit = (n) => {
        setLoader(true)
        setTimeout(() => {
            limitChange(n.target.value);
            setLoader(false)
        }, 1000);
    };

    //sorting Blogs

    const sorting = (n) => {
        let v = n.target.value
        let sorted = [];
        setLoader(true);
        v === 'name' && (sorted = blog.sort((a, b) => a.title < b.title ? -1 : 1));
        v === 'time' && (sorted = blog.sort((a, b) => a.date < b.date ? -1 : 1));
        setTimeout(() => {
            setLoader(false);
        }, 1000);
        return setBlog(sorted);

    }


    return (
        <section className="blog">

            <Banner
                title="Virtual Home Staging"
                miniTitle='Featured Blog'
                text="We specialize in transforming photos of vacant properties into  beautiful, virtually staged homes that sells faster and for top dollar."
                urlText='Read More'
                img={`${imgUrl}/banner_banner_bg.jpg`}
                url={link}
                urlIcon='fa-long-arrow-alt-right'
                blogger={person} />

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
                                            <li className='nav-item'>
                                                <button
                                                    type='button'
                                                    onClick={() => {
                                                        if (data.length !== blog.length) {
                                                            setLoader(true);
                                                            setTimeout(() => {
                                                                setBlog(data);
                                                                setLoader(false);
                                                                window.scrollTo({ top: 650, left: 0 });
                                                            }, 1000);
                                                        };
                                                    }}
                                                    className="nav-link">All</button>
                                            </li>
                                            {tags.map(c => <li key={c.id} className='nav-item'>
                                                <button
                                                    type='button'
                                                    onClick={() => {
                                                        filtering(c.value)
                                                    }}
                                                    className="nav-link">{c.value}</button>
                                            </li>)}
                                        </ul>
                                        <div className="form-inline my-2 my-lg-0">
                                            <div className="form_sector options">
                                                <div className="input">
                                                    <h6>
                                                        Per Page
                                                    </h6>
                                                </div>
                                                <select className="styled" defaultValue={blogLimit} onChange={limit}>
                                                    <option value='5'>5</option>
                                                    <option value='15'>15</option>
                                                    <option value='25'>25</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-inline my-2 my-lg-0">
                                            <div className="form_sector options">
                                                <div className="input">
                                                    <h6>
                                                        Sort by
                                                    </h6>
                                                </div>
                                                <select className="styled" onChange={sorting}>
                                                    <option>Select</option>
                                                    <option value='name'>Name</option>
                                                    <option value='time'>Time</option>
                                                    <option value='most-viewed'>Most Viewed</option>
                                                    <option value='most-commented'>Most Commented</option>
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
                        {loader === false
                            ? <div className="row">

                                {currentBlogs
                                    .map(b => <Blogger
                                        key={b.id}
                                        date={b.date}
                                        link={b.slug}
                                        text={b.slogan}
                                        writer={b.writer}
                                        avatar={b.avatar}
                                        title={b.title}
                                        img={b.img}
                                        loading={loading} />)}
                            </div>
                            : <h2>Loading....</h2>}

                        <div className="row">
                            <div className="col-md-12 col-sm-4 col-12">

                                <div className="pagination_part">
                                    <Pagination
                                        totalBlogs={blog.length}
                                        currentPages={page}
                                        paginate={pageGo}
                                        blogPerPage={blogLimit} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Desk