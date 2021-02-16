import React from "react";
import {Container, Jumbotron} from "react-bootstrap";


class Header extends React.Component {
    render() {
        return (
            <Jumbotron fluid className= "alert-info">
                <Container>
                    <h1 className="text-center title">BoodschApp</h1>
                    <h2 className="subTitle">Individuele opdracht - Nemilson Lopes</h2>
                  </Container>
            </Jumbotron>
        );
    }
}
export default Header;