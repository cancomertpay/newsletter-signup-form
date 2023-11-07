import React from "react";
import illusturation from "../assets/images/illustration-sign-up-desktop.svg";

function NewsletterImg() {
  return (
    <>
      <div id="newsletter-img" className="d-sm-none d-md-block">
        <img src={illusturation} alt="illusturation" />
      </div>

    </>
  );
}

export default NewsletterImg;
