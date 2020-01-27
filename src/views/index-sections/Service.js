import React from "react";
import { Container } from "reactstrap";

const Service = () => {
    return(
        <div id="service">
             <Container>

        
            <br/><br/><br/><br/>

            <div className="ui conatiner">
                <div className="ui black segment center aligned">
                    <h2><b>SERVICES</b></h2>
                </div>
              
                <br/><br/>
                <div className="doubling stackable ui four column grid center aligned">
                    <div className="column">
                        <i className="circular calculator huge icon"></i>
                        <h2>Payroll Processing</h2> <br/>
                        <p className="para">Payroll processing service solutions for all sizes of companies across all industries</p>
                    </div>
                    <div className="column">
                        <i className="circular clipboard outline huge icon"></i>
                        <h2>Labour Law Consultancy</h2> <br/>
                        <p className="para">We provide Labour Law Consultancy Services under various Labour Enactments</p>
                    </div>
                    <div className="column">
                        <i className="circular copy outline huge icon"></i>
                        <h2>HR Consultancy</h2> <br/>
                        <p className="para">We provide HR Consultancy Services for the benefit of employers as well as employees</p>
                    </div>
                    <div className="column">
                        <i className="circular cloud out huge icon"></i>
                        <h2>Web Development</h2> <br/>
                        <p className="para">We provide HR Consultancy Services for the benefit of employers as well as employees</p>
                    </div>
                </div>
            </div>


            <br/><br/><br/><br/>
            <div className="ui divider"></div>
         
            </Container>
        </div>
    )
}

export default Service;