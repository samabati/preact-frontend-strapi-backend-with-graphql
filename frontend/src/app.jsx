import "./app.css";
import { Router } from "preact-router";
import SiteHeader from "./components/header/header";
import Home from "./pages/home/home";
import Category from "./pages/category/category";
import Reviews from "./pages/review-details/reviews";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});

export function App() {
  return (
    <div id="app">
      <ApolloProvider client={client}>
        <SiteHeader></SiteHeader>
        <Router>
          <Home path="/" />
          <Category path="/category/:id" />
          <Reviews path="reviews/:id" />
        </Router>
      </ApolloProvider>
    </div>
  );
}
