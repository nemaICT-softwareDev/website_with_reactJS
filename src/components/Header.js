import React from "react";
import {Container, Jumbotron} from "react-bootstrap";


class Header extends React.Component {
    render() {
        return (
            <Jumbotron className= "alert-info container-fluid header">
                    <h1 className="text-center title">Boodschap App</h1>
                    <h3 className="pull-right subTitle">Individueele opdracht - Nemilson Lopes</h3>
            </Jumbotron>
        );
    }
}
export default Header;