import { createContext, useState } from "react";

export const SuccessContext = createContext({
  email: "",
  isSuccess: false,
  storeSuccess: (userEmail) => {},
  clearSuccess: () => {},
});

export default function SuccessContextProvider({ children }) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [email, setEmail] = useState("");

  const storeSuccess = (userEmail) => {
    setIsSuccess(true);
    setEmail(userEmail);
  };

  const clearSuccess = () => {
    setIsSuccess(false);
    setEmail("");
  };

  return (
    <SuccessContext.Provider
      value={{ email, isSuccess, storeSuccess, clearSuccess }}
    >
      {children}
    </SuccessContext.Provider>
  );
}
