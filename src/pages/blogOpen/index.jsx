import React from 'react'
import { url as link, blog as Data } from '../../components/data/data';
import { useParams, Link } from "react-router-dom";
import { withRouter } from "react-router";

function BlogOpen() {

    let {url}=useParams(); //should be exact that declared on router declaration
    let blog = Data.find(d => d.slug === url);

    console.log(blog);
    return (
        <section className="blog_open">
            <header>
                <div className="container">
                    <div className="row">
                        <nav className="navbar navbar-light">
                            <Link className="navbar-brand" to='/blog'>
                                <i className="fas fa-long-arrow-alt-left"></i>
                                Back to Blogs</Link>
                        </nav>
                    </div>
                </div>
            </header>
            <section className="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-12">
                            <div className="banner_content">
                                <h2>{blog.title}</h2>
                                <div className="blogger">
                                    <div className="imgs float-left">
                                        <img
                                            src={blog.avatar}
                                            alt="blogger.png"
                                            className="img-fluid"/>
                                    </div>
                                    <h6>{blog.writer}</h6>
                                    <p>24 September 2019</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section
                className="blog_parts d-none d-sm-none d-md-block d-lg-block d-xl-block">
                <div className="blog_partitions">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-sm-8">
                                <div className="blog_opened">
                                    <div className="blog_img">
                                        <img
                                            src={blog.img}
                                            className="img-fluid"
                                            alt="blog-2.jpg"/>
                                    </div>
                                    <div className="blogging_text">
                                        <h4>
                                            {blog.blogs}
                                        </h4>
                                    </div>
                                    <div className="comment_box">
                                        <div className="heading">
                                            <div className="cmnt_number float-left">
                                                <h6>Comments (147)</h6>
                                            </div>
                                            {/*  Collapse
                                        <div className="shares float-right">
                                            <Link className="share_btn" data-toggle="collapse" to="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                                <i className="fas fa-share"></i> Share this article
                                            </Link>
                                            <div className="collapse collaps_box" id="collapseExample">
                                                <div className="card card-body">
                                                    <Link to='/blog'>
                                                        <i className="fab fa-facebook-f"></i>
                                                    </Link>
                                                    <Link to='/blog'>
                                                        <i className="fab fa-twitter"></i>
                                                    </Link>
                                                    <Link to='/blog'>
                                                        <i className="fab fa-linkedin-in"></i>
                                                    </Link>
                                                    <Link to='/blog'>
                                                        <i className="fas fa-copy"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                     */}
                                        </div>
                                        {/*  <div className="all_comments">
                                        <div className="new_cmnt">
                                            <div className="cmnt_img">
                                            </div>
                                            <div className="cmnt_form">
                                                <form>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" id="Comments" placeholder="Add a public comment"/>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="other_cmnt">
                                            <div className="media">
                                                <div className="cmnt_img"></div>
                                                <div className="media-body">
                                                    <h6>Paul Wazouski <span> | 2 months ago</span></h6>
                                                    <div className="mbody">
                                                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed est congue, rhoncus ligula condimentum, efficitur ligula. Nulla auctor egestas ipsum, a bibendum purus. Proin at ullamcorper velit. Integer tempor euismod sagittis. Sed sodales quis massa vel ornare. </p>
                                                        <Link to='/blog' className="show-btn">Show More</Link>
                                                    </div>
                                                    <div className="drop-btn">
                                                        <Link to='/blog' className="reply btn">Reply</Link>
                                                        <Link to='/blog' className="cmtn cancel btn">View 9 replies <i className="fas fa-caret-down"></i>
                                                            <!-- On click this button, inner html will be "Hide 9 replies <i className="fas fa-caret-up"></i>" -->
                                                        </Link>
                                                    </div>
                                                    <div className="media hide see">
                                                        <span className="cmnt_img"></span>
                                                        <div className="media-body">
                                                            <h6>Paul Wazouski <span> | 2 months ago</span></h6>
                                                            <div className="mbody">
                                                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed est congue, rhoncus ligula condimentum, efficitur ligula. Nulla auctor egestas ipsum, a bibendum purus. Proin at ullamcorper velit. Integer tempor euismod sagittis. Sed sodales quis massa vel ornare. </p>
                                                            </div>
                                                            <div className="drop-btn">
                                                                <Link to='/blog' className="reply btn">Reply</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="media hide see reply-form">
                                                        <div className="cmnt_img">
                                                        </div>
                                                        <div className="cmnt_form">
                                                            <form>
                                                                <div className="form-group">
                                                                    <input type="text" className="form-control" id="Comments" placeholder="Add a public comment"/>
                                                                </div>
                                                                <div className="butn_part float-right">
                                                                    <button type="submit" className="btn cancel">Cancel</button>
                                                                    <button type="" className="btn submit">Sign in to post</button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                 */}
                                    </div>
                                </div>
                                <div className="blog_button">
                                    <Link to='/blog' className="btn text-capitalize">Load More</Link>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4">
                                <div className="col-md-12 col-sm-12">
                                    <div className="more_blog_title d-block">
                                        <h6>Related Articles</h6>
                                        <Link to='/blog' className="mini_btn d-inline-block text-capitalize float-right">
                                            <h5>View more
                                            </h5>
                                            <i className="fas fa-long-arrow-alt-right"></i>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-12 col-sm-12">
                                    <div className="partner_slide mt24">
                                        <div className="partner_img">
                                            <img
                                                src={`${link}/vendor/images/partner.jpg`}
                                                alt="partner.jpg"
                                                className="img-fluid"/>
                                        </div>
                                        <div className="partner_text">

                                            <div className="title text-center text-capitalize">
                                                <h5>Meet our People - Marketing Team Leader Paul Wazouski</h5>
                                            </div>

                                            <div className="blogger">
                                                <div className="imgs float-left">
                                                    <img
                                                        src={`${link}/vendor/images/blogger.png`}
                                                        alt="blogger.png"
                                                        className="img-fluid"/>
                                                </div>
                                                <h6>Jhon Doe</h6>
                                                <p>24 September 2019</p>
                                            </div>
                                            <div className="text_part">
                                                <h6>
                                                    PadStyler is the only Photorealistic 3D Visual Marketing Platform backed by
                                                    research to help you sell or rent properties faster
                                                </h6>
                                            </div>
                                            <Link to='/blog' className="mini_btn d-inline-block text-capitalize text-center">
                                                <h5>Read more
                                                </h5>
                                                <i className="fas fa-long-arrow-alt-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 col-sm-12">
                                    <div className="partner_slide">
                                        <div className="partner_img">
                                            <img
                                                src={`${link}/vendor/images/partner.jpg`}
                                                alt="partner.jpg"
                                                className="img-fluid"/>
                                        </div>
                                        <div className="partner_text">

                                            <div className="title text-center text-capitalize">
                                                <h5>Meet our People - Marketing Team Leader Paul Wazouski</h5>
                                            </div>

                                            <div className="blogger">
                                                <div className="imgs float-left">
                                                    <img
                                                        src={`${link}/vendor/images/blogger.png`}
                                                        alt="blogger.png"
                                                        className="img-fluid"/>
                                                </div>
                                                <h6>Jhon Doe</h6>
                                                <p>24 September 2019</p>
                                            </div>
                                            <div className="text_part">
                                                <h6>
                                                    PadStyler is the only Photorealistic 3D Visual Marketing Platform backed by
                                                    research to help you sell or rent properties faster
                                                </h6>
                                            </div>
                                            <Link to='/blog' className="mini_btn d-inline-block text-capitalize text-center">
                                                <h5>Read more
                                                </h5>
                                                <i className="fas fa-long-arrow-alt-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default withRouter(BlogOpen) 
