import React from 'react'
import FeaturedProductsCard from '../FeaturedProductsCard'
import "./index.scss"

function FeaturedProductsSection() {
  return (
    <div className='featuredProductsSection'>
      <div className="featuredProductsSection_header">
        <p className='featuredProductsSection_title'>FEATURED REVIEWS</p>
        <button className='featuredProductsSection_btn'>SEE ALL REVIEWS</button>
      </div>
        <FeaturedProductsCard/>
    </div>
  )
}

export default FeaturedProductsSection