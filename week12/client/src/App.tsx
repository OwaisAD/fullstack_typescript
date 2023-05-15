import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { toast } from "react-hot-toast";
import { setContext } from "@apollo/client/link/context";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Error from "./page/Error";

const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) {
    if (graphQLErrors[0].message === "Cannot read properties of undefined (reading 'thread_id')")
      return;
    graphQLErrors.map(({ message }) => {
      toast.error(`${message}`);
    });
  }
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("ecoflipr-user-token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : null,
    },
  };
});

const link = from([errorLink, new HttpLink({ uri: "http://localhost:3001/graphql" })]);

const client = new ApolloClient({
  link: authLink.concat(link),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </ApolloProvider>
  );
}

export default App;
