import React, { Fragment } from 'react';

function Footer (){
    return(
        <Fragment>
            <div className="footer-container">
                <div className="email-section">
                    <h2 className="email-heading">
                        Email
                    </h2>
                    <p className="email">
                        mirazali1998@gmail.com
                    </p>
                </div>
                <div className="contact-section">
                    <h2 className="contact-heading">
                        Contact
                    </h2>
                    <p className="contact">
                        7838310241
                    </p>
                </div>
                <div className="Address-section">
                    <h2 className="Address-heading">
                        Address
                    </h2>
                    <p className="Address">
                        Giri Nagar kalkaji,New Delhi
                    </p>
                </div>
            </div>
        </Fragment>
    )
}

export default Footer;