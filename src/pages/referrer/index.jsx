import React from 'react'
import CommonHead from "../../components/headings/index";
import Referd from "../../components/referComps/index";
import Banner from "../../components/banner/index";

function Refer() {
    const link = process.env.PUBLIC_URL;
    const imgLink = `${link}/vendor/images`;
    const obj = {
        a: {
            image: `${imgLink}/number.png`,
            text: `Let others know about VSS and share your unique referral code with them.`
        },
        b: {
            image: `${imgLink}/number.png`,
            text: `When someone you refer signs up they'll receive a $40 discount on their first order.`
        },
        c: {
            image: `${imgLink}/number.png`,
            text: `Once confirmed we'll send you a $40 account credit that can be used on any of our services.`
        }
    }
    return (
        <section className="referral">
            <Banner title='Bangalore, India'
                text='112 E Pecan St. #1135, San Antonio, TX 78205'
                urlText='Refer a friend'
                img={`${link}/vendor/images/banner_banner_bg.jpg`}
                url={link}
                urlIcon='fa-long-arrow-alt-right' />
            <section class="contact">
                <div class="container">

                    <CommonHead title="Here’s how it works" />
                    <Referd Referrer={obj} />
                </div>
            </section>
            <section class="share">
                <div class="container">

                    <CommonHead title='Ready to share?' slogan='Your support means we can spend less on advertising and <br/> more on creating a better service for you.' icon='fa-heart' />

                    <div class="row">
                        <div class="col-md-4 col-sm-12 offset-md-4">
                            <div class="login_bar">
                                <h5>Please Log in</h5>
                                <h6>You must have an account to refer a friend.</h6>
                                <a href={link} class="btn">Login or register</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}


export default Refer
