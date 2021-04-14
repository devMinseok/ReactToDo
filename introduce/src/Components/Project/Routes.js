import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Pass from "./Pass";
import Giftrip from "./Giftrip";
import Header from "./Header";

export default () => (
  <Router>
    <Header/>
    <Route path="/Pass" component={Pass} />
    <Route path="/Giftrip" component={Giftrip} />
  </Router>
)