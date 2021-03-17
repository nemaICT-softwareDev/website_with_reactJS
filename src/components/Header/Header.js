import React, { useState, useEffect } from "react";
import "./Header.css";
import { CSSTransition } from "react-transition-group";


export default function Header (){

    const [isNavVisible, setNavVisibility] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 700px)");
        mediaQuery.addListener(handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);

        return () => {
            mediaQuery.removeListener(handleMediaQueryChange);
        };
    }, []);

    const handleMediaQueryChange = mediaQuery => {
        if (mediaQuery.matches) {
            setIsSmallScreen(true);
        } else {
            setIsSmallScreen(false);
        }
    };

    const toggleNav = () => {
        setNavVisibility(!isNavVisible);
    };

        return (
                <header className="Header">
                   <p>
                      <img src={require("./eduGamesLogo.png")} className="Logo" alt="logo" />&nbsp; Educational Games
                   </p>
                    <CSSTransition
                        in={!isSmallScreen || isNavVisible}
                        timeout={350}
                        classNames="NavAnimation"
                        unmountOnExit
                    >
                        <nav className="Nav">
                            <a href="/">Home</a>
                            <a href="/">New Games</a>
                            <a href="/">About</a>
                            <a href="/">Contact</a>
                            <button>Logout</button>
                        </nav>
                    </CSSTransition>
                    <button onClick={toggleNav} className="Burger">
                        🍔
                    </button>
                </header>


        );

}
