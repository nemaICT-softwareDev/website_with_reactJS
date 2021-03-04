import React, { Component } from "react";
import {Jumbotron} from "react-bootstrap";

const titleStyle = {
    fontFamily: 'Gill Sans Nova Cond Ultra Bold, Algerian, serif',
    color: '#fbe53d',
    textAlign: 'center'
}
const sutbtitleStyle = {

}
class Header extends Component {
    render() {
        return (
            <Jumbotron className= "alert-info container-fluid header">
              <h1 style={titleStyle}>Boodschap App</h1>
                <h5>Nemilson Lopes</h5>
            </Jumbotron>
        );
    }
}
export default Header;