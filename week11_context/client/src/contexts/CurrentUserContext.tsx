import { createContext, useState } from "react";
import Panel from "../components/Panel";
import LoginButton from "../components/LoginButton";

export const CurrentUserContext = createContext<any>(null);

export default function CurrentUserContextProvider(props: { children: JSX.Element }) {
  const [currentUser, setCurrentUser] = useState<any>(null);

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      <Panel title="Welcome">
        <LoginButton />
      </Panel>
    </CurrentUserContext.Provider>
  );
}
