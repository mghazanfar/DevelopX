import React from "react";
import { HomePage } from "./pages/homepage/homepage";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { PortfolioPage } from "../src/pages/portfoliopage/portfoliopage";
import { Career } from "./pages/career/career";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/view-portfolio" exact component={PortfolioPage} />
        <Route path="/career" exact component={Career} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
