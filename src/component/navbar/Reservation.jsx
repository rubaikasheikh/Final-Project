import React from 'react'
import '../../component/navbar/navbar.css'
import img1 from'../../assets/seating_capacity_header.avif'

function Reservation() {
  return (
    <>
      

      <div id='hero'>
    <div >
<div id='heading'>Create<div/>
<div id='heading2'>reservation</div>
<div id='heading3'>get the freshest ingredients from hunger hunt </div>
    </div>
    </div>
    
    </div>


    <div>  
      <h1 id='h2' >Make Your</h1>
    </div>
    <div >
    <div id='Head'>Online booking</div>
    <div classsName="reservation">    
      
      <input type="Date"/> 
      <input type="Time"/>
      <select> 
       <option value="1">1 person</option>
       <option value="2">2 person</option>
        <option value="3">3 person</option>
       <option value="4">4 person</option>
       <option value="5">5 person</option>
      </select>
       
          </div>
    </div>

     <div><img src={img1} alt="" /></div>
     <div>  
      <h1 id='h2' >Check</h1>
    </div>
    <div >
    <div id='Head'>Our Reservation </div>
    </div>
    <div className='div'>
<h4>Reserve by Phone</h4>
<p>
Tourists can reserve hotel by Phone. Fully functional when not.Swipe enabled. Or disabled, if you prefer.Fully responsive. Scales with its container.Separate settings per breakpoint Uses CSS3 when available. Fully functional when not.Swipe enabled. Or disabled, if you prefer.</p>

<p>Restaurant: (123) 459-7847</p>
<p>Cellphone: (111) 980-300-00</p>
</div>


<div className='div'>
<h4>View our restaurants address</h4>
<p>
Tourists can reserve hotel by Phone. Fully functional when not.Swipe enabled. Or disabled, if you prefer.Fully responsive. Scales with its container.Separate settings per breakpoint Uses CSS3 when available. Fully functional when not.Swipe enabled. Or disabled, if you prefer Or disabled, if you prefer ve. Scales with its container.Separate settings.</p>
</div>

<div className='Oakland'>
<div>
<h4>Oakland</h4>
<p>1693 Park Street</p>
<p>reservation@hungerhunt.com</p>
</div>


<div>
<h4>Oakland</h4>
<p>1693 Park Street</p>
<p>reservation@hungerhunt.com</p>
</div>
</div>


<div className='Oakland'>
<div>
<h4>Oakland</h4>
<p>1693 Park Street</p>
<p>reservation@hungerhunt.com</p>
</div>


<div>
<h4>Oakland</h4>
<p>1693 Park Street</p>
<p>reservation@hungerhunt.com</p>
</div>
</div>
    </>



  )
}

export default Reservation
