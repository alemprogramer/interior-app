import React from 'react'
import mediaObserver from '../breakPoints/breakpoint'
import { useState, useEffect} from 'react'
import SmallNavbar from './SmallNavbar';
import LargeNavbar from './LargeNavbar';

function NavBar() {
    const [breakPoint,
        setBreakPoint] = useState();

    useEffect(() => {
        mediaObserver(setBreakPoint)
    }, [breakPoint])

    return ( <> {
        breakPoint === 'mobile'
            ? <SmallNavbar/>
            : <LargeNavbar/>
    } </>  )
        
}

export default NavBar