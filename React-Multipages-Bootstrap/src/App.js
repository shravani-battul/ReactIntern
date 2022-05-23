import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import MenuNavBar from "./Components/MenuNavBar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Aboutus from "./Pages/Aboutus";
import Services from "./Pages/Services";
import Products from "./Pages/Products";
import Contactus from "./Pages/Contactus";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <MenuNavBar />
        <main role="main" className="container">
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/Aboutus" component={Aboutus}></Route>
          <Route exact path="/Services" component={Services}></Route>
          <Route exact path="/Products" component={Products}></Route>
          <Route exact path="/Contactus" component={Contactus}></Route>
        </main>
        <Footer />
      </BrowserRouter>
    );
  }
}
