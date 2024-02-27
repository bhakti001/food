import React from 'react'
import './ChefSlider.css'
import ChafCard from './ChafCard';
function ChefSlider() {
 
  return (
    <>
        <div className="product-carousel">
    {/* <button className='pre-btn'  onClick={btnprev}><p>&lt;</p></button>
    <button className='next-btn' onClick={btnnext}><p>&gt;</p></button> */}


    <div className="product-container">
        <ChafCard cardno='1'/>
  
    </div>
</div>
    </>
  )
}

export default ChefSlider