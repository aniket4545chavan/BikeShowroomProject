import React from 'react'
import img from './bike3.png'
import './Duke.css'
const Duke = () => {
  return (
    <>
    <section class="wrapper top">
    <div class="scontainer">
      <div class="text">
        <p>(World's Thinnest SUPER DUKE)</p>
        <h1>1290 Super Duke Gt 2021</h1>
        <h3>Price :  ₹ 555168.00</h3>
        <button class="btn2">Buy Now</button>
      </div>
      <div class="ani_image">
        <img src={img} alt=""/>
      </div>
    </div>
  </section>
    </>
  )
}

export default Duke