import React from 'react'
import './Footer1.css'
import { BsFacebook, BsLinkedin} from "react-icons/bs";
import { FiInstagram} from "react-icons/fi";
import { AiFillTwitterCircle} from "react-icons/ai";
import { Link } from 'react-router-dom';
function Footer1() {
  return (
    <>
<div className="footer">
    <div className="sb__footer section__padding">
        <div className="sb__footer-links">
            <div className="sb__footer-links_div" >
                <img src='restaurant-logo.png' alt='' style={{marginTop:'-50px'}}></img>
                <div className='sb__footer-active compo' >
              <p>The purpose of a website footer is to help visitors by 
                  adding information and navigation options at the bottom of web pages.</p>
                {/* <p>Health plan</p>
                <p>individual</p> */}
                </div>
            </div>
    
            <div className="sb__footer-links_div"></div>
            <div className="sb__footer-links_div">
                <h4>Resources</h4>
                <div className='sb__footer-active'>
                <Link to="/" className='link'><p> center</p></Link>
                <Link to="/"><p> STV</p></Link>
                </div>
            </div>
            <div className="sb__footer-links_div">
                <h4>partners</h4>
                <div className='sb__footer-active'>
                <Link to="/empo"><p>Swing tech</p></Link>
                </div>
            </div>
            <div className="sb__footer-links_div">
                <h4>company</h4>
                <div className='sb__footer-active'>

                <Link href="/">
                    <p> about</p>
                </Link>
                <Link to="/">
                    <p> press</p>
                </Link>
                <Link to="/">
                    <p>  contact</p>
                </Link>
                <Link to="/">
                    <p>  career</p>
                </Link></div>
            </div>
            <div className="sb__footer-links_div">
                <h4>social media</h4>
                <div className='sb__footer-active'>

                <div className='socialmedia'>
                <Link href="/"><BsFacebook/> </Link>
             <Link to="/"> <FiInstagram/></Link> 
              <Link to="/"> <BsLinkedin/></Link>
                <Link to="">   <AiFillTwitterCircle/></Link></div>
               </div>
            </div>
        </div>
<hr/>
<div className="sb__footer-below">
    <div className="sb__footer-copyright">
        <p className='pfoot'>
            {new Date().getFullYear()}CodeInn. All right reserved.
        </p>
    </div>
    {/* <div className="sb__footer-below-links">
    <div className='hover'>
        <Link to="/"><div><p>Security</p></div></Link>
        <Link to="/"><div><p>Privacy</p></div></Link>
        <Link to="/"><div><p>Terms & Conditions</p></div></Link>
        <Link to="/"><div><p>Cookie Declaration </p></div></Link></div>
    </div> */}
</div>
    </div>
</div>
    </>
  )
}

export default Footer1