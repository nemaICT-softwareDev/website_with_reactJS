import React from "react";
import {Container, Jumbotron} from "react-bootstrap";


class Header extends React.Component {
    render() {
        return (
            <Jumbotron className= "alert-info container-fluid header">
                <Container >
                    <h1 className="text-center title">Boodschap App</h1>
                    <h2 className="text-right subTitle">Individuele opdracht - Nemilson Lopes</h2>
                  </Container>
            </Jumbotron>
        );
    }
}
export default Header;