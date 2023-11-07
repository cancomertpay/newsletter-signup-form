import React, { useContext } from "react";
import SuccessIcon from "./UI/SuccessIcon";
import Button from "./UI/Button";
import { SuccessContext } from "../store/SuccessContext";

function Success() {
  const {clearSuccess, email} = useContext(SuccessContext)
  return (
      <div id="success">
        <div id="success-content">
          <SuccessIcon />
          <h2 className="lead">Thanks for subscribing!</h2>
          <p className="success-p">
            A confirmation email has been sent to <span className="bold">{email}</span>. Please open it and
            click the button inside to confirm your subscribtion.
          </p>
        </div>
          <Button className="w-100" onClick={clearSuccess} >Dismiss message</Button>
      </div>
  );
}

export default Success;
