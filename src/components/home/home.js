import React, { useEffect, useState } from 'react';
import PreloadOverlay from '../shared/preloadOverlay';
import Header from './header';

import classes from './home.module.css';
import omSvg from '../../assets/images/img-om.svg';

const Home = props => {
    const [preloadState, setPreloadState] = useState(true);


    useEffect(() => {
        const preloadTimer = setTimeout(() => {
            setPreloadState(false);
        }, 500) 


        return () => {};
    }, [setPreloadState])

    return (
        <div className={classes.home_parent}>
            {preloadState ? <PreloadOverlay/> : <Header/>}
        </div>
    );
};

export default Home;