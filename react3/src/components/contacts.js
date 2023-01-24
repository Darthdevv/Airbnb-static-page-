import React from "react";
import cell from './images/phone-icon.png';
import mail from './images/mail-icon.png';



function Contact({img,name,phone,email}){

    return (
            <div className="contact-card">
            <img src={img} alt=''/>
            <h3>{name}</h3>
                <div className="info-group">
                    <img src={cell} alt='phone'/>
                <p>{phone}</p>
                </div>
                <div className="info-group">
                    <img src={mail} alt="envelope" />
                <p>{email}</p>
                </div>
            </div>
    )
}



export default Contact;



