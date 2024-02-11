import React from "react";
import "./index.scss";

function CommunicationSection() {
  return (
    <div className="communicationSection">
      <div className="communicationSection_textBox">
        <h3>Communication</h3>
        <p>
          Thank you for joining the CosmeTalk family! Stay connected with us by
          following our social media accounts and giving us your feedback. We
          are here for all your beauty questions.We look forward to supporting
          you on your beauty and care journey!
        </p>
        <h4>Best regards, CosmeTalk team</h4>
      </div>
      <div className="communicationSection_img">
        <img
          src="https://i.pinimg.com/564x/a4/64/ab/a464abcbb121ecd3af6ed7425968f754.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default CommunicationSection;
