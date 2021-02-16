import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";


class Footer extends React.Component {
    render() {
        return (
            <MDBFooter color="blue" className="font-small pt-4 mt-4">
                <hr/>
                <MDBContainer fluid className="text-center text-md-left">

                    <MDBRow>

                        <MDBCol md="6">

                            <h5 className="title">Footer Content</h5>
                            <p>
                                Deze website is gemaakt met ReactJS - html5 en Bootstrap
                            </p>
                        </MDBCol>
                        <MDBCol md="4" className="text-left">
                            <h5 className="title">Links</h5>
                            <ul>
                                <li className="list-unstyled">
                                    <a href="https://reactjs.org/docs/introducing-jsx.html">React</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="https://tutorials.freshersnow.com/?s=header+reactJs">Freshers Now</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="https://bootstrapcreative.com/resources/bootstrap-4-css-classes-index/">Bootstrap
                                        Creative</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="https://reactor-js.com/">Reactor JS</a>
                                </li>
                            </ul>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <div className="footer-copyright text-center py-3">
                    <MDBContainer fluid>
                        &copy; {new Date().getFullYear()} <a href="#">Webmaster</a>
                    </MDBContainer>
                </div>
            </MDBFooter>
        );
    }
}


export default Footer;