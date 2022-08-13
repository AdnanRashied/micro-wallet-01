import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Portfolio from "./components/categories/portfolio.component";


const client = new ApolloClient({
  uri: "http://localhost:3005/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </nav>

          <div className="App">
            <Switch>
              <Route path="/">
                <Portfolio/>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
