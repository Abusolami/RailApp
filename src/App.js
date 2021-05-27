import React from "react";
import "../src/style/app.scss";
import Navbar from "./component/partials/Navbar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import HomePage from "./component/HomePage/Homepage";
import AboutUs from "./component/AboutPage/Aboutus";
import UserProfile from "./component/userdata/Userprofile";

function App() {
  return (
    <Router>
      <Navbar />
    <Switch>
         <Route exact path="/" component={HomePage} />
         <Route exact path="/aboutus" component={AboutUs} />
        <Route exact path="/userprofile" component={UserProfile} />
    </Switch>
          </Router>
  );
}

export default App;
