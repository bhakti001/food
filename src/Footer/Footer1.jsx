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
              <p>The purpose of a website  is to help to by food online and make her choice
              , it save time. 
                  </p>
            
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
                <Link to="/"><p>Swing tech</p></Link>
                </div>
            </div>
            <div className="sb__footer-links_div">
                <h4>company</h4>
                <div className='sb__footer-active'>

                <Link href="/about">
                    <p> about</p>
                </Link>
                <Link to="/menu">
                    <p> Menu</p>
                </Link>
                <Link to="/contact">
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
            {new Date().getFullYear()}. All right reserved.
        </p>
    </div>

</div>
    </div>
</div>
    </>
  )
}

export default Footer1