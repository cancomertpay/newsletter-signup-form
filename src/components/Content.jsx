import React from "react";
import Form from "./Form";
import NewsletterArticle from "./NewsletterArticle";

function Content() {
  return (
    <div id="newsletter-article" className="p-2">
      <NewsletterArticle />
      <Form />
    </div>
  );
}

export default Content;
