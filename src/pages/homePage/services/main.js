import React, { useEffect, useState } from 'react';
import mediaObserver from "../../../components/breakPoints/breakpoint";
import DeskService from "./index";
import Mobile from "./mobile";

function Services() {
    const [media, setMedia] = useState();
    useEffect(() => {
        mediaObserver(setMedia);
    }, [media]);
    return (
        <>
            {media === 'mobile' ? <Mobile /> : <DeskService />}
        </>
    )
}

export default Services
