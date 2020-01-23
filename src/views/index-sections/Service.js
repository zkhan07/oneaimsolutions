import React from "react";
import { Container } from "reactstrap";

const Service = () => {
    return(
        <div>
             <Container>

        
            <br/><br/><br/><br/>

            <div className="ui conatiner">
                <div className="ui grid center aligned">
                    <h1><b>SERVICES</b></h1>
                </div>
                <br/><br/><br/><br/>
                <div className="doubling stackable ui four column grid center aligned">
                    <div className="column">
                        <i className="circular cart huge icon"></i>
                        <h2>Marketing</h2>
                        <p>Customer satisfaction survey</p>
                    </div>
                    <div className="column">
                        <i className="circular paste huge icon"></i>
                        <h2>Consulting</h2>
                        <p>Customer satisfaction survey</p>
                    </div>
                    <div className="column">
                        <i className="circular copy huge icon"></i>
                        <h2>Analytics</h2>
                        <p>Customer satisfaction survey</p>
                    </div>
                    <div className="column">
                        <i className="circular users huge icon"></i>
                        <h2>Business</h2>
                        <p>Customer satisfaction survey</p>
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