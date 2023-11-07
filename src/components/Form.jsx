import React, { useContext, useState } from "react";
import Button from "./UI/Button";
import Input from "./UI/Input";
import { SuccessContext } from "../store/SuccessContext";

function Form() {
  const successContext = useContext(SuccessContext)

  const [userInput, setUserInput] = useState("");
  const [error, setError] = useState(false);

  function handleChange(e) {
    setError(false);
    setUserInput(e.target.value);
  }

  const emailIsValid =
    userInput.trim().includes("@") && userInput.trim() !== "";

  function handleInputBlur() {
    if (!emailIsValid) {
      setError(true);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!emailIsValid) {
      setError(true);
      return;
    }

    successContext.storeSuccess(userInput)
  }

  return (
    <form id="newsletter-form" onSubmit={handleSubmit}>
      <Input
        id={"email"}
        label={"Email Adress"}
        hasError={error}
        type={"text"}
        placeholder={"email@company.com"}
        value={userInput}
        onChange={handleChange}
        onBlur={handleInputBlur}
      />
      <Button className="w-100" type="submit">
        Subscribe to monthly newsletter
      </Button>
    </form>
  );
}

export default Form;
