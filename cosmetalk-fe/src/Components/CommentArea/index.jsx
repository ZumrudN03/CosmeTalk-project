import React from "react";
import "./index.scss";

function CommentArea() {
  return (
    <div className="commentArea">
      <div className="commentArea_header">
        <p>Leave a Reply</p>
      </div>
      <form action="">
        <div className="commentArea_textarea">
          <label htmlFor="textarea">COMMENT:</label>
          <textarea name="" id="textarea" cols="" rows=""></textarea>
        </div>
        <div className="commentArea_input">
          <div className="commentArea_input_user">
            <label htmlFor="name">YOUR NAME:</label>
            <input type="text" id="name" />
          </div>
          <div className="commentArea_input_user">
            <label htmlFor="email">YOUR EMAIL:</label>
            <input type="text" id="email" />
          </div>
        </div>
        <div className="commentArea_btn">
        <button>ADD COMMENT</button>
        </div>
      </form>
    </div>
  );
}

export default CommentArea;
