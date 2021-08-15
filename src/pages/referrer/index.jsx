import React, { useState, useContext, useEffect} from 'react'
import CommonHead from "../../components/headings/index";
import Referd from "../../components/referComps/index";
import Banner from "../../components/banner/index";

// dummy data
import imgUrl, { url, referral } from "../../components/data/data";

// Global Loader
import Loaders from '../../components/contexts';

function Refer() {
    const { loader, updateLoader }= useContext(Loaders)
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(referral);
        setTimeout(() => {
            updateLoader(false)
        }, 2000);
        return () => {
            updateLoader(true)            
        };
        // eslint-disable-next-line
    }, []);
    return (
        <> {loader === false &&
        <section className="referral">
            <Banner title='Bangalore, India'
                text='112 E Pecan St. #1135, San Antonio, TX 78205'
                urlText='Refer a friend'
                img={`${imgUrl}/banner_banner_bg.jpg`}
                url={url}
                urlIcon='fa-long-arrow-alt-right' />
            <section class="contact">
                <div class="container">

                    <CommonHead title="Here’s how it works" />
                    <Referd Referrer={data} />
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
                                <a href={url} class="btn">Login or register</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    }</>
    )
}


export default Refer
