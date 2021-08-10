import React, { useEffect, useState } from 'react'
import mediaObserver from '../../components/breakPoints/breakpoint'
import Desk from './desk.jsx';
import Mobile from "./mobile";

import { blog } from "../../components/data/data";

function Blog() {
    const [media, setMedia] = useState([]);
    useEffect(() => {
        mediaObserver(setMedia)
        
    }, [media])
    return (
        <>
            {media === 'mobile' ? <Mobile data={blog} /> : <Desk  data={blog}/> }
        </>
    )
}

export default Blog
