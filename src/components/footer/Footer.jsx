import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {

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
                                            <Link to='/' className="">
                                                <i className="fab fa-facebook-f"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/' className="">
                                                <i className="fab fa-linkedin-in"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/' className="">
                                                <i className="fab fa-twitter"></i>
                                            </Link>
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
                                            <Link to='/faq'>about us</Link>
                                        </li>
                                        <li>
                                            <Link to='/portfolio'>our work</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>pricing</Link>
                                        </li>
                                        <li>
                                            <Link to='/'>career</Link>
                                        </li>
                                        <li>
                                            <Link to='/blog'>blogs</Link>
                                        </li>
                                        <li>
                                            <Link to='/faq'>FAQ's</Link>
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
                                            <Link to='/reseller'>Reseller Program</Link>
                                        </li>
                                        <li>
                                            <Link to='/affliate'>Afliate Program</Link>
                                        </li>
                                        <li>
                                            <Link to='/refer'>Refer a Friend</Link>
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
                                            <Link to='/service'>Virtual home staging</Link>
                                        </li>
                                        <li>
                                            <Link to='/service'>Virtual furniture replacement</Link>
                                        </li>
                                        <li>
                                            <Link to='/service'>Virtual Remodelling</Link>
                                        </li>
                                        <li>
                                            <Link to='/service'>3D floor plans</Link>
                                        </li>
                                        <li>
                                            <Link to='/service'>3D architectural rendering</Link>
                                        </li>
                                        <li>
                                            <Link to='/service'>Virtual home staging</Link>
                                        </li>
                                        <li>
                                            <Link to='/service'>Virtual home staging</Link>
                                        </li>
                                        <li>
                                            <Link to='/service'>Virtual furniture replacement</Link>
                                        </li>
                                        <li>
                                            <Link to='/service'>Virtual Remodelling</Link>
                                        </li>
                                        <li>
                                            <Link to='/service'>3D floor plans</Link>
                                        </li>
                                        <li>
                                            <Link to='/service'>3D architectural rendering</Link>
                                        </li>
                                        <li className="pb68">
                                            <Link to='/service'>Virtual home staging</Link>
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
                                            <Link to='/'>The Castel Unite 345, New York City, USA</Link>
                                        </li>
                                        <li>Phone :
                                            <Link to='/'>+91-8065999</Link>
                                        </li>
                                        <li className="mt0">Email :
                                            <Link to='/' className="text-lowercase">youbrand.com</Link>
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
                                <div className="links float-md-right">
                                    <div className="row">
                                            <h6> &copy; 2021 | React App Developed By &nbsp;&nbsp;&nbsp; </h6>
                                            <a target='_blank' rel='noreferrer' href='mailto:maruf@fastcodertech.com'>Maruf&nbsp;</a>
                                            &amp;
                                            <a target='_blank' rel='noreferrer' href='mailto:alemhasib@fastcodertech.com'>&nbsp;Aleam</a>
                                        
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

export default Footer