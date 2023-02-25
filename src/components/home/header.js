import React from 'react';

import classes from './header.module.css';

const NAV_LIST = [
    {
        name: "Home"
    },
    {
        name: "Videos"
    },
    {
        name: "Photos"
    },
    {
        name: "About us"
    },
    {
        name: "Donation"
    },
]

function Header(props) {
    const isScrolling = () => {
        const headerElement = document.querySelector('header');
        console.log(headerElement)
        let windowPosition = window.scrollY > 250;
        headerElement.classList.toggle(classes.active, windowPosition);
    }
    window.addEventListener('scroll', isScrolling);
    return (
        <header className={`${classes.primary_header}`}>
            <nav className={`${classes.navbar} ${classes.container}`}>
                <a href='#' className={classes.logo}></a>
                <ul className={classes.nav_list}>
                    {NAV_LIST.map((el) => <li key={el.name}><a key={el.name + "_link"} href="#" className={classes.nav_link}>{el.name}</a></li>)}
                </ul>
            </nav>
        </header>
    );
}

export default Header;