import React from 'react'
import HowDesk from "./Desk";
/* import HowMobile from "../HowItWork/Mobile"; */

const HowItWork = (props)=> {
    
    const { title, frequents, work } = props;
    return (
        <HowDesk title={title} frequents={frequents} work={work} />
    )
}

export default HowItWork
