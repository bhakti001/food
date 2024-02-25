import React from 'react'
import './ChefSlider.css'
import ChafCard from './ChafCard';
function ChefSlider() {
    let box =document.querySelector('.product-container')
    const btnprev =() => {
        let width = box.clientWidth;
box.scrollLeft = box.scrollLeft - width;
console.log(width);
    }
    const btnnext =() => {
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + width;
        console.log(width);
    }
  return (
    <>
        <div className="product-carousel">
    <button className='pre-btn'  onClick={btnprev}><p>&lt;</p></button>
    <button className='next-btn' onClick={btnnext}><p>&gt;</p></button>


    <div className="product-container">
        <ChafCard cardno='1'/>
    {/*
        <ChafCard cardno='2'/>
        <ChafCard cardno='3'/>
        <ChafCard cardno='4'/>
        <ChafCard cardno='5'/>
        <ChafCard cardno='6'/>
        <ChafCard cardno='7'/>
        <ChafCard cardno='8'/>
        <ChafCard cardno='9'/>
        <ChafCard cardno='10'/>
        <ChafCard cardno='11'/>
        <ChafCard cardno='12'/>
        <ChafCard cardno='13'/>
        <ChafCard cardno='14'/>
        <ChafCard cardno='15'/> */}
    </div>
</div>
    </>
  )
}

export default ChefSlider