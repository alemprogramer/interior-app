import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';

function Mobile({data}) {
    const [blog,
        setBlog] = useState([]);
    useEffect(() => {
        setBlog(data)
        return () => {
            setBlog([])
        }
        // eslint-disable-next-line 
    }, []);
    return (
        <section
            className="blog_parts d-block d-md-none d-sm-block d-lg-none d-xl-none">
            <div className="blog_options mini-nav">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="blog_opt">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-inline my-2 my-lg-0">
                                                <div className="form_sector options">
                                                    <div className="input">
                                                        <h6>
                                                            Blog Categories
                                                        </h6>
                                                    </div>
                                                    <select className="styled">
                                                        <option value="al">All</option>
                                                        <option value="kc">Tech</option>
                                                        <option value="br">Design</option>
                                                        <option value="din">Agent Outreach</option>
                                                        <option value="lr">Virtual Staging</option>
                                                        <option value="br">3D Modelling</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="blog_partitions">
                <div className="container">
                    <div className="row">
                        {blog.map((d,k)=>
                        <div key={k++} className="col-sm-6 col-12">
                            <div className="partner_slide">
                                <div className="partner_img">
                                        <img src={d.img} alt="partner" className="img-fluid"/>
                                </div>
                                <div className="partner_text">
                                    {/* this is mini heading */}
                                    <div className="title text-center text-capitalize">
                                            <h5>{d.title}</h5>
                                    </div>
                                    {/* mini heading ends here */}
                                    <div className="blogger">
                                        <div className="imgs float-left">
                                                <img src={d.avatar} alt="blogger.png" className="img-fluid"/>
                                        </div>
                                            <h6>{d.writer}</h6>
                                            <p>{d.date}</p>
                                    </div>
                                    <div className="text_part">
                                        <h6>
                                                {d.slogan}
                                        </h6>
                                    </div>
                                        <Link to={`/blog-open/${d.slug}`} className="mini_btn d-inline-block text-capitalize text-center">
                                        <h5>view more
                                        </h5>
                                        <i className="fas fa-long-arrow-alt-right"/>
                                    </Link>
                                </div>
                            </div>
                        </div>
)}
                    </div>
                    {/* <div className="row">
                        <div className="col-md-12 col-sm-12 col-12">
                            <div className="pagination_part">
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination justify-content-center">
                                        <li className="page-item disabled">
                                            <a className="page-link arrows" href="#" tabIndex={-1} aria-disabled="true">
                                                <span aria-hidden="true"><i className="fas fa-long-arrow-alt-left"/></span>Previous</a>
                                        </li>
                                        <li className="page-item active">
                                            <a className="page-link" href="#">1</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">2</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">3</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link arrows" href="#">Next<span aria-hidden="true"><i className="fas fa-long-arrow-alt-right"/></span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                 */}
                </div>
            </div>
        </section>

    )
}

export default Mobile
