import React from 'react'
import './menu-card.css'
import { cards } from './MenuData'
function Menucard() {
  return (
    <>
    <div className="title" style={{paddingTop:'40px'}}>
        <h1 style={{color:'white'}}>OUR <span style={{color:'#f5b70a'}}>Menu</span></h1>
    </div>
    <div className="cont">
   {cards.map((card,index) => (
    <div className="card-container">
       <div className="card-main">
        <div className="card-img">
            <img src={card.img} alt="" />
        </div>
        <div className="card-titles">
            <p className='title-p'>{card.title}</p>
        </div>
        <div className="card-text">
            <p className='text-p'>{card.text}</p>
        </div>
        <div className="card-rate">
          <div className="card-stars">
            <span>{card.rating}</span>
          </div>            
<div className="card-price" >
    <span style={{color:'white'}}>{card.price}</span>
</div>
        </div>
        <div className="card-button">
            <button>Get More info</button>
        </div>
       </div>
    </div>
    ))}</div>
    </>
  )
}

export default Menucard