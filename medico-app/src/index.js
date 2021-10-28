import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
   uri: "http://localhost:3001/graphql",
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
