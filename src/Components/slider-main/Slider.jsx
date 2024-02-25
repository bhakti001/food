import React, { useEffect, useState } from 'react'
import './slider.css';
import imageslide from '../../sliderData';
function Slider() {
    const [currentState,setCurrentState]=useState(0)
    useEffect(()=>{
        const timer = setTimeout(() => {
if(currentState===2){
    setCurrentState(0)
}else{
    setCurrentState(currentState+1)
}
},3000)
return () => clearTimeout(timer)
    },[currentState])
    const bgImageStyle ={
        backgroundImage: `url(${imageslide[currentState].url})`,
        // backgroundPosition:'end',
        justifyContant:'flex-end',
        backgroundSize:'contain',
  backgroundRepeat: 'no-repeat',
        height:'65vh',
        width:'90%',
        display:'flex',
    }
    // const goToNext = (currentState) => {
    //     setCurrentState(currentState)
    // }
  return (
    <>
    <div className="slide">
         <div className="container-style">
<div className="" style={bgImageStyle}></div>
<div className="description">
    <div >
        <h1>{imageslide[currentState].title}</h1>
        <p className='p'>{imageslide[currentState].body}</p>
    </div>

</div>
 {/* <div className="carousel-boult lines">
        {
            imageslide.map((imageslide,currentState)=> (
                <span className='span' key={currentState} onClick={() => goToNext(currentState)}></span>
            ))
        }
    </div> */}
         </div>
         </div>
    </>
  )
}

export default Slider