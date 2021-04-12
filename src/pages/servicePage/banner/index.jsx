import Desk from "./desk";
/* import Mobile from "./mobile"; */


function Banner() {
    const url=process.env.PUBLIC_URL;
    let img = `${url}/vendor/images/banner_banner_bg.jpg`;
    return (
        <Desk title='Virtual Home Staging' text='We specialize in transforming photos of vacant properties into beautiful, virtually staged homes that sells faster and for top dollar.' price='500' image={img} link={url} />
    )
}

export default Banner
