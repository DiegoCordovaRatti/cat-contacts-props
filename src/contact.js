import React from 'react'
import PhoneIcon from './images/phone-icon.png'
import EmailIcon from './images/mail-icon.png'

export default function Contact({Img, Name, PhoneNumber, Email}){
    return(
        <div className="contact-card">
            <img src={require (`${Img}`)} alt="" />
            <h3>{Name}</h3>
            <div className="info-group">
                <img src={PhoneIcon} alt="" />
                <p>{PhoneNumber}</p>
            </div>
            <div className="info-group">
                <img src={EmailIcon} alt="" />
                <p>{Email}</p>
            </div>
        </div> 
    )
}