import React from "react";
import "./index.scss";

function CommentsAndReviewSection() {
  return (
    <div className="commentsAndReviewSection">
      <div className="commentsAndReviewSection_img">
        <img
          src="https://i.pinimg.com/564x/4f/c2/04/4fc2049acc6599bdfaed56770485125b.jpg"
          alt=""
        />
      </div>
      <div className="commentsAndReviewSection_textBox">
        <h3>Product Comments and Reviews</h3>
        <p>
          You can find detailed reviews and user comments about make-up and skin
          care products on our site. We share tips, tricks and trends to help
          you choose the products that are best for you. Remember, every skin
          type is different, so we offer solutions to suit everyone's needs with
          our guides that will help you find the best products for you.
        </p>
      </div>
    </div>
  );
}

export default CommentsAndReviewSection;
