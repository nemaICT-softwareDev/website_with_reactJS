import React from "react";
import {Jumbotron} from "react-bootstrap";


class Header extends React.Component {
    render() {
        return (
            <Jumbotron className= "alert-info container-fluid header">
              <h1 className="text-center title">Boodschap App</h1>
            </Jumbotron>
        );
    }
}
export default Header;