import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

class Footer extends React.Component {
    render() {
        return (
            <MDBFooter color="blue" className="font-small pt-4 mt-4">
                <MDBContainer fluid className="text-center text-md-left">
                    <MDBRow>
                        <MDBCol md="6">
                            <h5 className="title"> Time for fun</h5>
                            <p>
                                Educational games are games explicitly designed with educational purposes,
                                or which have incidental or secondary educational value. All types of games
                                may be used in an educational environment, however educational games are
                                games that are designed to help people learn about certain subjects,
                                expand concepts, reinforce development, understand a historical event or culture,
                                or assist them in learning a skill as they play
                            </p>
                        </MDBCol>
                        <MDBCol md="6">
                            <h5 className="title">Links</h5>
                            <ul>
                                <li className="list-unstyled">
                                    <a href="https://www.education.com/games/">Educational Games for Kids</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="https://www.ducksters.com/games/">Educational Games</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="https://www.funbrain.com/">FunBrain</a>
                                </li>
                              </ul>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <div className="footer-copyright text-center py-3">
                    <MDBContainer fluid>
                        &copy; {new Date().getFullYear()} Copyright: <a href="#"> webmaster </a>
                    </MDBContainer>
                </div>
            </MDBFooter>
        );
    }
}


export default Footer;