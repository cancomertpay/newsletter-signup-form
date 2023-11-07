import React from "react";
import listIcon from "../assets/images/icon-list.svg";

function NewsletterArticle() {
  return (
    <>
      <h2 className="lead ">Stay updated!</h2>
      <p className="newsletter-article-p ">
        Join 60,000+ product managers receiving monthly updates on:
      </p>
      <ul
        id="list"
        className=""
      >
        <li className="">
          <img src={listIcon} alt="success-icon" />
          <p>Product discovery and buildng what matters</p>
        </li>
        <li className="">
          <img src={listIcon} alt="success-icon" />
          <p>Measuring to ensure updates are a success</p>
        </li>
        <li className="">
          <img src={listIcon} alt="success-icon" />
          <p>And much more!</p>
        </li>
      </ul>
    </>
  );
}

export default NewsletterArticle;
