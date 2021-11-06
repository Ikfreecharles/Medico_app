import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";
import {
   ApolloClient,
   InMemoryCache,
   ApolloProvider,
   HttpLink,
   from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const httpLink = new HttpLink({
   uri: "http://localhost:3001/graphql",
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
   if (graphQLErrors)
      graphQLErrors.forEach(({ message, locations, path }) =>
         console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
         )
      );

   if (networkError) console.log(`[Network error]: ${networkError}`);
});

const client = new ApolloClient({
   link: from([errorLink, httpLink]),
   cache: new InMemoryCache(),
});

ReactDOM.render(
   <ApolloProvider client={client}>
      <Provider store={store}>
         <React.StrictMode>
            <BrowserRouter>
               <App />
            </BrowserRouter>
         </React.StrictMode>
      </Provider>
   </ApolloProvider>,
   document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
