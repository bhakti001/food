import React from 'react'
import './ChafCard.css'
import { slidercar} from './SliderData';
function ChafCard(props) {
  return (
    <>
    {slidercar.map((cards,index) => (
      <div className='mycard'>
<div className="imge">
  <img src={cards.img} alt="" className='cardimg' />
  </div>
  <p className='titlecar'>{cards.title}</p>
  <p className='textcar'> {cards.text}</p>
 <div className="rate"> {cards.rating}
  {/* <span class="fa fa-star checked" style={{color:'#f5b70a'}}></span> &nbsp;
  <span class="fa fa-star checked" style={{color:'#f5b70a'}}></span> &nbsp;
  <span class="fa fa-star checked" style={{color:'#f5b70a'}}></span> &nbsp; */}
  </div>

  </div>)
  )}
  </>
  )
}

export default ChafCard;