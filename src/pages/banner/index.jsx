import Desk from "./desk";
/* import Mobile from "./mobile"; */


function Banner(props) {
    const { title, miniTitle, text, price, img, url, urlIcon, urlText, buttonText}=props;
    return (
        <Desk title={title} miniTitle={miniTitle} text={text} price={price} image={img} link={url} linkIcon={urlIcon} linkText={urlText} buttonText={buttonText} />
    )
}

export default Banner
