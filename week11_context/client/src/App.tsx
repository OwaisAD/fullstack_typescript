import { useState, useEffect } from "react";
import "./App.css";
// https://www.apollographql.com/docs/react/get-started
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from "@apollo/client";
import SimpleCards from "./components/SimpleCards";
import WithUseQuery from "./components/WithUseQuery";
import ThemeContextProvider from "./contexts/ThemeContext";
import NavBar from "./components/NavBar";
import Content from "./components/Content";
import Login from "./components/Login";
import CurrentUserContextProvider from "./contexts/CurrentUserContext";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <>
      <ThemeContextProvider>
        <CurrentUserContextProvider>
          <div style={{ border: "1px solid blue" }}>
            <NavBar />
            <Content />
          </div>
        </CurrentUserContextProvider>
      </ThemeContextProvider>
      <ApolloProvider client={client}>
        <WithUseQuery />

        {/* Different way of sending the client to the component: */}
        <SimpleCards client={client} />
      </ApolloProvider>
    </>
  );
};

export default App;
