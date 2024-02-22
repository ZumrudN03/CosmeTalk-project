import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import "./index.scss"
import SkinCareReviewsCards from '../../Components/SkinCareReviewsComponents/SkinCareReviewsCards'

function SkinCareReviews() {
  return (
    <>
      <Helmet>
        <title>SkinCare Reviews</title>
      </Helmet>
      <div className="skincare">
        <p className="skincare_header">SkinCare Reviews</p>
        <div className="skincare_location">
          <Link to={"/"}>
            <p className="skincare_location_home">Home</p>
          </Link>
          <p className="skincare_location_skincare">SkinCare</p>
        </div>
      </div>
      <SkinCareReviewsCards/>
    </>
  )
}

export default SkinCareReviews