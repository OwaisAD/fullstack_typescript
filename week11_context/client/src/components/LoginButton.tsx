import React, { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { Button } from "@mui/material";

const LoginButton = () => {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  if (currentUser !== null) {
    return <p>You are logged in as {currentUser.name}</p>;
  }

  return <Button onClick={() => setCurrentUser({ name: "Owais" })}>Log in as Owais</Button>;
};

export default LoginButton;
