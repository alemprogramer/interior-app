import React from 'react'
import FaqDesk from "./Desk";
/* import HowMobile from "./Mobile"; */

const HowItWork = (props)=> {
    
        const { title, object}=props;
        return (
            <FaqDesk title={title} obj={object} />
        )
}

export default HowItWork
