import React from "react";
import { Container, Row, Col } from "reactstrap";

const Project = () => {
    return(
        <div id="project">
             <Container>

             <div className="ui divider"></div>
            <br/><br/><br/><br/>

            <div className="ui conatiner">
                <div className="ui black segment center aligned">
                    <h2><b>PROJECTS</b></h2>
                </div>
                <br/>

                <div className="doubling stackable ui three column grid center aligned">
                    <div className="column">
                        <div className="ui image">
                            <img src={require("assets/img/project/1.jpg")} />
                        </div>
                    </div>
                    <div className="column">
                        <div className="ui image">
                            <img src={require("assets/img/project/2.jpg")} />
                        </div>
                    </div>
                    <div className="column">
                        <div className="ui image">
                            <img src={require("assets/img/project/3.jpg")} />
                        </div>
                    </div>
                    <div className="column">
                        <div className="ui image">
                            <img src={require("assets/img/project/4.jpg")} />
                        </div>
                    </div>
                    <div className="column">
                        <div className="ui image">
                            <img src={require("assets/img/project/5.jpg")} />
                        </div>
                    </div>
                    <div className="column">
                        <div className="ui image">
                            <img src={require("assets/img/project/6.jpg")} />
                        </div>
                    </div>
                  
                   
                   
                </div>
                </div>
     

                


            <br/><br/><br/><br/>
            
     
            </Container>
        </div>
    )
}

export default Project;