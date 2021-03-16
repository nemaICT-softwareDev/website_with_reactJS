import React, { Component } from "react";

const navStyle = {
    backgroundColor: 'skyblue',
    height: '5.313rem',
    fontSize: '1.3rem',
    marginTop: '.5rem'
}


class Header extends Component {
    render() {
        return (
                <nav className="navbar  navbar-expand-lg  navbar-light" style={navStyle}>
                    <a className="navbar-brand"  href="#">Educational Games - Flower Arrangers</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                             data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown" value={this.props.genre}>
                                <a  className="nav-link dropdown-toggle" href="#"  id="navbarDropdown" role="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Filter Games
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown" >
                                    <a className="dropdown-item" href="#">All</a>
                                    <a className="dropdown-item" href="#">New Games</a>
                                    <a className="dropdown-item" href="#">Fun</a>
                                    <a className="dropdown-item" href="#">Math</a>
                                    <a className="dropdown-item" href="#">Science</a>
                                </div>
                            </li>
                        </ul>
                   </div>
                </nav>
        );
    }
}
export default Header;