import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const footerStyle = {
    backgroundImage: `url("../bckGrnImg/2895335960720.jpg")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    backgroundColor: '#464646',
    zIndex: '0',
    marginBottom: '3em',
    color: '#2b2b2b'
}

class Footer extends React.Component {
    render() {
        return (
             <MDBFooter color="blue" className="font-small pt-4 mt-4 footer" >
                <MDBContainer  className="text-center text-md-left">
                    <MDBRow>
                        <MDBCol md="6">
                                <blockquote className={"descriptionQuote"}>"Don't ever mistake my silence for ignorance,
                                    my calmness for acceptance or my kindness for weakness.
                                    Compassion and tolerance are not a sign of weakness, but a sign of strength."</blockquote>
                        </MDBCol>
                        <MDBCol md="4" className={"pull-right"}>
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
                       <p className={"dateFooter"}> &copy; {new Date().getFullYear()} <a href="#">Webmaster</a></p>
                    </MDBContainer>
                </div>
            </MDBFooter>
        );
    }
}


export default Footer;