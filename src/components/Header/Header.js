import React from "react";
import "./Header.css";

function Header (){

        return (
            <header className={"Header"}>
                <img src={require("./eduGamesLogo.png")} className={"Logo"} alt={"logo"}/>
                <nav className={"Nav"}>
                    <a href={"/"}>Home</a>
                    <a href={"/"}>Games</a>
                    <a href={"/"}>About</a>
                    <button>Logout</button>
                </nav>
            </header>
        );

}
export default Header;