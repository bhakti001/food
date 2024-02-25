import React from 'react'
import { productcard } from '../../Data'
import './Card.css'
import { Link } from 'react-router-dom'
function Card() {
  return (
    <>
        <div className="menu" >
            <h1 className="heading">
                OUR  <span className='span'>Menu</span>
            </h1></div>
            <div className="containt">
            <div className="box-container">
                {productcard.map((item,index) => (
                    <div className="box">
                    <div className="img">
                        <img src={item.img} alt="" className='images' /></div>
                         <p className='title'>{item.title}</p>
                         <p className='desc'>{item.desc}</p>
                         <Link to='' className='button'>Oreder Now</Link>
                         <div className="rating">
                         <span class="fa fa-star checked" style={{color:'#f5b70a'}}></span> &nbsp;
                         <span class="fa fa-star checked" style={{color:'#f5b70a'}}></span> &nbsp;
                         <span class="fa fa-star checked" style={{color:'#f5b70a'}}></span> &nbsp;
                         <span className="fa fa-star-half-o" style={{color:'#f5b70a'}}></span> &nbsp;
                         <span className="fa fa-star-o" style={{color:'#f5b70a'}}></span>  &nbsp; 4.5
                         <div className="price">
                            {item.price}
                         </div>
</div>
                    </div>
                ) )}
            </div>
            </div>
    </>
  )
}

export default Card