import React from 'react'
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
// import { Link } from 'react-router-dom';



export default function FooterH({headerValue, onClick, onChange}) {
  return (
   <div className='footerContainer'>
    <footer className="footer">
       
        <ul className="footerListElements"> 
            <a><li>Blog</li></a>
            <a><li>About Us</li></a>
            <a><li>Impressum</li></a>
        </ul>
        <div className='newsletter'>
            <p className="newsletterText">©  2022 All Rights Reserved.</p>
        </div>  
        <div className="socialIcons">
                <SocialIcon network="twitter" className="smIcon" />
                <SocialIcon network="facebook" className="smIcon" />
                <SocialIcon network="instagram" className="smIcon"/>
            </div>
      </footer>
    </div>
  )
}