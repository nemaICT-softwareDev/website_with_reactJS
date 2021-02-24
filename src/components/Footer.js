import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";


class Footer extends React.Component {
    render() {
        return (
            <MDBFooter color="blue" className="font-small pt-4 mt-4 footer">
                <hr/>
                <MDBContainer className="text-center text-md-left">
                    <MDBRow>
                        <MDBCol md="6">
                            <h5 className="descriptionFooter">Dalai Lama qoutes:</h5>
                                <blockquote className={"descriptionQuote"}>"Don't ever mistake my silence for ignorance,
                                    my calmness for acceptance or my kindness for weakness.
                                    Compassion and tolerance are not a sign of weakness, but a sign of strength."</blockquote>
                        </MDBCol>
                        <MDBCol md="4" >
                            <h5 className="descriptionLinks">Interessante Links</h5>
                            <ul>
                                <li className="list-unstyled ">
                                    <a className={"links"} href="https://reactjs.org/docs/introducing-jsx.html">React</a>
                                </li>
                                <li className="list-unstyled links">
                                    <a className={"links"} href="https://tutorials.freshersnow.com/?s=header+reactJs">Freshers Now</a>
                                </li>
                                <li className="list-unstyled links">
                                    <a className={"links"} href="https://bootstrapcreative.com/resources/bootstrap-4-css-classes-index/">Bootstrap
                                        Creative</a>
                                </li>
                                <li className="list-unstyled links">
                                    <a className={"links"} href="https://reactor-js.com/">Reactor JS</a>
                                </li>
                            </ul>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <div className="footer-copyright text-center py-3">
                    <MDBContainer>
                        &copy; {new Date().getFullYear()} <a href="#">Webmaster</a>
                    </MDBContainer>
                </div>
            </MDBFooter>
        );
    }
}


export default Footer;