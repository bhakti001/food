import React from 'react'
// import Slider from '../slider-main/Slider'
// import Menu from './Menu'
import HeroSlider from '../slider-main/Slidercae'
import Menucard from '../menu-card/Menu-card'
import ChefSlider from '../Slider/ChefSlider'

function Home() {
  return (
    <>
  <HeroSlider/>
<Menucard/>
<div className="menu" style={{padding:'10px'}} >
    <h1 className="heading">
          <span className='span' style={{color:'#f5b70a'}}>About</span> &nbsp;  US
    </h1></div>
<div className='about' >
         <div className="imgds">
            <img src='aboutimg.png' alt="" style={{width:'100%'}}/>
         </div>
         <div className="dives" style={{color:'white',width:'100%'}}>
            <p className='aboutptitle'>
What Makes Our Food Special?</p>
<p className='textabout'>
 our dishes start with the freshest local ingredients around the Bay Area and then crafted to perfection. A blend of traditional flavors infused with healthy twist containing no msg and low sodium. We believe in Vietnamese cuisine we should offer great tasting and a healthy balance. Our pho noodle both is slow cooked for 8 hours and made fresh each day. We use different herbs and spices to bring the flavor of our broth. We offer beef, chicken, and vegetable broth depending on the noodle soup. Our barbecue sauces is a unique crafted secret passed down from generations of a traditional Vietnamese family. Our meats and vegetables are delivered each morning to ensure freshness.</p>
         </div>
         </div>
         <ChefSlider />
    </>
  )
}

export default Home