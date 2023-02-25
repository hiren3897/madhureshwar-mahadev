import React from 'react';
import classes from './preloadOverlay.module.css';
import omSvg from '../../assets/images/img-om.svg';

const PreloadOverlay = (props) => {
    console.log(props.display)
    return (
        <div className={`${classes.home_preload} ${classes.show}`}>
            <img src={omSvg} alt="Preload Logo"></img>
        </div>
    );
};

export default PreloadOverlay;