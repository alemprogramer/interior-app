import React, { Component } from 'react'
import HowDesk from "../HowItWork/Desk";
/* import HowMobile from "../HowItWork/Mobile"; */

class HowItWork extends Component {
    render() {
        const { title, frequents, work}=this.props;
        return (
            <HowDesk title={title} frequents={frequents} work={work} />
        )
    }
}

export default HowItWork
