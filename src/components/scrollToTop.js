import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import * as Scroll from 'react-scroll';

const RouteTop = () => {
    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

const ScrollToTop = () => {
    const scroll = () => {
        Scroll
            .animateScroll
            .scrollToTop();
    }
    const btnStyle = {
        bottom: '10px',
        right: `10%`,
        zIndex: '999',
        position: 'fixed',
        display: 'none'
    }

    return <button
        type="button"
        class='backtotop btn'
        style={btnStyle}
        id="button"
        onClick={scroll}>
        Back to top
    </button>
}

export default RouteTop
export {ScrollToTop}