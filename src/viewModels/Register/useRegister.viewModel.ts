import { useState } from "react";

export const useRegisterViewModel = () => {
  const [userData, setUserData] = useState({
    name: "Luizao"
  });

  return {
    userData,
    setUserData
  };
}