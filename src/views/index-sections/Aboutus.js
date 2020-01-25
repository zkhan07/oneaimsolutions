import React from "react";
import { Container } from "reactstrap";
import "./Style.css";

const Aboutus = () => {
    return(
        <div id="aboutus">
             <Container>

        
            <br/><br/><br/><br/>

            <div className="ui conatiner">
                <div className="ui black segment center aligned">
                    <h2><b>ABOUT US</b></h2>
                </div>
                <br/>
                <div className="doubling stackable ui two column grid center aligned">
                   <div className="column">
                       <div className="ui image">
                           <img src={require("assets/img/ryan.jpg")} />
                       </div>
                   </div>
                   <div className="column">
                       <div className="item">
                           <h2><b>OneAimSolutions</b></h2> <br/>
                           <h5 className="para">We are based in Mumbai and we have our team who are professionals in Human Resources and Payroll Management , Labour Laws , Information Technology, and Finance and Taxation.</h5> <br/>
                           <h5 className="para">We are having in-depth knowledge and years of experience with us in our respective fields. Our team is dedicated for discharging their duties with excellence.</h5> <br/>
                           <h5 className="para">We take utmost care in providing prompt service and answer the queries our customers are having.</h5> <br/>
                       </div>
                   </div>
                </div>
            </div>

            <br/><br/><br/><br/>
         
            </Container>
        </div>
    )
}

export default Aboutus;