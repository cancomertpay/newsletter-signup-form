import React from "react";
import SignupIllusturation from "./SignupIllusturation";

function Container({ children }) {
  return (
    <div id="content">
      <SignupIllusturation id={"mobile-signup-img"} className={"d-md-none sign-up-img"} />
      <article>{children}</article>
      <SignupIllusturation id={"desktop-signup-img"} className={"d-sm-none d-md-block"} />
    </div>
  );
}

export default Container;
