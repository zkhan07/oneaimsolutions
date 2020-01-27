import React from "react";
import { Container } from "reactstrap";

const Footer = () => {
    return(
        <div className="footer">
             <Container>
               

            <br/><br/>
           
            <div className="ui container">
            <div className="doubling stackable ui equal width Column grid">
                <div className="column">
                <h3><b>OneAimSolutions</b></h3>
                <div class="ui link list">
                <p>OneAimSolutions take utmost care in providing prompt service and answer the queries our customers are having.</p>

                </div>
                </div>


                <div className="column">
                <h3>About OneAimSolutions </h3>
                <div class="ui link list">
                <a href="#" class="item">Home</a>
                <a href="#aboutus" class="item">About</a>
                <a href="#service" class="item">Services</a>
                <a href="#team" class="item">Team</a>
                <a href="#portfolio" class="item">Portfolio</a>
                <a href="#project" class="item">Projects</a>
                <a href="#contactus" class="item">Contact</a>
                </div>
                </div>

            
                <div className="column">
                <h3> Our Services </h3>
                <div class="ui link list">
                <a href="#service" class="item">Payroll Processing</a>
                <a href="#service" class="item">Labour Law Consultancy</a>
                <a href="#service" class="item">HR Consultancy</a>
                <a href="#service" class="item">Web Development</a>
                </div>
                </div>

                <div className="column">
                    <h3> Connect </h3>
                    <div class="ui link list">
                        <a href="https://mail.google.com/mail/u/0/#inbox" class="item"> 
                            <i className="large circular mail icon"></i>
                        </a>
                        <a href="https://twitter.com/oneaimsolutions" class="item">
                            <i className="large circular twitter icon"></i>
                        </a>
                        <a href="https://www.facebook.com/oneaimsolutions.oneaimsolutions.1" class="item">
                            <i className="large circular facebook icon"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/oneaimsolutions-india-8ba8b9191/" class="item">
                           <i className="large circular linkedin icon"></i>
                        </a>
                        <a href="https://www.instagram.com/oneaimsolutions2/?hl=en" class="item">
                            <i className="large circular instagram icon"></i>
                        </a>
                    </div>
                </div>

            </div>
        </div>

            <br/>
            <div className="ui divider"></div>
           
            </Container>
        </div>
    );
}

export default Footer;