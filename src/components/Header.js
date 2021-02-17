import React from "react";
import {Container, Jumbotron} from "react-bootstrap";


class Header extends React.Component {
    render() {
        return (
            <Jumbotron fluid className= "alert-info">
                <Container>
                    <h1 className="text-center title">Boodschap App</h1>
                    <h2 className="text-center subTitle">Individuele opdracht - Nemilson Lopes</h2>
                  </Container>
            </Jumbotron>
        );
    }
}
export default Header;