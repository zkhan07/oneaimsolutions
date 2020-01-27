import React from "react";
import { Container, Row, Col } from "reactstrap";

const Team = () => {
    return(
        <div id="team">
             <Container>

           
            <br/><br/><br/><br/>

            <div className="ui conatiner">
                <div className="ui black segment center aligned">
                    <h2><b>TEAM</b></h2>
                </div>
              
                <br/><br/>

                <div id="images">
                    <Container>
                        <Row>
                            <Col className="mr-auto ml-auto" md="2" sm="3">
                                <h4 className="images-title text-center">CEO</h4>
                                <img
                                alt="..."
                                className="img-circle img-no-padding img-responsive"
                                src={require("assets/img/faces/ceo.png")}
                                />
                                <p className="text-center">Jaweed Shaikh</p>
                                <br/><br/><br/>
                            </Col>
                            <Col className="mr-auto ml-auto" md="2" sm="3">
                                <h4 className="images-title text-center">HR Manager</h4>
                                <img
                                alt="..."
                                className="img-circle img-no-padding img-responsive"
                                src={require("assets/img/faces/mam.png")}
                                />
                                <p className="text-center">Tooba Shaikh</p>
                                <br/><br/><br/>
                            </Col>
                            <Col className="mr-auto ml-auto" md="2" sm="3">
                                <h4 className="images-title text-center">Software Developer</h4>
                                <img
                                alt="..."
                                className="img-circle img-no-padding img-responsive"
                                src={require("assets/img/faces/sir.png")}
                                />
                                <p className="text-center">Lokesh Singh</p>
                                <br/><br/><br/>
                            </Col>
                            <Col className="mr-auto ml-auto" md="2" sm="3">
                                <h4 className="images-title text-center">Software Developer</h4>
                                <img
                                alt="..."
                                className="img-circle img-no-padding img-responsive"
                                src={require("assets/img/faces/sir1.jpg")}
                                />
                                <p className="text-center">Niraj Sharma</p>
                                <br/><br/><br/>
                            </Col>
                            <Col className="mr-auto ml-auto" md="2" sm="3">
                                <h4 className="images-title text-center">Junior Developer</h4>
                                <img
                                alt="..."
                                className="img-circle img-no-padding img-responsive"
                                src={require("assets/img/faces/zaid.png")}
                                />
                                <p className="text-center">Zaid Khan</p>
                                <br/><br/><br/>
                            </Col>
                            
                        </Row>
                    </Container>
                </div>
                </div>
     

                


            <br/><br/>
            <div className="ui divider"></div>
      
            </Container>
        </div>
    )
}

export default Team;