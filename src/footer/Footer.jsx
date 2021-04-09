import React, {Component} from 'react';

class Footer extends Component {
    render() {
        const url = 'localhost:3000';
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <div className="row">
                                <div className="col-12 col-md-4 col-lg-4 col-xl-4 col-sm-5">
                                    <div className="footer_content">
                                        <div className="footer_logo">
                                            <h3>Virtual Decors</h3>
                                        </div>
                                        <div className="footer_text">
                                            <p>
                                                Hasten is among the best, offering top-tier services that truly have an impact.
                                                From the first day we began using Hasten's service we tracked an immediate
                                                uptick in leads & incoming calls.
                                            </p>
                                        </div>
                                        <div className="footer_icon">
                                            <ul>
                                                <li>
                                                    <a href={url} className="">
                                                        <i className="fab fa-facebook-f"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href={url} className="">
                                                        <i className="fab fa-linkedin-in"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href={url} className="">
                                                        <i className="fab fa-twitter"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-1 col-sm-3 col-12">
                                    <div className="company">
                                        <div className="company_title">
                                            <h4>Company</h4>
                                        </div>
                                        <div className="company_list">
                                            <ul>
                                                <li>
                                                    <a href={url}>about us</a>
                                                </li>
                                                <li>
                                                    <a href="portfolio.html">our work</a>
                                                </li>
                                                <li>
                                                    <a href="place-order.html">pricing</a>
                                                </li>
                                                <li>
                                                    <a href={url}>career</a>
                                                </li>
                                                <li>
                                                    <a href="blog.html">blogs</a>
                                                </li>
                                                <li>
                                                    <a href="faq.html">FAQ's</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2 col-xl-2 col-lg-2 col-sm-4 col-12">
                                    <div className="company">
                                        <div className="company_title">
                                            <h4>Partnerships</h4>
                                        </div>
                                        <div className="company_list">
                                            <ul>
                                                <li>
                                                    <a href="reseller.html">Reseller Program</a>
                                                </li>
                                                <li>
                                                    <a href="affliate.html">Afliate Program</a>
                                                </li>
                                                <li>
                                                    <a href="referral.html">Refer a Friend</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2 col-sm-4 col-12">
                                    <div className="company gap25">
                                        <div className="company_title">
                                            <h4>Services</h4>
                                        </div>
                                        <div className="company_list">
                                            <ul>
                                                <li>
                                                    <a href={url}>Virtual home staging</a>
                                                </li>
                                                <li>
                                                    <a href={url}>Virtual furniture replacement</a>
                                                </li>
                                                <li>
                                                    <a href={url}>Virtual Remodelling</a>
                                                </li>
                                                <li>
                                                    <a href={url}>3D floor plans</a>
                                                </li>
                                                <li>
                                                    <a href={url}>3D architectural rendering</a>
                                                </li>
                                                <li>
                                                    <a href={url}>Virtual home staging</a>
                                                </li>
                                                <li>
                                                    <a href={url}>Virtual home staging</a>
                                                </li>
                                                <li>
                                                    <a href={url}>Virtual furniture replacement</a>
                                                </li>
                                                <li>
                                                    <a href={url}>Virtual Remodelling</a>
                                                </li>
                                                <li>
                                                    <a href={url}>3D floor plans</a>
                                                </li>
                                                <li>
                                                    <a href={url}>3D architectural rendering</a>
                                                </li>
                                                <li className="pb68">
                                                    <a href={url}>Virtual home staging</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-4 col-12">
                                    <div className="company gap25">
                                        <div className="company_title">
                                            <h4>Contact Us</h4>
                                        </div>
                                        <div className="company_list">
                                            <ul>
                                                <li className="adress">
                                                    <a href={url}>The Castel Unite 345, New York City, USA</a>
                                                </li>
                                                <li>Phone :
                                                    <a href={url}>+91-8065999</a>
                                                </li>
                                                <li className="mt0">Email :
                                                    <a href={url} className="text-lowercase">youbrand.com</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="reservation">
                            <div className="col-md-12 col-sm-12">
                                <div className="row">
                                    <div className="col-12 col-md-6 col-sm-6">
                                        <div className="copy">
                                            <h6>&copy; 2018 Virtually Staging Properties</h6>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-sm-6">
                                        <div className="links float-md-right">
                                            <div className="row">
                                                <div className="col-12 col-md-6 col-sm-6">
                                                    <a href={url}>Terms of Service</a>
                                                </div>
                                                <div className="col-12 col-md-6 col-sm-6">
                                                    <a href={url}>Privacy Policy</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer
