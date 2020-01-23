import React from "react";
import { Container } from "reactstrap";

const Contactus = () => {
    return(
        <div>
             <Container>

        
            <br/><br/><br/><br/>

            <div className="ui conatiner">
                <div className="ui grid center aligned">
                    <h1><b>CONTACT US</b></h1>
                </div>
                <br/><br/><br/><br/>
                <div className="doubling stackable ui three column grid center aligned">
                    <div className="column">
                        <i className="circular home huge icon"></i>
                        <h4><b>ADDRESS</b></h4>
                        <br/>
                        <p>702 Gulmohar,Mayfair Virar Gardens Bolinj, Virar West - 401303.</p>
                    </div>
                    <div className="column">
                        <i className="circular phone huge icon"></i>
                        <h4><b>PHONE NUMBER</b></h4>
                        <br/>
                        <p><a href="#">Jaweed Shaikh :- +973 3538 5486</a></p>
                        <p>Tooba Shaikh +91 88790 76270</p>
                        <p>Lokesh Singh +91 93736 73889</p>
                        <p>Niraj sharma +91 89755 81443</p>
                    </div>
                    <div className="column">
                        <i className="circular mail huge icon"></i>
                        <h4><b>EMAIL</b></h4>
                        <br/>
                        <p><a href="#">jaweed@oneaimsolutions.com</a></p>
                    </div>
                </div>
            </div>


            <br/><br/>
            <div className="container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.272521505711!2d72.79802851468722!3d19.44381368687795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7abd4ef5be8ef%3A0xc0197fcdc3c88c20!2sMayfair+Virar+Gardens!5e0!3m2!1sen!2sbh!4v1478336462616" width="100%" height="380" frameborder="0"  allowfullscreen></iframe>
            </div>

            <br/><br/><br/><br/>
         
         
            </Container>
        </div>
    )
}

export default Contactus;