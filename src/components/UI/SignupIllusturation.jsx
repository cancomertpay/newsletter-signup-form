import React from "react";
import illusturationDesktop from "../../assets/images/illustration-sign-up-desktop.svg";
import illusturationMobile from "../../assets/images/illustration-sign-up-mobile.svg";

function SignupIllusturation({ id, className }) {
  const mobile = illusturationMobile;
  const desktop = illusturationDesktop;

  let selectedImg;

  if (id.search("desktop")) {
    selectedImg = mobile;
  } else {
    selectedImg = desktop;
  }

  return (
    <div id={id} className={className ? className : ""}>
      <img src={selectedImg} className="signup-image" alt="illusturation-signup" />
    </div>
  );
}

export default SignupIllusturation;
