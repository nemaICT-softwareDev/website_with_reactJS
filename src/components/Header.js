import React, { Component } from "react";
import {Jumbotron} from "react-bootstrap";

const titleStyle = {
    fontFamily: 'Gill Sans Nova Cond Ultra Bold, Algerian, serif',
    color: '#fbe53d',
    textAlign: 'center'
}
const subTitleStyle = {
    fontFamily: 'Apple Chancery, cursive,  sans-serif',
    color: 'rgb(222 195 70)'
}

class Header extends Component {
    render() {
        return (
            <Jumbotron className= "alert-info container-fluid header">
              <h1 style={titleStyle}>Boodschap App</h1>
                <h4 style={subTitleStyle}>Nemilson Lopes</h4>
            </Jumbotron>
        );
    }
}
export default Header;